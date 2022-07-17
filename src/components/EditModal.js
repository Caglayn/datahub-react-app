import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateRowRequest } from '../api/ApiCalls';
import { updateEditModeRowId, updateOneRowFromTableBody } from '../redux/actions/DataActions';
import { useAlert } from 'react-alert';
import { defaultModalStyles } from '../util/StyleProps';

Modal.setAppElement("#root");

const EditModal = (props) => {

    const modalStyles = defaultModalStyles;
    
    const{tableHeadersFromStore, tableBodyFromStore, activeCollectionFromStore, rowId} = useSelector(store=>({
        tableHeadersFromStore : store.tableHeaders,
        tableBodyFromStore : store.tableBody,
        activeCollectionFromStore : store.activeCollection,
        rowId : store.editModeRowId
    }));
    
    const{ isVisible, setVisible } = props;

    const[tableHeaders, setTableHeaders] = useState(tableHeadersFromStore);
    const[tableBody, setTableBody] = useState(tableBodyFromStore);
    const[activeCollection, setActiveCollection] = useState(activeCollectionFromStore);
    let[activeRow, setActiveRow] = useState((rowId) && (rowId.length>0) && tableBody[rowId]);

    useEffect(()=>{ setTableHeaders(tableHeadersFromStore) }, [tableHeadersFromStore]);
    useEffect(()=>{ setTableBody(tableBodyFromStore) }, [tableBodyFromStore]);
    useEffect(()=>{ setActiveCollection(activeCollectionFromStore) }, [activeCollectionFromStore]);
    useEffect(()=>{ setActiveRow((rowId) && (rowId.length>0) && tableBody[rowId])}, [rowId]);

    const dispatch = useDispatch();
    const alert = useAlert();

    const toggleModal = () => {
        dispatch(updateEditModeRowId(undefined));
        setActiveRow(undefined);
        setVisible(!isVisible);
    }

    const handleOnChangeInput = (target) => {
        let tmpRow = {...activeRow};
        tmpRow[target.name] = target.value;
        setActiveRow(tmpRow);
    }

    const handleOnClickSaveChanges = async () => {
        let body = {
            collectionName: activeCollection,
            rowId,
            row: activeRow
        }

        try {
            const response = await updateRowRequest(body);
            if(response.data.status == 200){
                let message = "Request completed in " + response.data.elapsedTime + " seconds";
                alert.show(message, {type: 'success'});
                dispatch(updateOneRowFromTableBody(body));
                toggleModal();
            } else {
                alert.show("An error occured!", {type: 'error'});
            }
        } catch (apiError) {
            console.log(apiError);
        }
    }

    return (
        <div>
            <Modal isOpen={isVisible} onRequestClose={toggleModal} contentLabel="My dialog" style={modalStyles}>
                {
                (rowId) && (activeRow) && (rowId.length > 0) &&
                (<div>
                    <table className="table table-hover table-bordered table-striped table-responsive">
                        <thead className='table-dark'>
                            {
                                <tr>
                                    {
                                        tableHeaders.map((i, index)=> <th key={index} scope="col">{i}</th>)
                                    }
                                </tr> 
                            }
                        </thead>
                        <tbody>
                            <tr className=''>
                                {
                                    tableHeaders.map((j, ix)=>
                                    <th key={ix}>
                                        <input name={j} className="form-control" defaultValue={activeRow[j]} onChange={(event)=> handleOnChangeInput(event.target)}></input>
                                    </th>)
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>)}
                <div className='text-center'>
                    <button className='btn btn-outline-warning' onClick={toggleModal}>Cancel</button>
                    <button className='btn btn-outline-primary mx-1' onClick={handleOnClickSaveChanges}>Save Changes</button>
                </div>
            </Modal>
        </div>
    );
};

export default EditModal;
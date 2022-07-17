import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { createRowRequest } from '../api/ApiCalls';
import { updateOneRowFromTableBody } from '../redux/actions/DataActions';
import { defaultModalStyles } from '../util/StyleProps';

Modal.setAppElement("#root");

const CreateModal = (props) => {
    const modalStyles = defaultModalStyles;

    const{tableHeadersFromStore, activeCollectionFromStore} = useSelector(store=>({
        tableHeadersFromStore : store.tableHeaders,
        activeCollectionFromStore : store.activeCollection,
    }));

    const{ isVisible, setVisible } = props;

    const[tableHeaders, setTableHeaders] = useState(tableHeadersFromStore);
    const[activeCollection, setActiveCollection] = useState(activeCollectionFromStore);
    const[row, setRow] = useState();

    useEffect(()=>{ setTableHeaders(tableHeadersFromStore) }, [tableHeadersFromStore]);
    useEffect(()=>{ setActiveCollection(activeCollectionFromStore) }, [activeCollectionFromStore]);

    const dispatch = useDispatch();
    const alert = useAlert();

    const toggleModal = () => {
        setRow(undefined);
        setVisible(!isVisible);
    }

    const handleOnChangeInput = (target) => {
        let tempRow = {...row};
        tempRow[target.name] = target.value;
        setRow(tempRow);
    }

    const handleOnClickSaveChanges = async () => {
        let body = {
            collectionName: activeCollection,
            row
        }

        try {
            const response = await createRowRequest(body);
            if(response.data.status == 200){
                let message = "Request completed in " + response.data.elapsedTime + " seconds";
                alert.show(message, {type: 'success'});
                body.rowId = response.data.body;
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
                (tableHeaders) && (tableHeaders.length > 0) &&
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
                            <tr>
                                {
                                    tableHeaders.map((j, ix)=>
                                    <th key={ix}>
                                        <input name={j} className="form-control" onChange={(event)=> handleOnChangeInput(event.target)}></input>
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

export default CreateModal;
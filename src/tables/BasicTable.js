import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { addNewColumnsRequest, deleteRowRequest } from '../api/ApiCalls';
import { addColumnToList, deleteRowFromCollection, updateEditModeRowId } from '../redux/actions/DataActions';
import EditModal from '../components/EditModal';
import CreateModal from '../components/CreateModal';


const BasicTable = () => {
    const { activeCollectionFromStore, tableHeadersFromStore, tableBodyFromStore } = useSelector(store => ({
        activeCollectionFromStore: store.activeCollection,
        tableHeadersFromStore: store.tableHeaders,
        tableBodyFromStore: store.tableBody
    }));

    const alert = useAlert();
    const dispatch = useDispatch();
    const[tableHeaders, setTableHeaders] = useState(tableHeadersFromStore);
    const[tableBody, setTableBody] = useState(tableBodyFromStore);
    const[activeCollection, setActiveCollection] = useState(activeCollectionFromStore);
    const[newColumnName, setNewColumnName] = useState("");
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

    useEffect(()=>{ setTableHeaders(tableHeadersFromStore) }, [tableHeadersFromStore]);
    useEffect(()=>{ setTableBody(tableBodyFromStore) }, [tableBodyFromStore]);
    useEffect(()=>{ setActiveCollection(activeCollectionFromStore) }, [activeCollectionFromStore]);

    const handleAddNewColumnButton = async () => {
        if(newColumnName.length != 0){
            const body = {
                collectionName: activeCollection,
                columnNames: [newColumnName]
            }
    
            try {
                const response = await addNewColumnsRequest(body);
                if(response.data.body == true){
                    let message = "Request completed in " + response.data.elapsedTime + " seconds";
                    alert.show(message, {type: 'success'});
                    dispatch(addColumnToList(newColumnName));
                    setNewColumnName("");
                } else {
                    alert.show("Column name not suitable", {type: 'error'});
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            alert.show('Please enter a valid column name!');
        }

    }

    const handleOnKeyPress = (key) => {
        if(key === 'Enter'){
            handleAddNewColumnButton();
        }
    }
    
    const handleOnClickDeleteButton = async (key) => {
        if(window.confirm('Are you sure you wish to delete ?')){
            try {
                const response = await deleteRowRequest(activeCollection, key);
                if(response.data.status == 200){
                    dispatch(deleteRowFromCollection(key));
                    let message = "Request completed in " + response.data.elapsedTime + " seconds";
                    alert.show(message, {type: 'success'});
                }
            } catch (apiError) {
                console.log(apiError);
            }
        }
    }

    const handleOnClickEditButton = (key) => {
        if(key && key.length>0){
            dispatch(updateEditModeRowId(key))
            setIsEditModalVisible(true);
        }
    }

    const handleOnClickCreateButton = (key) => {
        setIsCreateModalVisible(true);
    }
    
    const handleOnClickRow = (target) => {
        target.parentNode.classList.toggle("table-active");
    }

    return (
        <div className='container'>
            <table className="thead-light table table-hover table-bordered table-responsive">
                <thead className='table-dark'>
                    {
                        <tr>
                            {
                                tableHeaders.map((i, index)=> 
                                    <th key={index} scope="col">
                                        <a className='font-weight-bold text-decoration-none text-white' style={{cursor: 'pointer'}}>{i}</a>
                                    </th>)
                            }
                            <th>
                                <div className='input-group input-group-sm' style={{width: "150px"}}>
                                    <span className='input-group-text' id='add_collection'>
                                        <a onClick={handleAddNewColumnButton} style={{cursor: "pointer"}} ><i className="bi bi-file-earmark-plus"></i></a>
                                    </span>
                                    <input className="form-control shadow-none" placeholder='Add Column' onKeyPress={(event) => handleOnKeyPress(event.key)} value={newColumnName} onChange={(event)=>setNewColumnName(event.target.value)}></input>
                                </div> 
                            </th>
                        </tr> 
                    }
                </thead>
                <tbody>
                    {
                        Object.keys(tableBody).map((i, index)=> 
                            <tr key={index}>
                                {
                                    tableHeaders.map((j, ix)=>
                                    <th key={ix}>{(tableBody[i])[j]}</th>
                                    )
                                }
                                <th>
                                    <button name={i} className='btn btn-sm btn-outline-danger' onClick={(event)=>{handleOnClickDeleteButton(event.target.name)}}><i className="bi bi-trash"></i> Delete</button>
                                    <button name={i} className='btn btn-sm btn-outline-primary' onClick={(event)=>{handleOnClickEditButton(event.target.name)}}><i className="bi bi-pencil"></i> Edit</button>
                                </th>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            {
                (tableHeaders) && (tableHeaders.length>0) && (
                    <div className='text-center'>
                        <button className='btn btn-outline-dark' onClick={handleOnClickCreateButton}><i className="bi bi-plus-circle"></i> Add New Row</button>
                    </div>
                )
            }

            <EditModal isVisible = {isEditModalVisible} setVisible={setIsEditModalVisible}/>
            <CreateModal isVisible = {isCreateModalVisible} setVisible={setIsCreateModalVisible}/>
        </div>
    );
};

export default BasicTable;
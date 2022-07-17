import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCollectionRequest, getAllColumnNamesRequest, getAllRowsByCollectionRequest, updateCollectionListRequest } from '../api/ApiCalls';
import { addCollectionToList, clearActiveCollection, clearCollectionList, clearColumnList, updateActiveCollection, updateCollectionList, updateColumnList, updateTableBody } from '../redux/actions/DataActions';
import { useAlert } from 'react-alert';

const Navbar = () => {
    const { collectionsFromStore } = useSelector(store => ({
        collectionsFromStore: store.collections
    }));

    const[collections, setCollections] = useState([...collectionsFromStore]);
    const[newCollectionName, setNewCollectionName] = useState("");

    const alert = useAlert();
    useEffect(()=>{ setCollections(collectionsFromStore) }, [collectionsFromStore]);


    const dispatch = useDispatch();

    const handleUpdateCollections = async () => {
        try {
            const response = await updateCollectionListRequest();
            if(response.data.status == 200){
                let message = "Request completed in " + response.data.elapsedTime + " seconds";
                alert.show(message, {type: 'success'});
                dispatch(updateCollectionList(response.data.body));
            }
        } catch (apiError) {
            dispatch(clearCollectionList());
            console.log(apiError);
        }
    }

    const handleAddNewCollection = async () => {
        if(newCollectionName.length != 0){
            try {
                const response = await addNewCollectionRequest(newCollectionName);
                if(response.status == 200){
                    let message = "Request completed in " + response.data.elapsedTime + " seconds";
                    alert.show(message, {type: 'success'});
                    dispatch(addCollectionToList(newCollectionName));
                    setNewCollectionName("");
                }
            } catch (apiError) {
                alert.show("Collection name not suitable", {type: 'error'});
            }
        }
        else {
            alert.show('Please enter a valid collection name!');
        }

    }

    const handleOnClickCollectionName = async (collectionName) => {
        try {
            const response = await getAllColumnNamesRequest(collectionName);
            if(response.data.status == 200){
                dispatch(updateColumnList(response.data.body));
                const tbResponse = await getAllRowsByCollectionRequest(collectionName);
                if(tbResponse.data.status == 200){
                    let sumTime = response.data.elapsedTime + tbResponse.data.elapsedTime;
                    let message = "Request completed in " + sumTime + " seconds";
                    alert.show(message, {type: 'success'});
                    dispatch(updateTableBody(tbResponse.data.body));
                    dispatch(updateActiveCollection(collectionName));
                }
            }
        } catch (error) {
            dispatch(clearColumnList());
            dispatch(clearActiveCollection());
            console.log(error);
        }
    }

    const handleOnKeyPress = (key) => {
        if(key === 'Enter'){
            handleAddNewCollection();
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">DataHub-App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" style={{cursor: "pointer"}}>Query Tool</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Collections
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <div className='input-group m-1' style={{width: "250px"}}>
                                    <span className='input-group-text' id='add_collection'>
                                        <a style={{cursor: "pointer"}} onClick={handleAddNewCollection}><i className="bi bi-file-earmark-plus"></i></a>
                                    </span>
                                    <input className="form-control" placeholder='New Collection Name' onKeyPress={(event) => handleOnKeyPress(event.key)}
                                    value={newCollectionName} aria-describedby='add_collection' onChange={(event)=>setNewCollectionName(event.target.value)}></input>
                                </div> 
                            </li>
                            <li><a className="dropdown-item" style={{cursor: "pointer"}} onClick={handleUpdateCollections}>Yenile</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            {
                                collections.map((i, index)=> 
                                    <li key={index}><a className="dropdown-item" onClick={(event)=>{handleOnClickCollectionName(event.target.innerText)}} style={{cursor: "pointer"}}>{i}</a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" disabled/>
                    <button className="btn btn-outline-success" type="submit" disabled>Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
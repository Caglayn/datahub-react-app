import React, { useState } from 'react';
import { queryRequest } from '../api/ApiCalls';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import { updateActiveCollection, updateColumnList, updateTableBody } from '../redux/actions/DataActions';

const QueryTool = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const[queryString, setQueryString] = useState("");

    const handleExecuteQuery = async () => {
        if(queryString.trim().length>0){
            try {
                const response = await queryRequest(queryString);
                if(response.data.status == 200 && response.data.body.operation == 2){
                    let message = "Query executed in " + response.data.elapsedTime + " seconds, " + response.data.body.rowCount + " records found.";
                    alert.show(message, {type: 'success'});
                    dispatch(updateActiveCollection(response.data.body.collectionName));    
                    dispatch(updateTableBody(response.data.body.queryResult));
                    dispatch(updateColumnList(response.data.body.fields));
                } else if(response.data.status == 200 && response.data.body.operation == 1){
                    let message = "Success, Command executed in " + response.data.elapsedTime + " seconds.";
                    alert.show(message, {type: 'success'});
                }
            } catch (apiError) {
                let message = "An error occured.";
                alert.show(message, {type: 'error'});
                console.log(apiError);
            }
        } else {
            let message = "Please enter a valid query or command!";
            alert.show(message, {type: 'error'});
        }
    }
    
    return (
        <div className='container mb-5'>
            <p className='text-center'>
                <button className="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#queryInputArea" aria-expanded="false" aria-controls="queryInputArea">
                    Query Tool
                </button>
                <button onClick={handleExecuteQuery} className="btn btn-outline-dark mx-1">
                    <i className="bi bi-play-fill"></i>
                </button>
            </p>
            <div className="collapse" id="queryInputArea">
                <div className="card card-body">
                    <textarea onChange={event=>setQueryString(event.target.value)} className='bg-dark bg-gradient text-light'></textarea>
                </div>
            </div>
        </div>
    );
};

export default QueryTool;
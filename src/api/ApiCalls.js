import * as URLS from './RestApiUrls';
import axios from "axios";

export const setToken = (token) => {
    axios.defaults.headers['Authorization'] = 'Bearer ' + token;
}

export const updateCollectionListRequest = () => {
    return axios.get(URLS.DATA_SERVICE + URLS.COLLECTION_GETALLNAMES);
}

export const addNewCollectionRequest = (collectionName) => {
    return axios.post(URLS.DATA_SERVICE+URLS.COLLECTION_CREATE, {}, {params: {collectionName}});
}

export const getAllColumnNamesRequest = (collectionName) => {
    return axios.get(URLS.DATA_SERVICE+URLS.COL_GETALL, {params: {collectionName}});
}

export const getAllRowsByCollectionRequest = (collectionName) => {
    return axios.get(URLS.DATA_SERVICE+URLS.ROW_GETALL, {params: {collectionName}});
}

export const addNewColumnsRequest = (body) => {
    return axios.post(URLS.DATA_SERVICE+URLS.COL_CREATE, body);
}

export const deleteRowRequest = (collectionName, rowId) => {
    return axios.delete(URLS.DATA_SERVICE+URLS.ROW_DELETE, {params: {collectionName, rowId}});
}

export const updateRowRequest = (body) => {
    return axios.put(URLS.DATA_SERVICE+URLS.ROW_UPDATE, body);
}

export const createRowRequest = (body) => {
    return axios.post(URLS.DATA_SERVICE+URLS.ROW_CREATE, body);
}

export const queryRequest = (query) => {
    return axios.get(URLS.DATA_SERVICE+URLS.QUERY, {params: {query}});
}

export const signInRequest = (userName, password) => {
    return axios.post(URLS.USER_SERVICE+URLS.SIGNIN+'?userName='+userName+'&password='+password);
}
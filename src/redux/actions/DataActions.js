import * as ACTIONS from '../Constants';

export const updateCollectionList = payload => {
    return {
        type: ACTIONS.UPDATE_COLLECTION_LIST,
        payload
    };
};

export const clearCollectionList = () => {
    return {
        type: ACTIONS.CLEAR_COLLECTION_LIST
    };
};

export const addCollectionToList = payload => {
    return {
        type: ACTIONS.ADD_COLLECTION_TO_LIST,
        payload
    };
};

export const updateColumnList = payload => {
    return {
        type: ACTIONS.UPDATE_COLUMN_LIST,
        payload
    };
};

export const updateTableBody = payload => {
    return {
        type: ACTIONS.UPDATE_TABLE_BODY,
        payload
    };
};

export const clearColumnList = () => {
    return {
        type: ACTIONS.CLEAR_COLUMN_LIST
    };
};

export const clearTableBody = () => {
    return {
        type: ACTIONS.CLEAR_TABLE_BODY
    };
};

export const updateActiveCollection = payload => {
    return {
        type: ACTIONS.UPDATE_ACTIVE_COLLECTION,
        payload
    };
};

export const clearActiveCollection = () => {
    return {
        type: ACTIONS.CLEAR_ACTIVE_COLLECTION,
    };
};

export const addColumnToList = payload => {
    return {
        type: ACTIONS.ADD_COLUMN_TO_LIST,
        payload
    };
};

export const deleteRowFromCollection = payload => {
    return {
        type: ACTIONS.DELETE_ROW_FROM_COLLECTION,
        payload
    };
};

export const updateEditModeRowId = payload => {
    return{
        type: ACTIONS.UPDATE_EDIT_MODE_ROWID,
        payload
    };
};

export const updateOneRowFromTableBody = payload => {
    return{
        type: ACTIONS.UPDATE_ONE_ROW_FROM_TABLEBODY,
        payload
    };
};

export const loggedIn = payload => {
    return{
        type: ACTIONS.LOGGED_IN,
        payload
    };
};
import * as ACTIONS from '../Constants';
import { getDefaultState } from '../ConfigureStore';

const DataReducer = (state = {...getDefaultState}, action) => {
    let tempState;
    switch(action.type){
        case ACTIONS.UPDATE_COLLECTION_LIST:
            tempState = {...state};
            tempState.collections = action.payload;
            return tempState;
        case ACTIONS.CLEAR_COLLECTION_LIST:
            tempState = {...state};
            tempState.collections = [];
            return tempState;
        case ACTIONS.ADD_COLLECTION_TO_LIST:
            tempState = {...state};
            tempState.collections.push(action.payload);
            return tempState;
        case ACTIONS.ADD_COLUMN_TO_LIST:
            tempState = {...state};
            tempState.tableHeaders.push(action.payload);
            return tempState;
        case ACTIONS.UPDATE_COLUMN_LIST:
            tempState = {...state};
            tempState.tableHeaders = action.payload;
            return tempState;
        case ACTIONS.UPDATE_TABLE_BODY:
            tempState = {...state};
            tempState.tableBody = action.payload;
            return tempState;
        case ACTIONS.CLEAR_COLUMN_LIST:
            tempState = {...state};
            tempState.tableHeaders = [];
            tempState.tableBody = [];
            return tempState;
        case ACTIONS.CLEAR_TABLE_BODY:
            tempState = {...state};
            tempState.tableBody = [];
            return tempState;
        case ACTIONS.UPDATE_ACTIVE_COLLECTION:
            tempState = {...state};
            tempState.activeCollection = action.payload;
            return tempState;
        case ACTIONS.CLEAR_ACTIVE_COLLECTION:
            tempState = {...state};
            tempState.activeCollection = "";
            return tempState;
        case ACTIONS.DELETE_ROW_FROM_COLLECTION:
            tempState = {...state};
            delete tempState.tableBody[action.payload];
            return tempState;
        case ACTIONS.UPDATE_EDIT_MODE_ROWID:
            tempState = {...state};
            tempState.editModeRowId = action.payload;
            return tempState;
        case ACTIONS.UPDATE_ONE_ROW_FROM_TABLEBODY:
            tempState = {...state};
            tempState.tableBody[action.payload.rowId] = action.payload.row;
            return tempState;
        default:
          return state;
    }
}

export default DataReducer;
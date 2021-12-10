import _ from 'lodash';
import  {FETCH_COMMENTS,CREATE_COMMENT, DELETE_COMMENT,FETCH_COMMENT } from '../actions/types';

export const commentReducer = (state={},action)=>{
    switch (action.type) {
        case CREATE_COMMENT,
            FETCH_COMMENT:
            return {...state,[action.payload.id]:action.payload};
        case DELETE_COMMENT:
            return _.omit(state,action.payload);
        case FETCH_COMMENTS:
            return {...state, ..._.mapKeys(action.payload,'id') };
        default:
            return state;
    }
};

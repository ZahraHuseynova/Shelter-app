import _ from 'lodash';
import { FETCH_ANIMAL, FETCH_ANIMALS,DELETE_ADOPT,EDIT_ADOPT } from '../actions/types';

export const animalReducer =( state ={} ,action)=>{
    switch (action.type) {
        case FETCH_ANIMAL:
        case EDIT_ADOPT:
            return{ ...state, [action.payload.id]:action.payload};
        case DELETE_ADOPT:
            return _.omit(state,action.payload);
        case FETCH_ANIMALS:
            return {...state, ..._.mapKeys(action.payload,'id') };
        default:
            return state;
    }
}
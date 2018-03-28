import { combineReducers } from 'redux'
import * as Actions from '../actions/actionType'

const curLocale = (state = {}, action) => {
    switch (action.type) {
        case Actions.LOCALE_CHANGE:
            return action.curLocale
        default:
            return state
    }
}

const products = (state = {}, action) => {
    switch (action.type) {
        case Actions.RECEIVE_PRODUCTS:
            return action.products
        case Actions.ADD_TO_CART:
            var productId = action.productId;
            var newState = [];
            for( var i = 0; i < state.length; i++ ){
                newState.push(state[i]);
                if( state[i]['productId'] == productId ){
                    newState[i]['productNum'] = state[i]['productNum'] + 1;
                }
            }
            return newState;
        case Actions.REDUCE_FROM_CART:
            var productId = action.productId;
            var newState = [];
            for( var i = 0; i < state.length; i++ ){
                newState.push(state[i]);
                if( state[i]['productId'] == productId ){
                    var productNum = state[i]['productNum'];
                    newState[i]['productNum'] = state[i]['productNum'] - 1;
                }
            }
            return newState;
        default:
            return state
    }
};

const mingjzhang = (state = {}, action) => {
    console.log(state)
    switch (action.type) {
        case Actions.ADD_TO_CART:
            return {
                // ...state,
                productQuentity: state.productQuentity - 1
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    curLocale,
    products
})

export default rootReducer

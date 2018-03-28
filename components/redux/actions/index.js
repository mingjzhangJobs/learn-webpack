/**********************************************************************/
/****************************** actions *******************************/
/**********************************************************************/
import _products from '../../../public/data/cartData.json'

// const TIMEOUT = 100
//
// export default {
//     getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
//     buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
// }
export const setGood = () => function(dispatch){
    dispatch({type: 'RECEIVE_PRODUCTS', products: _products.result.list})
}

export const setCurLocale = (cur_locale) => (dispatch) => {
    dispatch({type: 'LOCALE_CHANGE', curLocale: cur_locale})
}

export const changeNum = (productId,type) => (dispatch) => {
    console.log(type)
    if( type == 'reduce' ){
        dispatch({type: 'REDUCE_FROM_CART', productId: productId})
    }else if( type == 'add' ){
        dispatch({type: 'ADD_TO_CART', productId: productId})
    }
}


import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCES,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCES,
  PRODUCT_DETAILS_FAIL,
} from "../constants/constants";
import axios from "axios"


const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type:PRODUCT_LIST_REQUEST })
        const { data } = await axios.get('api/products')
        dispatch({type: PRODUCT_LIST_SUCCES, payload: data})

    } catch (err) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: err.message})

    }
} 


const detailProduct = (productId) =>  async(dispatch) => {
    try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId })
        const { data } = await axios.get(`/api/product/${productId}`); 
        dispatch({type: PRODUCT_DETAILS_SUCCES, payload: data})
    } catch (error) {
        dispatch({type:PRODUCT_DETAILS_FAIL, payload: error.message})
    }
}



export {listProducts, detailProduct}
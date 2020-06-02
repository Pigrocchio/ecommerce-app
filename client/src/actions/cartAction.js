import { CART_ADD_ITEM } from "../constants/cartCostant";
import axios from 'axios'


const  addToCart = (productId, qty) => async (dispatch) => {
    try {
        const {data} = await axios.get(`/api/product/${productId}`)
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                inStock: data.inStock,
                qty
}})        
    } catch (error) {
        
    }
}

export {addToCart}
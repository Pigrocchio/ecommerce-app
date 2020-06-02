import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { productListReducer, productDetailReducer } from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers';


const initialState = {}
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducers
});

const composeEnanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnanchers(applyMiddleware(thunk))
);

export default store
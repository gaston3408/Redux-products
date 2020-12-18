import {
    ADD_PRODUCT,
    ADD_PRODUCT_OK,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_OK,
    GET_PRODUCTS_ERROR,
    EDIT_PRODUCT,
    EDIT_PRODUCT_OK,
    EDIT_PRODUCT_ERROR,
    DELETE_PRODUCT,
    DELETE_PRODUCT_OK,
    DELETE_PRODUCT_ERROR
} from '../types/index';


const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function (state= initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
        case GET_PRODUCTS:
        case EDIT_PRODUCT:
        case DELETE_PRODUCT:
            return {
                ...state,
                loading: true,
                error:false
            }
        case ADD_PRODUCT_OK:
            return {
                ...state,
                products: [ ...state.products, action.payload ],
                loading: false,
                error:false
            }
        case ADD_PRODUCT_ERROR:
        case GET_PRODUCTS_ERROR:
        case EDIT_PRODUCT_ERROR:
        case DELETE_PRODUCT_ERROR:
            return {
                 ...state,
                error: true,
            }
        case GET_PRODUCTS_OK:
            return {
                products: action.payload,
                loading: false,
                error:false
            }
        case EDIT_PRODUCT_OK:
            return {
                products: state.products.map( item =>(
                    item.id === action.payload.id ? (
                        {id:action.payload.id, name: action.payload.name, price: action.payload.price}
                        ): item
                )),
                loading: false,
                error:false
            }
        case DELETE_PRODUCT_OK:
            return {
                products: state.products.filter( item => item.id !== action.payload ),
                loading:false,
                error:false
            }
        default:
            return state;
    }
}
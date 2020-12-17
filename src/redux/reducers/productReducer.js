import {
    ADD_PRODUCT,
    ADD_PRODUCT_OK,
    ADD_PRODUCT_ERROR
} from '../types/index';


const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function (state= initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true,
            }
        case ADD_PRODUCT_OK:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
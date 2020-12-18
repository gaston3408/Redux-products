import {
    ADD_PRODUCT,
    ADD_PRODUCT_OK,
    ADD_PRODUCT_ERROR
} from '../types/index';
//firebase
import {firebase} from '../../firebase'

// create products
export function addNewProductAction( product ) {
    return async(dispatch) => {
        dispatch( addNewProduct() );
        try {
            const db = firebase.firestore()
            const data = await db.collection('products').add(product)
            product.id = data.id
            dispatch( addNewProductOk( product )) 
        } catch (error) {
            console.log(error)
            dispatch( addNewProductError()) 
        }

        
    }
}

const addNewProduct = () => ({
    type: ADD_PRODUCT,
})
const addNewProductOk = (payload) => ({
    type: ADD_PRODUCT_OK,
    payload: payload,
})
const addNewProductError = () => ({
    type: ADD_PRODUCT_ERROR,
})

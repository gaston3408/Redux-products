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
//firebase
import {firebase} from '../../firebase'
import Swal from 'sweetalert2';

// create products
export const addNewProductAction = ( product ) => {
    return async(dispatch) => {
        dispatch( addNewProduct() );
        try {
            const db = firebase.firestore()
            const data = await db.collection('products').add(product)
            console.log(data)
            product.id = data.id
            Swal.fire(
                'Agregado !',
                'El producto de agregó correctamente!',
                'success'
              )
            dispatch( addNewProductOk( product )) 
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo agregar el producto!'
              })
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

export const getProductsAction = () => {
    return async(dispatch) => {
        dispatch(getProduct())
        try {
            const db = firebase.firestore()
            const data = await db.collection('products').get()
            const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
            dispatch(getProductOk(arrayData))
        } catch (error) {
            dispatch(getProductError())
        }
    }
} 

const getProduct = () => ({
    type: GET_PRODUCTS,
})
const getProductOk = (payload) => ({
    type: GET_PRODUCTS_OK,
    payload: payload,
})
const getProductError = () => ({
    type: GET_PRODUCTS_ERROR,
})

export const editProductAction = ( product ) => {
    return async(dispatch) => {
        dispatch( editProduct() );
        try {
            const db = firebase.firestore()
            await db.collection('products').doc(product.id).update({
                name: product.name,
                price: product.price
            })
            Swal.fire(
                'Editado!',
                'El producto fue editado correctamente',
                'success'
              )
            dispatch( editProductOk( product )) 
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se ha podido editar el producto!'
              })
            dispatch( editProductError()) 
        }

        
    }
}

const editProduct = () => ({
    type: EDIT_PRODUCT
})
const editProductOk = ( payload ) => ({
    type: EDIT_PRODUCT_OK,
    payload: payload
})
const editProductError = () => ({
    type: EDIT_PRODUCT_ERROR
})

export const deleteProductAction = ( id ) => {
    return async(dispatch) => {
        dispatch( deleteProduct() );
        try {
            const db = firebase.firestore()
            await db.collection('products').doc(id).delete()
            Swal.fire(
                'Borrado!',
                'El producto se eliminó correctamente',
                'success'
              )
            dispatch( deleteProductOk( id )) 
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se ha podido eliminar el producto!'
              })
            dispatch( deleteProductError()) 
        }

        
    }
}

const deleteProduct = () =>({
    type: DELETE_PRODUCT
})


const deleteProductOk = (id) => ({
    type:DELETE_PRODUCT_OK,
    payload: id
})


const deleteProductError = () => ({
    type: DELETE_PRODUCT_ERROR
})

import {
    ADD_PRODUCT,
    ADD_PRODUCT_OK
} from '../types/index';

// create products
export function addNewProductAction( product ) {
    return (dispatch) => {
        dispatch( addNewProduct() );

        let products = []
        if( localStorage.getItem( "products" )) {
            products = JSON.parse( localStorage.getItem( "products" ) );
        }        
        product.formValues.id = products.length + 1;
        products.push( product )
        localStorage.setItem( "products", JSON.stringify( products ) );
        dispatch( addNewProductOk( products ))
    }
}

const addNewProduct = () => ({
    type: ADD_PRODUCT,
})
const addNewProductOk = (payload) => ({
    type: ADD_PRODUCT_OK,
    payload: payload,
})

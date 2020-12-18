import { useState, useEffect } from 'react';
import CustomModal from "./components/CustomModal";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";

//redux
import {useDispatch, useSelector} from 'react-redux';
// actions redux
import { addNewProductAction, getProductsAction, editProductAction, deleteProductAction } from './redux/actions/productActions'
import TableProducts from './components/TableProducts';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';


const initialFormValues = {
  name: "",
  price: 0
}

const App = () => {

  const dispatch = useDispatch()
  const [ isOpened, setIsOpened ] = useState( false ) ;
  const [ action, setAction ] = useState("") ;
  const [start, setStart ] = useState(true)
  const [ formValues, setFormValues ] = useState( initialFormValues )
  const products = useSelector(state => state.products )
  
  const handleClose = () =>{
      setIsOpened( false );
  }
  const handleAction = (anyAction, product= null) => {
      if ( anyAction === "add" ){
        setFormValues(initialFormValues);
      }else{
        setFormValues(product)
      } 
      setAction(anyAction);
      setIsOpened( true );
  }
  const handleSubmit = (e) =>{
      e.preventDefault();
      if( formValues.name.trim() === ""){
        Swal.fire("El producto no puede estar vacio")
        return
      }
      if( formValues.price <= 0 ) {
        Swal.fire("El precio no puede ser $0")
        return
      }
      if (products.products.length >= 10){
        Swal.fire("Maximo de productos alcanzado")
        handleClose()
        return
      }
      if(action === "add") dispatch( addNewProductAction(formValues) )
      if(action === "edit") dispatch( editProductAction(formValues) )

      setAction("")
      setIsOpened( false );
  }

  const handleChange = (e) => {
      setFormValues({
        ...formValues,
        [e.currentTarget.name]: e.currentTarget.name === "price" ? Number(e.target.value) : e.target.value
      })
  }

  const handleDelete = (id) =>{
      Swal.fire({
        title: 'Estás seguró?',
        text: "Se eliminará el producto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch( deleteProductAction(id) )
        }
      })
  }
    const getProducts = () => {
      dispatch(getProductsAction())
    }
  useEffect(() => {

    if(start){
        getProducts()
        setStart(false)
    }  
  }, [start])

  

  return ( 
    <>
        <CustomModal 
            title={ action === "add" ? "Agregar producto" : "Editar producto" }
            isActive={isOpened}
            handleClose={handleClose}        
            >
            <ProductForm 
                formValues={formValues}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </CustomModal>
        <Header
            handleAction={handleAction}
        />

        {
          products.loading ? (
            <div style={{height:"50vh"}} className="d-flex justify-content-center align-items-center">
              <Spinner style={{width:"100px", height:"100px"}}  animation="border" variant="secondary" />
            </div>
          ) : (
            <TableProducts 
                products={products.products}
                handleAction={handleAction}
                handleDelete={handleDelete}
            />

          )
        }
    </>
  );
}

export default App;

import { useState } from 'react';
import CustomModal from "./components/CustomModal";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";

//redux
import {useDispatch, useSelector} from 'react-redux';
// actions redux
import { addNewProductAction } from './redux/actions/productActions'


const initialFormValues = {
  id: null,
  name: "",
  price: 0
}

const App = () => {

  const dispatch = useDispatch()
  const [ isOpened, setIsOpened ] = useState( false ) ;
  const [ action, setAction ] = useState("") ;
  const [ formValues, setFormValues ] = useState( initialFormValues )

  const handleClose = () =>{
      setIsOpened( false );
  }
  const handleAction = (anyAction) => {
      if ( anyAction === "add" ) setFormValues(initialFormValues);
      setAction(anyAction);
      setIsOpened( true );
  }
  const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch( addNewProductAction({formValues}) )
  }

  const handleChange = (e) => {
      setFormValues({
        ...formValues,
        [e.currentTarget.name]: e.currentTarget.name === "price" ? Number(e.target.value) : e.target.value
      })
  }

  

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
    </>
  );
}

export default App;

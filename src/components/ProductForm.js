import React from 'react'
import { Form, Button} from 'react-bootstrap'

const ProductForm = ({ formValues, handleSubmit, handleChange }) =>(

    <Form onSubmit={(e)=> handleSubmit(e) }>
        <Form.Group className="row d-flex justify-content-center">
          <Form.Label className="col-8">Producto</Form.Label>
		  <Form.Control
		  		className="col-8 text-center" 
				type="text"
				name="name" 
				value={formValues.name}
				onChange={(e)=> handleChange(e) }
				required
				/>
        </Form.Group>
        <Form.Group className="row d-flex justify-content-center">
          <Form.Label className="col-8">Precio</Form.Label>
		  <Form.Control 
		  		className="col-8 text-center"
				type="number"
				name="price" 
				value={ formValues.price } 
				onChange={(e)=> handleChange(e) }
				required
				/>
        </Form.Group>
		<Button variant="primary" type="submit">Guardar</Button>
    </Form>

)
export default ProductForm

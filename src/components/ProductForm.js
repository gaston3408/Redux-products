import React from 'react'
import { Form, Button} from 'react-bootstrap'

const ProductForm = ({ formValues, handleSubmit, handleChange }) =>(

    <Form onSubmit={(e)=> handleSubmit(e) }>
        <Form.Group>
          <Form.Label>Producto</Form.Label>
		  <Form.Control 
				type="text"
				name="name" 
				value={ formValues.name}
				onChange={(e)=> handleChange(e) }
				required
				/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio</Form.Label>
		  <Form.Control 
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

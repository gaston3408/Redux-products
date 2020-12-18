import React from 'react'
import { Button, Table } from 'react-bootstrap' ;

const TableProducts = ({products, handleAction, handleDelete}) => (
    <>
        <div className="container d-flex justify-content-center mt-5">
            <Table  variant="" className="text-center col-12 col-md-9">
                <thead>
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                    {  
                        products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name.toUpperCase()}</td>
                                <td>$ {product.price}</td>
                                <td>
                                <Button variant="info" onClick={ () => handleAction("edit",product)}>Editar</Button>{' '}
                                <Button variant="success" onClick={ () => handleDelete( product.id )}>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    }
                  
                </tbody>
            </Table>
        </div>
    </>
)


export default TableProducts

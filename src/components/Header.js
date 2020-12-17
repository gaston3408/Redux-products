import React from 'react'

const Header = ({handleAction}) => {
    return (
        <>
            <nav className=" pt-3 pb-3 text-white bg-primary">
                <div className="container d-flex justify-content-between">
                    <h1> React - Redux </h1>
                    <button className="btn btn-primary h5" onClick={()=> handleAction("add")} >Agregar producto</button>
                </div>
            </nav>
        </>
    )
}

export default Header

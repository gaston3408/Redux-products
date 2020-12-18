import React from 'react' ;
import { Modal } from 'react-bootstrap' ;
import PropTypes from 'prop-types' ;

const CustomModal = ( {
    isActive, children, title, handleClose,
} ) => (
    <Modal show={ isActive } className="text-center" onHide={ handleClose }>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter"><h3>{ title }</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>{ children }</Modal.Body>
    </Modal>
) ;

CustomModal.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
} ;

export default CustomModal ;

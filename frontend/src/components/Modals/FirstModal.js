import React from 'react'
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FirstModal(props) {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>
                    Would you like to share and accept contact details with other
                    attendees?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You can stay connected even after the session.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    No
                </Button>
                <Button variant="primary" onClick={props.handleShowSecond}>
                    Yes
                </Button>
            </Modal.Footer>
        </>
    )
}

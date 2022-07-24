import React, {useState} from 'react'
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function SecondModal(props) {
    const [linkedIn, setLinkedIn] = useState('')

    // const handleInput = (e) => {
    //     e.preventDefault()
    //     setLinkedIn(e.target.value)
    // }
    console.log(linkedIn)

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Let attendees get to know you</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Linkedin Profile</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Linkedin profile"
                            autoFocus
                            name="Linkedin"
                            value={linkedIn}
                            onChange={(e)=>setLinkedIn(e.target.value)}
                        />
                    </Form.Group>
                    <Button onClick={props.handleShowThird}>Add details manually</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseSecond}>
                    Skip
                </Button>
                <Button variant="primary" onClick={props.handleShowThird}>
                    Let's Go
                </Button>
            </Modal.Footer>
        </>
    )
}

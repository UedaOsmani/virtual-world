import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import inputFields from './InputFields';
import profileService from '../shared/profileService'
import Swal from 'sweetalert2'


export default function ThirdModal(props) {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        linkedin: '',
        telephone: '',
        portfolio: '',
        others: ''

    })

    const saveContactData = () => {
        profileService.saveContact(formValues)
        .then(response => {
            // alert("Contact details saved");
            console.log(response.data);
            Swal.fire(
                'Success!',
                'Contact details saved!',
                'success'
            )

        })
        .catch(e => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
            console.log(e)
        });
    }

    // const saveForm = () => {
    //     profileService.saveContact(formValues)
    //     .then(response => {
    //         alert("Contact details saved");
    //         console.log(response.data);
    //         // Swal.fire(
    //         //     'Student added Successfully',
    //         //     'success'
    //         // )

    //     })
    //     .catch(e => {
    //         alert("Error: " + err);
    //         console.log(e)
    //     });
    // }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title><h5>Let attendees get to know you</h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {
                        inputFields.map((input) => (
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                                key={input.id}
                            >
                                <Form.Label>{input.label}</Form.Label>
                                <Form.Control
                                    key={input.id}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    autoFocus
                                    name={input.name}
                                    value={formValues[input.name]}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        ))
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseThird}>
                    Skip
                </Button>
                <Button variant="primary" onClick={saveContactData}>
                    Let's Go
                </Button>
            </Modal.Footer>
        </>
    )
}

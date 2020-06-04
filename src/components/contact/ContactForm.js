import React from "react";
import { useForm } from "react-hook-form"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from 'yup';

function ContactForm() {

    const schema = yup.object().shape({
        firstname: yup.string().min(2, 'Please provide atleast 2 characters').required("First name is required"),
        lastname: yup.string().min(2, 'Please provide atleast 2 characters').required("Last name is required"),
        email: yup.string().email().required("Email is required"),
        message: yup.string().min(10, 'Please tell us more').required("Message is required")
    });

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log('data', data);
        
    }

    return (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control name="firstname" placeholder="Enter your First name" ref={register({required: true})} />
                        {errors.firstname && <p>{errors.firstname.message}</p>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="lastname" name="password" placeholder="Enter your Last name" ref={register({required: true})} />
                        {errors.lastname && <p>{errors.lastname.message}</p>}
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your Email" ref={register({required: true})} />
                    {errors.email && <p>{errors.email.message}</p>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="5" type="text" name="message" placeholder="Message" ref={register({required: true})} />
                    {errors.message && <p>{errors.message.message}</p>}
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
    )
}

export default ContactForm

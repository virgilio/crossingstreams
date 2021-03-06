import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const GetEmail = (props) => {
    const [email, setEmail] = React.useState(undefined);
    if (!props.activity) {
        return (<></>);
    } else {
        return (
            <>
                <Modal show={props.show} onHide={props.handleClose}>
                    <Modal.Header closeButton>
                        <p>{props.activity.activity_text}</p>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group
                                onChange={(e) => setEmail(e.target.value)}
                                controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => props.handleClose()}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => props.handleClose(email)}>
                            Send
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default GetEmail;
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const Question = (props) => {
    const [selected, setSelected] = React.useState(undefined);
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
                        <ListGroup variant="flush">
                            {props.activity.options.map(o => (
                                <ListGroup.Item key={`${o.id}`}>
                                    <Form.Check
                                        type='radio'
                                        onClick={e => setSelected(e.target.value)}
                                        label={o.option_text}
                                        value={`${o.id}`}
                                        id={`activity-result-${o.id}`}
                                    />
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => props.handleClose()}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => props.handleClose(selected)}>
                            Let's go!
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Question;
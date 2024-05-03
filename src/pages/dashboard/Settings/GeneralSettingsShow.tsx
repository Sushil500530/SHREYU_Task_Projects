import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import FeatherIcon from 'feather-icons-react';




// ChatArea
const GeneralSettingsShow = () => {

    return (
        <>
            <Card>
                <Card.Body>
                    <div className=" bg-primary m-0rounded  d-flex align-items-start justify-content-start pt-1 rounded">
                        <Button variant="primary" className='btn-sm d-flex align-items-center gap-1 bg-white text-black border-0'>
                            General
                        </Button>
                        <Button variant="primary" className='btn-sm d-flex align-items-center gap-1 bg-primary text-white border-0'>
                            Social
                        </Button>
                        <Button variant="primary" className='btn-sm d-flex align-items-center gap-1 bg-primary text-white border-0'>
                            Logos
                        </Button>
                    </div>
                    <Row>
                        <Col lg={6} className="mt-3">
                            <Form.Group className="mb-3" controlId="validationCustomUsername">
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-pencil-square"></i></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="ExtrameLab"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a ExtrameLab.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="validationCustomUsername">
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-zoom-in"></i></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Egypt"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a Egypt.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="validationCustomUsername">
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-envelope"></i></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="support1Gextremelab.tech"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col lg={6} className="mt-3">
                            <Form.Group className="mb-3" controlId="validationCustomUsername">
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-currency-pound"></i></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="United State Dollur"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose United State Dollu.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="validationCustomUsername">
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-telephone-fill"></i></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="002151564251"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="validationCustomUsername">
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><FeatherIcon icon="globe" className="w-75" /></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="https://extremelab.tech/admin"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Form.Group className="mb-3" controlId="validationCustomUsername">
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-vinyl-fill"></i></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="All rights are reserverd ExtremeLab Company@2021"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit" className="d-flex align-items-center justify-content-center gap-1">
                        <i className="bi bi-check-lg"></i>
                        Save
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default GeneralSettingsShow;

import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { Button, Modal, Form, Row, Col, InputGroup } from "react-bootstrap";

const Objektas = ({ objektas }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex">
      <p>
        <b>1. </b>
        {objektas.name}
        {objektas.address}
        {objektas.status}
      </p>
      <div className="objekto-icons" style={{ marginLeft: "10px" }}>
        <FaEdit
          cursor={"pointer"}
          onClick={() => {
            handleShow();
          }}
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Objektas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mt-2">
            <Row className="align-items-center">
              <Col xs="12" md={6}>
                <Form.Label
                  htmlFor="inlineFormInput"
                  visuallyHidden
                ></Form.Label>
                <Form.Control
                  type="text"
                  className="mb-2"
                  id="name"
                  value={objektas.name}
                />
              </Col>
              <Col xs="12" md={6}>
                <Form.Label
                  htmlFor="inlineFormInputGroup"
                  visuallyHidden
                ></Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    type="email"
                    id="email"
                    value={objektas.email}
                  />
                </InputGroup>
              </Col>
              <Col xs="12" md={6}>
                <Form.Label
                  htmlFor="inlineFormInputGroup"
                  visuallyHidden
                ></Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    type="number"
                    value={objektas.telNumber}
                    id="number"
                  />
                </InputGroup>
              </Col>
              <Col xs="12" md={6}>
                <Form.Label
                  htmlFor="inlineFormInputGroup"
                  visuallyHidden
                ></Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    type="number"
                    id="cameraCount"
                    value={objektas.cameraCount}
                  />
                </InputGroup>
              </Col>
              <Col xs="12" className="mt-2">
                <Form.Label htmlFor="inlineFormInputGroup">
                  Ar yra išvedžioti UPT kabeliai?:
                </Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    type="text"
                    id="utpCables"
                    value={objektas.utpCables}
                  />
                </InputGroup>
              </Col>
              <Col xs="12">
                <Form.Label htmlFor="inlineFormInputGroup">
                  Ar nakties metu yra apšviesta kiemo teritorija?:
                </Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    type="text"
                    id="nightTime"
                    value={objektas.nightTime}
                  />
                </InputGroup>
              </Col>
              <Col xs="12" md={6}>
                <Form.Label htmlFor="inlineFormInputGroup">
                  Kiek parų norite kaupti vaizdo įrašus?
                </Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    type="text"
                    id="cameraCount"
                    value={objektas.howLong}
                  />
                </InputGroup>
              </Col>
              <Col xs="12" md={6}>
                <Form.Label htmlFor="inlineFormInputGroup">
                  Apytikslis biudžetas visai įrangai:
                </Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    type="text"
                    value={objektas.money}
                    id="cameraCount"
                  />
                </InputGroup>
              </Col>
              <Col xs="12" md={6}>
                <Form.Label htmlFor="inlineFormInputGroup">
                  Objekto adresas(tik jei matomas per maps.lt):
                </Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    type="text"
                    id="cameraCount"
                    value={objektas.address}
                  />
                </InputGroup>
              </Col>
              {/* <Col xs="12" md={6}>
          <Form.Group controlId="inlineFormInputGroup" className="mb-3">
            <Form.Label>Filmuojamos teritorijos nuotraukos:</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
        </Col> */}
              <Col xs="12">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>
                    Aprašykite detaliau lūkesčius ir suteikite detalesnę
                    informacija apie norus ar pageidavimus:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    value={objektas.details}
                    rows={3}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Uždaryti
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Išsaugoti pakeitimus
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Objektas;

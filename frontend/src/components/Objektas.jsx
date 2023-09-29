import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Modal, Form, Row, Col, InputGroup } from "react-bootstrap";

const Objektas = ({ objektas }) => {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // try {
    //   fetch(`api/forms/getforms/${objektas._id}`, {
    //     method: "PATCH",
    //     headers: {
    //       'Accept': 'applications/json',
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(objektas)
    //   })
    //   .then(res => {
    //     objektas.details=details
    //     console.log("atnaujita")
    //   })
    // } catch (error) {
    //   toast.error(err?.data?.message || err.error);
    // }
    fetch(`api/forms/getforms/${objektas._id}`, {
      method: "PATCH",
      body: JSON.stringify({
        details: details
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then(() => {
        toast.success("Profile updated");
      })
  }


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
            console.log(objektas._id)
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
                  onChange={(e) => setEmail(e.target.value)}
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
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
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
          <Button variant="primary" onClick={handleSubmit}>
            Išsaugoti pakeitimus
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Objektas;

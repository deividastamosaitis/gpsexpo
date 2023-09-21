import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";

const ObjektasForm = () => {
  return (
    <Form className="mt-5 mb-5">
      <Row className="align-items-center">
        <Col xs="12" md={6}>
          <Form.Label>
            <h3>Editinti objekto statusa</h3>
          </Form.Label>
          <Form.Control
            type="text"
            className="mb-2"
            id="name"
            placeholder="Vardas"
          />
        </Col>
      </Row>

      <Col xs="auto">
        <Button type="submit" className="mb-2">
          Submit
        </Button>
      </Col>
    </Form>
  );
};

export default ObjektasForm;

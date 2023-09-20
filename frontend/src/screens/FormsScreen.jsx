import { useEffect, useState } from "react";
import { Card, ListGroup, Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const FormsScreen = () => {
  const [forms, setForms] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");



  const submitHandler = async (e) => {
    e.preventDefault();
    
  };

  useEffect( () => {
    const getForms = async (id, name, status) => {
      const response = await fetch('/api/forms/getforms/', );
      const json = await response.json();

      if (response.ok) {
        setForms(json);
        console.log(forms)
        
      }
    };
    getForms();
  }, []);


  

  return (
    <>
      <h1>Objektai:</h1>
      {/* {forms &&
        forms.map((form) => (
          <Card style={{ width: "18rem" }} key={form._id} id={form._id} className="mb-5">
            <ListGroup variant="flush" >
              <ListGroup.Item>{form.name}</ListGroup.Item>
              <ListGroup.Item>{form.email}</ListGroup.Item>
              <ListGroup.Item>{form.telNumber}</ListGroup.Item>
              <ListGroup.Item>{form.cameraCount}</ListGroup.Item>
              <ListGroup.Item>{form.utpCables}</ListGroup.Item>
              <ListGroup.Item>{form.nightTime}</ListGroup.Item>
              <ListGroup.Item>{form.howLong}</ListGroup.Item>
              <ListGroup.Item>{form.money}</ListGroup.Item>
              <ListGroup.Item>{form.address}</ListGroup.Item>
              <ListGroup.Item>{form.details}</ListGroup.Item>
              <ListGroup.Item>{form.status}</ListGroup.Item>
            </ListGroup>
          </Card>
        ))} */}
        {forms && forms.map((form) => (
          <FormContainer>
      <h1>{form._id}</h1>
      <div className="profile"></div>
      <Form onSubmit={submitHandler} id={form._id}>
        <Form.Group className="my-2" controlId="name" key={form._id}>
          <Form.Label>Vardas</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={form.name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Statusas</Form.Label>
          <Form.Control
            type="text"
            placeholder="Status"
            value={form.status}
            onChange={(e) => setStatus(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Button type="submit" variant="primary" className="mt-3">
          Atnaujinti
        </Button>
      </Form>
    </FormContainer>
        ))}
    </>
  );
};

export default FormsScreen;

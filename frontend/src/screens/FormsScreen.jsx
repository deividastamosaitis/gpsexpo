import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useUserFormMutation } from "../slices/usersApiSlice";
import { useEffect, useState } from "react";

import { Card, ListGroup } from "react-bootstrap";

const FormsScreen = () => {
  const [forms, setForms] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [getUsersForm, { isLoading }] = useUserFormMutation();

  useEffect(() => {
    const getForms = async () => {
      const response = await fetch("/api/form/getform");
      const json = await response.json();

      if (response.ok) {
        setForms(json);
      }
    };

    getForms();
  });

  return (
    <>
      <h1>Objektai:</h1>
      {forms &&
        forms.map((form) => (
          <Card style={{ width: "18rem" }} key={form._id}>
            <ListGroup variant="flush">
              <ListGroup.Item>{form.name}</ListGroup.Item>
              <ListGroup.Item>{form.email}</ListGroup.Item>
              <ListGroup.Item>{form.address}</ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
    </>
  );
};

export default FormsScreen;

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormFormat = () => (
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);

export const ScreeningForm = () => {
	return (
    <React.Fragment>
      <div style={{width: '40%', display:'block', marginLeft: 'auto', marginRight: 'auto', marginTop:'5rem'}}>
        <FormFormat />
      </div>
    </React.Fragment>
	);
};

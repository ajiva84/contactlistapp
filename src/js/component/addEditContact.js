import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const AddEditContact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h3 className="text-center">
				<strong>Add a new contact</strong>
			</h3>
			<Form>
				<Form.Group controlId="formBasicFullName">
					<Form.Label>Full Name</Form.Label>
					<Form.Control type="name" placeholder="Full Name" />
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group controlId="formBasicPhone">
					<Form.Label>Phone</Form.Label>
					<Form.Control type="phone" placeholder="Enter phone" />
				</Form.Group>
				<Form.Group controlId="formBasicAddress">
					<Form.Label>Address</Form.Label>
					<Form.Control type="address" placeholder="Enter Address" />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
			<Link to="/">
				<a href="#">or get back to contacts</a>
			</Link>
		</div>
	);
};

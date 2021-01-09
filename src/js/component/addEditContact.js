import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const AddEditContact = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const theid = params.theid;
	const [name, setName] = useState(typeof theid !== "undefined" ? store.contact[theid].full_name : null);
	const [email, setEmail] = useState(typeof theid !== "undefined" ? store.contact[theid].email : null);
	const [phone, setPhone] = useState(typeof theid !== "undefined" ? store.contact[theid].phone : null);
	const [address, setAddress] = useState(typeof theid !== "undefined" ? store.contact[theid].address : null);

	useEffect(
		() => {
			if (typeof theid === "undefined") {
				setName("");
				setEmail(null);
				setPhone(null);
				setAddress(null);
				console.log(name);
			}
		},
		[theid]
	);

	return (
		<div className="container">
			<h3 className="text-center">{typeof theid !== "undefined" ? "Edit " : "Add a new "} contact</h3>
			<Form>
				<Form.Group controlId="name">
					<Form.Label>Full Name</Form.Label>
					<Form.Control
						type="name"
						placeholder="Full Name"
						defaultValue={name}
						onChange={e => setName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						defaultValue={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="phone">
					<Form.Label>Phone</Form.Label>
					<Form.Control
						type="phone"
						placeholder="Enter phone"
						defaultValue={phone}
						onChange={e => setPhone(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="address"
						placeholder="Enter Address"
						defaultValue={address}
						onChange={e => setAddress(e.target.value)}
					/>
				</Form.Group>

				<Button
					variant="primary"
					type="submit"
					onClick={e =>
						actions.addContact({
							agenda_slug: "Azam_super_agenda",
							full_name: { name },
							email: { email },
							phone: { phone },
							address: { address }
						})
					}>
					Submit
				</Button>
			</Form>
			<Link to="/">
				<a href="#">or get back to contacts</a>
			</Link>
		</div>
	);
};

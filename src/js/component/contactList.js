import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardDeck } from "react-bootstrap";

export const ContactList = props => {
	return (
		<CardDeck>
			<Card>
				<Card.Img variant="top" src="holder.js/100px160" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img variant="top" src="holder.js/100px160" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional content.{" "}
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img variant="top" src="holder.js/100px160" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show that equal height action.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
				</Card.Footer>
			</Card>
		</CardDeck>
		// const { store, actions } = useContext(Context);
		// const params = useParams();
		// return (
		// 	<ul className="list-group container">
		// 		{store.contact.map((contact, index) => {
		// 			<li className="list-group-item" key={index}>
		// 				<div className="row">
		// 					<div className="Col-2">
		// 						<img
		// 							src="https://www.southwestcomputerrecycling.co.uk/wp-content/uploads/2018/06/face-placeholder.gif"
		// 							className="rounded-circle img-fluid"
		// 							alt="contact Avatar"
		// 						/>
		// 					</div>
		// 				</div>

		/* <div className="Col-8">
						<img src="" />
						<h5>Azam Jiva</h5>
						<ul className="list-unstyled">
							<li>
								<div className="row">
									<div className="col">
										<i className="fas fa-map-marker-alt" />
									</div>
									<div className="col-11">{contact.address}</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div className="col">
										<i className="fas fa-map-marker-alt" />
									</div>
									<div className="col-11">{contact.phone}</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div className="col">
										<i className="fas fa-map-marker-alt" />
									</div>
									<div className="col-11">{contact.email}</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="Col-2">
						{" "}
						<img src="" />
						<h5>{contact.full_name}</h5>
						<ul className="list-unstyled" />
						<li />
					</div> */

		// 			</li>;
		// 		})}
		// 	</ul>
		// );
	);
};

ContactList.propTypes = {
	match: PropTypes.object
};

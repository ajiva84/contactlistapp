import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modalfordelete } from "./modalfordelete";
import { Card, CardDeck } from "react-bootstrap";

export const ContactList = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<ul className="list-group container">
				{store.contact.map((contact, index) => {
					return (
						<li className="list-group-item" key={index}>
							<div className="row">
								<div className="col-2 mt-3">
									<img
										src="https://www.southwestcomputerrecycling.co.uk/wp-content/uploads/2018/06/face-placeholder.gif"
										className="rounded-circle img-fluid"
										alt="contact Avatar"
									/>
								</div>
								<div className="col-8 text-left">
									<img src="" />
									<h5 className="text-left">{contact.full_name}</h5>
									<ul className="list-unstyled justify-content-left">
										<li>
											<div className="row">
												{/* <div className="col">
												
											</div> */}
												<div className="col">
													<i className="fas fa-map-marker-alt mr-3" />
													{contact.address}
												</div>
											</div>
										</li>
										<li>
											<div className="row">
												<div className="col">
													<i className="fas fa-phone mr-3" />
													{contact.phone}
												</div>
											</div>
										</li>
										<li>
											<div className="row">
												<div className="col">
													<i className="fas fa-envelope-square mr-3" />
													{contact.email}
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div className="col-2 mt-3">
									{" "}
									<img src="" />
									<Link to={`edit/${index}`}>
										<span>
											<i className="fas fa-pencil-alt" />
										</span>
									</Link>
									<Modalfordelete contactID={contact.id} />
									<ul className="list-unstyled" />
								</div>{" "}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

ContactList.propTypes = {
	match: PropTypes.object,
	contact: PropTypes.object
};

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactList = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<ul className="list-group container">
			{store.contact.map((contact, map) => {
				return;
				<li className="list-group-item" key={index}>
					<div className="Col-2">
						<img src="" className="rounded-circle img-fluid" alt="contact Avatat" />
					</div>
					<div className="Col-8">
						{" "}
						<img src="" />
						<h5>{contact.full.name}</h5>
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
					</div>
				</li>;
			})}
			; )
		</ul>
	);
};

ContactList.propTypes = {
	match: PropTypes.object
};

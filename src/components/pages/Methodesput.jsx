import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

// types
import { METHODES_UPDATE_RESET } from "../../redux/types/methodesType";

import {
	methodActionDetails,
	updateMethodAction,
} from "../../redux/actions/methodesActions";

const MethodsPut = () => {
	const [metodo, setMetodo] = useState("");
	const [message, setMessage] = useState("");
	const { id } = useParams();

	const navigate = useNavigate();
	const path = "/methods";

	const dispatch = useDispatch();

	const method = useSelector((state) => state.methodsdetail);
	const { error: errorSolo, loading: loadingSolo, methodinfo } = method;

	const methodupdate = useSelector((state) => state.methodsupdate);
	const { error, loading, success } = methodupdate;

	useEffect(() => {
		if (success) {
			dispatch({ type: METHODES_UPDATE_RESET });
		} else {
			if (methodinfo.id !== Number(id)) {
				dispatch(methodActionDetails(id));
			} else {
				setMetodo(methodinfo.metodo);
			}
		}
	}, [dispatch, methodinfo, id, success]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (metodo == " ") {
			setMessage("Existen campos vacios");
		} else {
			dispatch(
				updateMethodAction({
					id: id,
					metodo,
				})
			);
		}
		navigate(path);
		window.location.reload();
	};

	return (
		<div className="container">
			<div className="row">
				<h1 className="text-center"> EDITAR INFORMACION DE LA UNIDAD</h1>
			</div>
			<div className="row">
				{loadingSolo && <Loader />}
				{errorSolo && <Messages>{errorSolo}</Messages>}
				{loading ? (
					<Loader />
				) : error ? (
					<Messages>{error}</Messages>
				) : (
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="InputMetodo" className="form-label">
								Nombre de la Metodo
							</label>
							<input
								value={metodo}
								onChange={(e) => setMetodo(e.target.value)}
								type="text"
								className="form-control"
								id="InputMetodo"
								aria-describedby="unitedit"
								placeholder="Nombre del metodo"
								required
							/>

							<div className="row pt-3">
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</div>
						</div>
					</form>
				)}
				{message && <Messages>{message}</Messages>}
			</div>
		</div>
	);
};

export default MethodsPut;

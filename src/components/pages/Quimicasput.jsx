import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

// types
import { QUIMICAS_UPDATE_RESET } from "../../redux/types/quimicasType";

import {
	quimicaActionDetails,
	updateQuimicaAction,
} from "../../redux/actions/quimicasActions";

const QuimicasPut = () => {
	const [nombre_quimica, setNombre] = useState("");
	const [message, setMessage] = useState("");
	const { id } = useParams();

	const navigate = useNavigate();
	const path = "/quimicasl";

	const dispatch = useDispatch();

	const soloQuimica = useSelector((state) => state.quimicasdetail);
	const { error: errorSolo, loading: loadingSolo, quimicainfo } = soloQuimica;

	const updatequimica = useSelector((state) => state.quimicasupdate);
	const { error, loading, success } = updatequimica;

	useEffect(() => {
		if (success) {
			dispatch({ type: QUIMICAS_UPDATE_RESET });
		} else {
			if (quimicainfo.id !== Number(id)) {
				dispatch(quimicaActionDetails(id));
			} else {
				setNombre(quimicainfo.nombre_quimica);
			}
		}
	}, [dispatch, quimicainfo, id, success]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (nombre_quimica == " ") {
			setMessage("Existen campos vacios");
		} else {
			dispatch(
				updateQuimicaAction({
					id: id,
					nombre_quimica,
				})
			);
		}
		navigate(path);
		window.location.reload();
	};

	return (
		<div className="container">
			<div className="row">
				<h1 className="text-center"> EDITAR INFORMACION </h1>
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
							<label htmlFor="InputQuimica" className="form-label">
								Nombre de la Quimica
							</label>
							<input
								value={nombre_quimica}
								onChange={(e) => setNombre(e.target.value.toUpperCase())}
								type="text"
								className="form-control"
								id="InputQuimica"
								aria-describedby="quimicaedit"
								placeholder="Nombre de la quimica"
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

export default QuimicasPut;

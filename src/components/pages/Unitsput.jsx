import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

// types
import { UNITS_UPDATE_RESET } from "../../redux/types/unitsType";

import {
	unitActionDetails,
	updateUnitAction,
} from "../../redux/actions/unitsActions";

const UnitsPut = () => {
	const [nombre, setNombre] = useState("");
	const [message, setMessage] = useState("");
	const { id } = useParams();

	const navigate = useNavigate();
	const path = "/units";

	const dispatch = useDispatch();

	const units = useSelector((state) => state.unitsdetail);
	const { error: errorSolo, loading: loadingSolo, unitinfo } = units;

	const updatequimica = useSelector((state) => state.unitsupdate);
	const { error, loading, success } = updatequimica;

	useEffect(() => {
		if (success) {
			dispatch({ type: UNITS_UPDATE_RESET });
		} else {
			if (unitinfo.id !== Number(id)) {
				dispatch(unitActionDetails(id));
			} else {
				setNombre(unitinfo.nombre);
			}
		}
	}, [dispatch, unitinfo, id, success]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (nombre == " ") {
			setMessage("Existen campos vacios");
		} else {
			dispatch(
				updateUnitAction({
					id: id,
					nombre,
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
							<label htmlFor="InputUnit" className="form-label">
								Nombre de la Unit
							</label>
							<input
								value={nombre}
								onChange={(e) => setNombre(e.target.value)}
								type="text"
								className="form-control"
								id="InputUnit"
								aria-describedby="unitedit"
								placeholder="Nombre de la unit"
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

export default UnitsPut;

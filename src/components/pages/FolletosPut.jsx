import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

// types
import { FOLLETOS_UPDATE_RESET } from "../../redux/types/folletosType";

import {
	folletoActionDetails,
	updateFolletoAction,
} from "../../redux/actions/folletosActions";

const FolletosPut = () => {
	const [nombre, setNombre] = useState("");
	const [lote, setLote] = useState("");
	const [fecha, setFecha] = useState("");
	const [message, setMessage] = useState("");
	const { id } = useParams();

	const navigate = useNavigate();
	const path = "/folletos";

	const dispatch = useDispatch();

	const soloFolleto = useSelector((state) => state.folletosdetail);
	const { error: ErrorSolo, loading: LoadingSolo, folletoinfo } = soloFolleto;

	const updatefolleto = useSelector((state) => state.folletosupdate);
	const { error, loading, success } = updatefolleto;

	useEffect(() => {
		if (success) {
			dispatch({ type: FOLLETOS_UPDATE_RESET });
		} else {
			if (folletoinfo.id !== Number(id)) {
				dispatch(folletoActionDetails(id));
			} else {
				setNombre(folletoinfo.nombre);
				setLote(folletoinfo.lote);
				setFecha(folletoinfo.fecha);
			}
		}
	}, [dispatch, success, folletoinfo]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if ((nombre == " ") | (lote == " ") | (fecha == " ")) {
			setMessage("Existen campos vacios");
		} else {
			dispatch(
				updateFolletoAction({
					id: folletoinfo.id,
					nombre: nombre,
					lote: lote,
					fecha: fecha
				})
			);
				console.log("entre al dispach")
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
				{message && <Messages>{message}</Messages>}
				{error && <Messages>{error}</Messages>}
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="InputFolleto" className="form-label">
							Nombre del Folleto
						</label>
						<input
							value={nombre}
							onChange={(e) => setNombre(e.target.value)}
							type="text"
							className="form-control"
							id="InputFolleto"
							aria-describedby="folletoHelp"
							placeholder="Nombre del folleto"
							required
						/>
						<label htmlFor="Inputlote" className="form-label">
							Lote
						</label>
						<input
							value={lote}
							onChange={(e) => setLote(e.target.value)}
							type="text"
							className="form-control"
							id="Inputlote"
							aria-describedby="loteinfo"
							placeholder="Numero de Lote"
							required
						/>
						<label htmlFor="InputFecha" className="form-label">
							Nombre del Folleto
						</label>
						<input
							value={fecha}
							onChange={(e) => setFecha(e.target.value)}
							type="date"
							className="form-control"
							id="InputFecha"
							aria-describedby="dateinfo"
							required
						/>
						<div className="row pt-3">
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FolletosPut;

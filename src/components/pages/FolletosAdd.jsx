import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
	createFolletoAction,
} from "../../redux/actions/folletosActions";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const FolletosAdd = () => {
	const [nombre, setNombre] = useState("");
	const [lote, setLote] = useState("");
	const [fecha, setFecha] = useState("");

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const path = "/";

	
	const folletospost = useSelector((state) => state.folletoscreate);
	const { loading, error, createinfo } = folletospost;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createFolletoAction(nombre, lote, fecha));
		if (createinfo) {
			navigate(path);
		}
	};

	return (
		<div className="container">
			<div className="row pb-3">
				<h1 className="text-center">Creacion de un nuevo folleto</h1>
			</div>
			{error && <Messages>{error}</Messages>}
			<div className="row">
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
						<div className="row">{loading && <Loader />}</div>
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

export default FolletosAdd;

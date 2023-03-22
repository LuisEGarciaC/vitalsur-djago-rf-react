import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
	createUnitAction,
	listUnits,
} from "../../redux/actions/unitsActions";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const UnitsAdd = () => {
	const [nombre, setUnit] = useState("");

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const path = "/units";

	const unitsadd = useSelector((state) => state.unitscreate);
	const { loading, error } = unitsadd;

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createUnitAction(nombre));
    dispatch(listUnits());
		navigate(path);
	};

	return (
		<div className="container">
			<div className="row pb-3">
				<h1 className="text-center">Agregar una nueva Unidad</h1>
			</div>
			{error && <Messages>{error}</Messages>}
			<div className="row">
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="InputUnit" className="form-label">
							Nombre de la Unidad
						</label>
						<input
							value={nombre}
							onChange={(e) => setUnit(e.target.value)}
							type="text"
							className="form-control"
							id="InputUnit"
							aria-describedby="unitAdd"
							placeholder="Nombre de la unit"
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

export default UnitsAdd;

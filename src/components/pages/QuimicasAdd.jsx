import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createQuimicaAction, listquimicas } from "../../redux/actions/quimicasActions";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const FolletosAdd = () => {
	const [nombre_quimica, setNombre] = useState("");

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const path = "/quimicasl";

	const quimciasadd = useSelector((state) => state.quimicascreate);
	const { loading, error } = quimciasadd;

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createQuimicaAction(nombre_quimica));
    dispatch(listquimicas());
		navigate(path);
	};

	return (
		<div className="container">
			<div className="row pb-3">
				<h1 className="text-center">Agregar una nueva Quimica</h1>
			</div>
			{error && <Messages>{error}</Messages>}
			<div className="row">
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
							aria-describedby="quimicaAdd"
							placeholder="Nombre de la quimica"
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

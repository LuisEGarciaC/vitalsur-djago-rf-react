import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
	listMethods,
	createMethodAction,
} from "../../redux/actions/methodesActions";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const MethodsAdd = () => {
	const [nombre, setMethod] = useState("");

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const path = "/methods";

	const methodadd = useSelector((state) => state.methodscreate);
	const { loading, error } = methodadd;

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createMethodAction(nombre));
    dispatch(listMethods());
		navigate(path);
	};

	return (
		<div className="container">
			<div className="row pb-3">
				<h1 className="text-center">Agregar una nuevo Metodo</h1>
			</div>
			{error && <Messages>{error}</Messages>}
			<div className="row">
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="InputMethod" className="form-label">
							Nombre del Metodo
						</label>
						<input
							value={nombre}
							onChange={(e) => setMethod(e.target.value)}
							type="text"
							className="form-control"
							id="InputMethod"
							aria-describedby="MethodAdd"
							placeholder="Nombre del Method"
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

export default MethodsAdd;

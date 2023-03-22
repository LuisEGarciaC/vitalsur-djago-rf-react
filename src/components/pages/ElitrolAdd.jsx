import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
	createElitrolAction,
	listelitrol,
} from "../../redux/actions/elitrolActions";

import { listquimicas } from "../../redux/actions/quimicasActions";
import { listMethods } from "../../redux/actions/methodesActions";
import { listUnits } from "../../redux/actions/unitsActions";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const ElitrolAdd = () => {
	const [component, setComponent] = useState(0);
	const [method, setMethod] = useState(0);
	const [propidedades, setPropiedades] = useState(0);
	const [rankmiddle, setranmidle] = useState(0);
	const [ranklow, setRanklow] = useState(0);
	const [rankhigh, setRanhigh] = useState(0);

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const path = "/elitrol";

	const elitrolCreate = useSelector((state) => state.elitrolcreate);
	const { loading, error } = elitrolCreate;

	const quimicaslista = useSelector((state) => state.quimicasList);
	const { loading: quimicaloading, quimicasinfo } = quimicaslista;

	const listsmethodes = useSelector((state) => state.methodsList);
	const { loading: methodloading, methodesinfo } = listsmethodes;

	const listsunits = useSelector((state) => state.unitsList);
	const { loading: unitsloading, unitsinfo } = listsunits;

	useEffect(() => {
		dispatch(listquimicas());
		dispatch(listUnits());
		dispatch(listMethods());
	}, [dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (component != 0 && method != 0 && propidedades != 0 && rankmiddle != 0 && ranklow != 0 && rankhigh != 0)  {
			dispatch(
			createElitrolAction(
				component,
				method,
				propidedades,
				rankmiddle,
				ranklow,
				rankhigh
			)
			);
			dispatch(listelitrol());
			navigate(path);
		} else {
			alert("Ningun elemento puede quedar en 0")
		}

	};

	// console.log(quimicasinfo, methodesinfo, unitsinfo);
	// console.log(component, method, propidedades, rankmiddle, ranklow, rankhigh);
	return (
		<div className="container pb-5">
			<div className="row pb-3">
				<h1 className="text-center">Agregar un Nuevo elemento a Elitrol</h1>
			</div>
			{error && <Messages>{error}</Messages>}
			<div className="row">
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="" className="form-label">
							Componente
						</label>
						<select
							className="form-select form-select"
							name="Componente"
							id="Componente"
							value={component}
							onChange={(e) => setComponent(e.target.value)}
						>
							<option value="0">Select one</option>
							{quimicasinfo &&
								quimicasinfo.map((quimica) => (
									<option key={quimica.id} value={quimica.id}>
										{quimica.nombre_quimica}
									</option>
								))}
						</select>
					</div>
					<div className="mb-3">
						<label htmlFor="" className="form-label">
							Metodo
						</label>
						<select
							className="form-select form-select"
							name="Metodo"
							id="Metodo"
							value={method}
							onChange={(e) => setMethod(e.target.value)}
						>
							<option value="0">Select one</option>
							{methodesinfo &&
								methodesinfo.map((mtodo) => (
									<option value={mtodo.id}>{mtodo.metodo}</option>
								))}
						</select>
					</div>
					<div className="mb-3">
						<label htmlFor="" className="form-label">
							Unit
						</label>

						<select
							className="form-select form-select"
							name="Unit"
							id="Unit"
							value={propidedades}
							onChange={(e) => setPropiedades(e.target.value)}
						>
							<option value="0">Select one</option>
							{unitsinfo &&
								unitsinfo.map((unit) => (
									<option value={unit.id}>{unit.nombre}</option>
								))}
						</select>
					</div>
					<div className="mb-3">
						<label htmlFor="midvalue" className="form-label">
							Valor medio
						</label>
						<input
							value={rankmiddle}
							onChange={(e) => setranmidle(e.target.value)}
							type="number"
							className="form-control"
							id="midvalue"
							aria-describedby="valormedio"
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="Lowvalue" className="form-label">
							Valor bajo
						</label>
						<input
							value={ranklow}
							onChange={(e) => setRanklow(e.target.value)}
							type="number"
							className="form-control"
							id="Lowvalue"
							aria-describedby="valormedio"
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="higtvalue" className="form-label">
							Valor Alto
						</label>
						<input
							value={rankhigh}
							onChange={(e) => setRanhigh(e.target.value)}
							type="number"
							className="form-control"
							id="Lowvalue"
							aria-describedby="valormedio"
							required
						/>
					</div>
					<div className="row">{loading && <Loader />}</div>
					<div className="row pt-3">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ElitrolAdd;

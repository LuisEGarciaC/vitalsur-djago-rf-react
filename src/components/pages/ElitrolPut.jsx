import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

// types
import { ELITROL_UPDATE_RESET } from "../../redux/types/elitrolType";
import {
	elitrolActionDetails,
	updateelitrolAction,
} from "../../redux/actions/elitrolActions";

import { listquimicas } from "../../redux/actions/quimicasActions";
import { listMethods } from "../../redux/actions/methodesActions";
import { listUnits } from "../../redux/actions/unitsActions";

const ElitrolPut = () => {
	const [component, setComponent] = useState(0);
	const [method, setMethod] = useState(0);
	const [propidedades, setPropiedades] = useState(0);
	const [rankmiddle, setranmidle] = useState(0);
	const [ranklow, setRanklow] = useState(0);
	const [rankhigh, setRanhigh] = useState(0);
	const [message, setMessage] = useState("");
	const { id } = useParams();

	const navigate = useNavigate();
	const path = "/elitrol";

	const dispatch = useDispatch();

	const elitroldetail = useSelector((state) => state.elitroldetail);
	const { error: errorSolo, loading: loadingSolo, elitrolinfo } = elitroldetail;

	const updateelitrol = useSelector((state) => state.elitrolupdate);
	const { error, loading, success } = updateelitrol;

	const quimicaslista = useSelector((state) => state.quimicasList);
	const { loading: quimicaloading, quimicasinfo } = quimicaslista;

	const listsmethodes = useSelector((state) => state.methodsList);
	const { loading: methodloading, methodesinfo } = listsmethodes;

	const listsunits = useSelector((state) => state.unitsList);
	const { loading: unitsloading, unitsinfo } = listsunits;

	useEffect(() => {
		if (success) {
			dispatch({ type: ELITROL_UPDATE_RESET });
		} else {
			if (elitrolinfo.id !== Number(id)) {
				dispatch(elitrolActionDetails(id));
			} else {
				setComponent(elitrolinfo.component);
				setMethod(elitrolinfo.method);
				setPropiedades(elitrolinfo.propidedades);
				setranmidle(elitrolinfo.rankmiddle);
				setRanklow(elitrolinfo.ranklow);
				setRanhigh(elitrolinfo.rankhigh);
			}
		}
		dispatch(listquimicas());
		dispatch(listUnits());
		dispatch(listMethods());
	}, [dispatch, elitrolinfo, id, success]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			component == 0 &&
			method == 0 &&
			propidedades == 0 &&
			rankmiddle == 0 &&
			ranklow == 0 &&
			rankhigh == 0
		) {
			setMessage("Existen campos vacios");
		} else {
			dispatch(
				updateelitrolAction({
					id: id,
					component,
					method,
					propidedades,
					rankmiddle,
					ranklow,
					rankhigh,
				})
			);
		}
		navigate(path);
		window.location.reload();
	};

	// console.log(quimicasinfo, methodesinfo, unitsinfo);
	// console.log(component, method, propidedades, rankmiddle, ranklow, rankhigh);

	return (
		<div className="container">
			<div className="row">
				<h1 className="text-center"> EDITAR INFORMACION DE LA UNIDAD</h1>
			</div>
			<div className="row">
				{loadingSolo && quimicaloading && methodloading && unitsloading && (
					<Loader />
				)}
				{errorSolo && <Messages>{errorSolo}</Messages>}
				{loading ? (
					<Loader />
				) : error ? (
					<Messages>{error}</Messages>
				) : (
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
				)}
				{message && <Messages>{message}</Messages>}
			</div>
		</div>
	);
};

export default ElitrolPut;

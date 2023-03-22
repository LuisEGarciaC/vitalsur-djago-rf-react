import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

// types
import { ELICAL_UPDATE_RESET } from "../../redux/types/elicalType";
import {
	elicalActionDetails,
	updatelicalAction,
} from "../../redux/actions/elicalActions";

// other accions
import { listquimicas } from "../../redux/actions/quimicasActions";
import { listMethods } from "../../redux/actions/methodesActions";
import { listUnits } from "../../redux/actions/unitsActions";
import { listTraceabilitys } from "../../redux/actions/traceabilityActions";
const ElicalPut = () => {
	const [referencia, setReferencia] = useState("");
	const [quimica, setQuimica] = useState(0);
	const [value, setValue] = useState(0);
	const [pvalor, setPvalor] = useState(0);
	const [valor, setValor] = useState(0);
	const [propiedadSg, setPropiedadSg] = useState(0);
	const [method, setMethod] = useState(0);
	const [traceability, setTraceability] = useState(0);

	const [message, setMessage] = useState("");
	const { id } = useParams();

	const navigate = useNavigate();
	const path = "/elical";

	const dispatch = useDispatch();

	const Elicaldetail = useSelector((state) => state.elicaldetail);
	const { error: errorSolo, loading: loadingSolo, elicalinfo } = Elicaldetail;

	const updateelical = useSelector((state) => state.elicalupdate);
	const { error, loading, success } = updateelical;

	const quimicaslista = useSelector((state) => state.quimicasList);
	const { loading: quimicaloading, quimicasinfo } = quimicaslista;

	const listsmethodes = useSelector((state) => state.methodsList);
	const { loading: methodloading, methodesinfo } = listsmethodes;

	const listsunits = useSelector((state) => state.unitsList);
	const { loading: unitsloading, unitsinfo } = listsunits;

	const listTraceability = useSelector((state) => state.traceabilitysList);
	const { loading: traceloading, tracesinfo } = listTraceability;

	useEffect(() => {
		if (success) {
			dispatch({ type: ELICAL_UPDATE_RESET });
		} else {
			if (elicalinfo.id !== Number(id)) {
				dispatch(elicalActionDetails(id));
			} else {
				setReferencia(elicalinfo.referencia);
				setQuimica(elicalinfo.quimica);
				setValue(elicalinfo.value);
				setPvalor(elicalinfo.pvalor);
				setValor(elicalinfo.valor);
				setPropiedadSg(elicalinfo.propiedadSg);
				setMethod(elicalinfo.method);
				setTraceability(elicalinfo.traceability);
			}
		}
		dispatch(listquimicas());
		dispatch(listUnits());
		dispatch(listMethods());
		dispatch(listTraceabilitys());
	}, [dispatch, elicalinfo, id, success]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			referencia == "" &&
			quimica != 0 &&
			value != 0 &&
			pvalor != 0 &&
			valor != 0 &&
			propiedadSg != 0 &&
			method != 0 &&
			traceability != 0
		) {
			setMessage("Existen campos vacios");
		} else {
			dispatch(
				updatelicalAction({
					id: id,
					referencia,
					quimica,
					value,
					pvalor,
					valor,
					propiedadSg,
					method,
					traceability,
				})
			);
			navigate(path);
			window.location.reload();
		}
	};

	// console.log(elicalinfo, quimicasinfo, methodesinfo, unitsinfo, tracesinfo);
	console.log(
		referencia,
		quimica,
		value,
		pvalor,
		valor,
		propiedadSg,
		method,
		traceability
	);

	return (
		<div className="container">
			<div className="row">
				<h1 className="text-center">EDITAR INFORMACION DE LA unidada Elical</h1>
			</div>
			<div className="row">
				{loadingSolo &&
					quimicaloading &&
					methodloading &&
					unitsloading &&
					traceloading && <Loader />}
				{errorSolo && <Messages>{errorSolo}</Messages>}
				{loading ? (
					<Loader />
				) : error ? (
					<Messages>{error}</Messages>
				) : (
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="ReferenceElitrol" className="form-label">
								Referencia
							</label>
							<input
								value={referencia}
								onChange={(e) => setReferencia(e.target.value.toUpperCase())}
								type="text"
								className="form-control"
								id="ReferenceElitrol"
								aria-describedby="valormedio"
								placeholder="Referencia de la Quimica"
								required
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="" className="form-label">
								Quimica
							</label>
							<select
								className="form-select form-select"
								name="Componente"
								id="Componente"
								value={quimica}
								onChange={(e) => setQuimica(e.target.value)}
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
							<label htmlFor="primervalor" className="form-label">
								Valor 1
							</label>
							<input
								value={value}
								onChange={(e) => setValue(e.target.value)}
								type="number"
								className="form-control"
								id="primervalor"
								aria-describedby="valor1"
								required
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="" className="form-label">
								Unit 1
							</label>
							<select
								className="form-select form-select"
								name="Unit"
								id="Unit"
								value={pvalor}
								onChange={(e) => setPvalor(e.target.value)}
							>
								<option value="0">Select one</option>
								{unitsinfo &&
									unitsinfo.map((unit) => (
										<option value={unit.id}>{unit.nombre}</option>
									))}
							</select>
						</div>

						<div className="mb-3">
							<label htmlFor="segundaovalor" className="form-label">
								Valor 2
							</label>
							<input
								value={valor}
								onChange={(e) => setValor(e.target.value)}
								type="number"
								className="form-control"
								id="segundaovalor"
								aria-describedby="valor2"
								required
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="" className="form-label">
								Unit 2
							</label>
							<select
								className="form-select form-select"
								name="Unit2"
								id="Unit2"
								value={propiedadSg}
								onChange={(e) => setPropiedadSg(e.target.value)}
							>
								<option value="0">Select one</option>
								{unitsinfo &&
									unitsinfo.map((unit) => (
										<option value={unit.id}>{unit.nombre}</option>
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
								Traceability
							</label>

							<select
								className="form-select form-select"
								name="Traceability"
								id="Utraceability"
								value={traceability}
								onChange={(e) => setTraceability(e.target.value)}
							>
								<option value="0">Select one</option>
								{tracesinfo &&
									tracesinfo.map((trace) => (
										<option value={trace.id}>{trace.traceability}</option>
									))}
							</select>
						</div>

						<div className="row">{loading && <Loader />}</div>
						<div className="row pb-3">
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

export default ElicalPut;

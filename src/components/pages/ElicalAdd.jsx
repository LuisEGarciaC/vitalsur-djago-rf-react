import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
	listelical,
	createElicalAction,
} from "../../redux/actions/elicalActions";
// other accions
import { listquimicas } from "../../redux/actions/quimicasActions";
import { listMethods } from "../../redux/actions/methodesActions";
import { listUnits } from "../../redux/actions/unitsActions";
import { listTraceabilitys } from "../../redux/actions/traceabilityActions";
// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const ElicalAdd = () => {
	const [referencia, setReferencia] = useState("");
	const [quimica, setQuimica] = useState(0);
	const [value, setValue] = useState(0);
	const [pvalor, setPvalor] = useState(0);
	const [valor, setValor] = useState(0);
	const [propiedadSg, setPropiedadSg] = useState(0);
	const [method, setMethod] = useState(0);
	const [traceability, setTraceability] = useState(0);

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const path = "/elical";

	const ElicalCrate = useSelector((state) => state.elicalcreate);
	const { loading, error } = ElicalCrate;

	const quimicaslista = useSelector((state) => state.quimicasList);
	const { loading: quimicaloading, quimicasinfo } = quimicaslista;

	const listsmethodes = useSelector((state) => state.methodsList);
	const { loading: methodloading, methodesinfo } = listsmethodes;

	const listsunits = useSelector((state) => state.unitsList);
	const { loading: unitsloading, unitsinfo } = listsunits;

	const listTraceability = useSelector((state) => state.traceabilitysList);
	const { loading: traceloading, tracesinfo } = listTraceability;

	useEffect(() => {
		dispatch(listquimicas());
		dispatch(listUnits());
		dispatch(listMethods());
		dispatch(listTraceabilitys());
	}, [dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			referencia != "" &&
			quimica != 0 &&
			value != 0 &&
			pvalor != 0 &&
			valor != 0 &&
			propiedadSg != 0 &&
			method != 0 &&
			traceability != 0
		) {
			dispatch(
				createElicalAction(
					referencia,
					quimica,
					value,
					pvalor,
					valor,
					propiedadSg,
					method,
					traceability
				)
			);
			dispatch(listelical());
			navigate(path);
		} else {
			alert("Ningun elemento puede quedar en 0");
		}
	};

	// console.log(quimicasinfo, methodesinfo, unitsinfo, tracesinfo);
	// console.log(
	// 	referencia,
	// 	quimica,
	// 	value,
	// 	pvalor,
	// 	valor,
	// 	propiedadSg,
	// 	method,
	// 	traceability
	// );
	return (
		<div className="container pb-5">
			<div className="row pb-3">
				<h1 className="text-center">Agregar un Nuevo elemento a Elical </h1>
			</div>
			{error && <Messages>{error}</Messages>}
			<div className="row">
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

export default ElicalAdd;

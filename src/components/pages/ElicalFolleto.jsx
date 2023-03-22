import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	listelical,
	deleteElicalAction,
} from "../../redux/actions/elicalActions";
// other accions
import { listquimicas } from "../../redux/actions/quimicasActions";
import { listMethods } from "../../redux/actions/methodesActions";
import { listUnits } from "../../redux/actions/unitsActions";
import {
	listTraceabilitys
} from "../../redux/actions/traceabilityActions";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const ElicalFolleto = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const listelical2 = useSelector((state) => state.elicalList2);
	const { error, loading, elicalinfo } = listelical2;

	const quimicaslista = useSelector((state) => state.quimicasList);
	const { loading: quimicaloading, quimicasinfo } = quimicaslista;

		const listsmethodes = useSelector((state) => state.methodsList);
		const { loading: methodloading, methodesinfo } = listsmethodes;

	const listsunits = useSelector((state) => state.unitsList);
	const { loading: unitsloading, unitsinfo } = listsunits;

		const listTraceability = useSelector((state) => state.traceabilitysList);
		const {loading: traceloading, tracesinfo } = listTraceability;

	const deleteelical = useSelector((state) => state.elicaldelete);
	const {
		error: errorDelete,
		loading: loadingDelete,
		success: successDelete,
	} = deleteelical;

	useEffect(() => {
		dispatch(listelical());
		dispatch(listquimicas());
		dispatch(listUnits());
		dispatch(listMethods());
		dispatch(listTraceabilitys());
	}, [dispatch, successDelete]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you shure you want to delete this Element?")) {
			dispatch(deleteElicalAction(id));
		}
	};


	return (
		<main className="container">
			<div>
				<div className="row">
					<h1 className="text-center">Informacion de las Folleo Elical</h1>
				</div>
			</div>
			{loading &&
			quimicaloading &&
			unitsloading &&
			unitsloading &&
			traceloading ? (
				<Loader />
			) : error ? (
				<Messages>{error}</Messages>
			) : (
				<div className="container">
					<div className="row">
						<table className="table table-striped table-hover">
							<thead>
								<tr>
									<th scope="col">Reagenr Reference</th>
									<th scope="col">Analiste</th>
									<th scope="col">Value</th>
									<th scope="col">Units</th>
									<th scope="col">Value</th>
									<th scope="col">Units</th>
									<th scope="col">Method</th>
									<th scope="col">Traceability</th>
									<th scope="col-2">Obciones</th>
								</tr>
							</thead>



							<tbody>
								{elicalinfo &&
									elicalinfo.map((elical) => (
										<tr key={elical.id}>
											<td scope="row ">{elical.referencia}</td>
											{quimicasinfo &&
												quimicasinfo.map((quimica) => (
													<>
														{quimica.id === elical.quimica ? (
															<td key={quimica.id} scope="row ">
																{quimica.nombre_quimica}
															</td>
														) : (
															""
														)}
													</>
												))}
											<td scope="row ">{elical.value}</td>
											{unitsinfo &&
												unitsinfo.map((unit) => (
													<>
														{unit.id === elical.pvalor ? (
															<td key={unit.id} scope="row ">
																{unit.nombre}
															</td>
														) : (
															""
														)}
													</>
												))}
											<td scope="row ">{elical.valor}</td>
											{unitsinfo &&
												unitsinfo.map((unit) => (
													<>
														{unit.id === elical.propiedadSg ? (
															<td key={unit.id} scope="row ">
																{unit.nombre}
															</td>
														) : (
															""
														)}
													</>
												))}
											{methodesinfo &&
												methodesinfo.map((method) => (
													<>
														{method.id === elical.method ? (
															<td key={method.id} scope="row ">
																{method.metodo}
															</td>
														) : (
															""
														)}
													</>
												))}

											{tracesinfo &&
												tracesinfo.map((trace) => (
													<>
														{trace.id === elical.traceability ? (
															<td key={trace.id} scope="row ">
																{trace.traceability}
															</td>
														) : (
															""
														)}
													</>
												))}

											<td scope="row">
												<button
													className="btn btn-danger"
													onClick={() => deleteHandler(elical.id)}
												>
													Eliminar
												</button>
											</td>
											<td scope="row">
												<a
													href={`/elical/put/${elical.id}`}
													type="button"
													className="btn btn-success"
												>
													modificar
												</a>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</main>
	);
};

export default ElicalFolleto;

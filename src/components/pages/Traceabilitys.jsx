import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	listTraceabilitys,
	deleteTraceabilityAction,
} from "../../redux/actions/traceabilityActions";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const Traceabilitys = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const listTraceability = useSelector((state) => state.traceabilitysList);
	const { error, loading, tracesinfo } = listTraceability;

	const deleteUnit = useSelector((state) => state.traceabilitydelete);
	const {
		error: errorDelete,
		loading: loadingDelete,
		success: successDelete,
	} = deleteUnit;

	useEffect(() => {
		dispatch(listTraceabilitys());
	}, [dispatch, successDelete]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you shure you want to delete this Traceability?")) {
			dispatch(deleteTraceabilityAction(id));
		}
	};
	return (
		<main className="container">
			<div>
				<div className="row">
					<h1 className="text-center">Informacion de Traceability</h1>
				</div>
			</div>
			{loading ? (
				<Loader />
			) : error ? (
				<Messages>{error}</Messages>
			) : (
				<div className="container">
					<div className="row">
						<table className="table table-striped table-hover">
							<thead>
								<tr>
									<th scope="col">Traceability</th>

									<th scope="col-2">Obciones</th>
								</tr>
							</thead>
							<tbody>
								{tracesinfo &&
									tracesinfo.map((trace) => (
										<tr key={trace.id}>
											<td scope="row ">{trace.traceability}</td>
											<td scope="row">
												<button
													className="btn btn-danger"
													onClick={() => deleteHandler(trace.id)}
												>
													Eliminar
												</button>
											</td>
											<td scope="row">
												<a
													href={`/traces/put/${trace.id}`}
													type="button"
													className="btn btn-success"
												>
													Modificar
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

export default Traceabilitys;

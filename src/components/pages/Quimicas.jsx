import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	listquimicas,
	deleteQuimicaAction,
} from "../../redux/actions/quimicasActions";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const Quimicas = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const quimicaslista = useSelector((state) => state.quimicasList);
	const { error, loading, quimicasinfo } = quimicaslista;

	const deleteQuimica = useSelector((state) => state.quimicadelete);
	const {
		error: errorDelete,
		loading: loadingDelete,
		success: successDelete,
	} = deleteQuimica;

	useEffect(() => {
		dispatch(listquimicas());
	}, [dispatch, successDelete]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you shure you want to delete this folleto?")) {
			dispatch(deleteQuimicaAction(id));
		}
	};
	return (
		<main className="container">
			<div>
				<div className="row">
					<h1 className="text-center">Informacion de los folletos</h1>
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
									<th scope="col">Nombre de la quimica</th>

									<th scope="col-2">obciones</th>
								</tr>
							</thead>
							<tbody>
								{quimicasinfo &&
									quimicasinfo.map((quimica) => (
										<tr key={quimica.id}>
											<td scope="row">{quimica.nombre_quimica}</td>
											<td scope="row">
												<button
													className="btn btn-danger"
													onClick={() => deleteHandler(quimica.id)}
												>
													Eliminar
												</button>
											</td>
											<td scope="row">
												<a
													href={`/quimicasl/put/${quimica.id}`}
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

export default Quimicas;

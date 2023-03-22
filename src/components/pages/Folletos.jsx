import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteFolletoAction,
	listfolletos,
} from "../../redux/actions/folletosActions";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const Folletos = () => {
const { id } = useParams();

	const dispatch = useDispatch();

	const folletosList = useSelector((state) => state.folletosList);
	const { error, loading, folletosinfo } = folletosList;

	const deleteFolleto = useSelector((state) => state.folletodelete);
	const {
		error: errorDelete,
		loading: loadingDelete,
		success: successDelete,
	} = deleteFolleto;
	

	useEffect(() => {
		dispatch(listfolletos());
	}, [dispatch, successDelete]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you shure you want to delete this folleto?")) {
			dispatch(deleteFolletoAction(id));
		}
	};
	console.log(folletosinfo);
	return (
		<main className="container">
			<div >
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
									<th scope="col">Nombre del folleto</th>
									<th scope="col">Lote </th>
									<th scope="col">fecha</th>
									<th scope="col-2">obciones</th>
								</tr>
							</thead>
							<tbody>
								{folletosinfo &&
									folletosinfo.map((folleto) => (
										<tr key={folleto.id}>
											<td scope="row">{folleto.nombre}</td>
											<td scope="row">{folleto.lote}</td>
											<td scope="row">{folleto.fecha}</td>
											<td scope="row">
												<button
													className="btn btn-danger"
													onClick={() => deleteHandler(folleto.id)}
												>
													Eliminar
												</button>
											</td>
											<td scope="row">
												<a
													href={`/folletos/put/${folleto.id}`}
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

export default Folletos;

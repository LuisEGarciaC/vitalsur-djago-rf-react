import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	listMethods,
	deleteMethodAction,
} from "../../redux/actions/methodesActions";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const Methodes = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const listsmethodes = useSelector((state) => state.methodsList);
	const { error, loading, methodesinfo } = listsmethodes;

	const deleteMethod = useSelector((state) => state.methoddelete);
	const {
		error: errorDelete,
		loading: loadingDelete,
		success: successDelete,
	} = deleteMethod;

	useEffect(() => {
		dispatch(listMethods());
	}, [dispatch, successDelete]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you shure you want to delete this method?")) {
			dispatch(deleteMethodAction(id));
		}
	};
	return (
		<main className="container">
			<div>
				<div className="row">
					<h1 className="text-center">Informacion de las Metodos Quimico</h1>
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
									<th scope="col">Metodo Quimico</th>

									<th scope="col-2">Obciones</th>
								</tr>
							</thead>
							<tbody>
								{methodesinfo &&
									methodesinfo.map((method) => (
										<tr key={method.id}>
											<td scope="row ">{method.metodo}</td>
											<td scope="row">
												<button
													className="btn btn-danger"
													onClick={() => deleteHandler(method.id)}
												>
													Eliminar
												</button>
											</td>
											<td scope="row">
												<a
													href={`/methods/put/${method.id}`}
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

export default Methodes;

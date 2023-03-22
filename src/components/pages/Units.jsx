import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	listUnits,
	deleteunitAction,
} from "../../redux/actions/unitsActions";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const Units = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const listsunits = useSelector((state) => state.unitsList);
	const { error, loading, unitsinfo } = listsunits;

	const deleteUnit = useSelector((state) => state.unitdelete);
	const {
		error: errorDelete,
		loading: loadingDelete,
		success: successDelete,
	} = deleteUnit;

	useEffect(() => {
		dispatch(listUnits());
	}, [dispatch, successDelete]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you shure you want to delete this unit?")) {
			dispatch(deleteunitAction(id));
		}
	};
	return (
		<main className="container">
			<div>
				<div className="row">
					<h1 className="text-center">Informacion de las Unidades Quimicas</h1>
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
									<th scope="col">Unidad Quimica</th>

									<th scope="col-2">Obciones</th>
								</tr>
							</thead>
							<tbody>
								{unitsinfo &&
									unitsinfo.map((unit) => (
										<tr key={unit.id}>
											<td scope="row ">{unit.nombre}</td>
											<td scope="row">
												<button
													className="btn btn-danger"
													onClick={() => deleteHandler(unit.id)}
												>
													Eliminar
												</button>
											</td>
											<td scope="row">
												<a
													href={`/units/put/${unit.id}`}
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

export default Units;

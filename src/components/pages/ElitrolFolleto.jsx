import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	listelitrol,
	deleteElitrolAction,
} from "../../redux/actions/elitrolActions";
// other accions
import { listquimicas } from "../../redux/actions/quimicasActions";
import { listMethods } from "../../redux/actions/methodesActions";
import { listUnits } from "../../redux/actions/unitsActions";

import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const ElitrolFolleto = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const listelitroll = useSelector((state) => state.elitrolList);
	const { error, loading, elitrolinfo } = listelitroll;

	const quimicaslista = useSelector((state) => state.quimicasList);
	const { loading: quimicaloading, quimicasinfo } = quimicaslista;

		const listsmethodes = useSelector((state) => state.methodsList);
		const { loading: methodloading, methodesinfo } = listsmethodes;

	const listsunits = useSelector((state) => state.unitsList);
	const { loading: unitsloading, unitsinfo } = listsunits;

	const deleteelitrol = useSelector((state) => state.elitroldelete);
	const {
		error: errorDelete,
		loading: loadingDelete,
		success: successDelete,
	} = deleteelitrol;

	useEffect(() => {
		dispatch(listelitrol());
		dispatch(listquimicas());
		dispatch(listUnits());
		dispatch(listMethods());
	}, [dispatch, successDelete]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you shure you want to delete this Element?")) {
			dispatch(deleteElitrolAction(id));
		}
	};


	return (
		<main className="container">
			<div>
				<div className="row">
					<h1 className="text-center">Informacion de las Folleo Elitrol</h1>
				</div>
			</div>
			{loading && quimicaloading && unitsloading && unitsloading ? (
				<Loader />
			) : error ? (
				<Messages>{error}</Messages>
			) : (
				<div className="container">
					<div className="row">
						<table className="table table-striped table-hover">
							<thead>
								<tr>
									<th scope="col">CONSTITUANT COMPONENT</th>
									<th scope="col">TEST METHODS /METHODES</th>
									<th scope="col">UNITS / UNITES</th>
									<th scope="col">MEAN / MOYENNE</th>
									<th scope="col">RANGES/ bajos</th>
									<th scope="col">RANGES/ Altos</th>
									<th scope="col-2">Obciones</th>
								</tr>
							</thead>
							<tbody>
								{elitrolinfo &&
									elitrolinfo.map((elitrol) => (
										<tr key={elitrol.id}>
											{quimicasinfo &&
												quimicasinfo.map((quimica) => (
													<>
														{quimica.id === elitrol.component ? (
															<td key={quimica.id} scope="row ">
																{quimica.nombre_quimica}
															</td>
														) : (
															""
														)}
													</>
												))}

											{methodesinfo &&
												methodesinfo.map((method) => (
													<>
														{method.id === elitrol.method ? (
															<td key={method.id} scope="row ">
																{method.metodo}
															</td>
														) : (
															""
														)}
													</>
												))}

											{unitsinfo &&
												unitsinfo.map((unit) => (
													<>
														{unit.id === elitrol.propidedades ? (
															<td key={unit.id} scope="row ">
																{unit.nombre}
															</td>
														) : (
															""
														)}
													</>
												))}

											<td scope="row ">{elitrol.rankmiddle}</td>
											<td scope="row ">{elitrol.ranklow}</td>
											<td scope="row ">{elitrol.rankhigh}</td>
											
											<td scope="row">
												<button
													className="btn btn-danger"
													onClick={() => deleteHandler(elitrol.id)}
												>
													Eliminar
												</button>
											</td>
											<td scope="row">
												<a
													href={`/elitrol/put/${elitrol.id}`}
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

export default ElitrolFolleto;

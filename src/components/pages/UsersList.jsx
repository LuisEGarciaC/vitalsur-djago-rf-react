import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUsers } from "../../redux/actions/userActions";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const UsersList = () => {
	const dispatch = useDispatch();

	const usersList = useSelector((state) => state.UserList);
	const { error, loading, users } = usersList;

	useEffect(() => {
		dispatch(getListUsers());
	}, [dispatch]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you shure you want to delete this folleto?")) {
			console.log("elemneto eliminado")
		}
	};
	return (
		<main className="container">
			<div className="row">
				<h1 className="text-center">Lista de usuarios</h1>
			</div>
			<section className="row">
				{loading ? (
					<Loader />
				) : error ? (
					<Messages>{error}</Messages>
				) : (
					<div className="row">
						<table className="table table-striped table-hover">
							<thead>
								<tr>
									<th scope="col">Nombre del usuario</th>
									<th scope="col">Email </th>
									<th scope="col">Primer nombre</th>
								</tr>
							</thead>
							<tbody>
								{users &&
									users.map((user) => (
										<tr key={user.id}>
											<td scope="row">{user.user_name}</td>
											<td scope="row">{user.email}</td>
											<td scope="row">{user.first_name}</td>
											<td scope="row">
												<button
													className="btn btn-danger"
													onClick={() => deleteHandler(user.id)}
												>
													Eliminar
												</button>
											</td>
											<td scope="row">
												<a href="" type="button" className="btn btn-success">
													Modificar
												</a>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				)}
			</section>
		</main>
	);
};

export default UsersList;

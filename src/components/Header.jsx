import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Header = () => {
	const userLogin = useSelector((state) => state.userLogin);

	const { userInfo } = userLogin;

	const dispatch = useDispatch();

	const logoutHandler = () => dispatch(logout());
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">
									Home
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Folletos
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<li>
										<a className="dropdown-item" href="/folletos">
											Folletos
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/folletos/create">
											Crear un nuevo folleto
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Lista de quimicas
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<li>
										<a className="dropdown-item" href="/quimicasl">
											Lista de quimicas
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/quimicasl/create">
											Agregar una nueva quimica
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Unidades
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<li>
										<a className="dropdown-item" href="/units">
											Lista de unidades
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/units/create">
											Agregar una nueva unidad
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Traceability
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<li>
										<a className="dropdown-item" href="/trace">
											Lista de Traceability
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/traces/create">
											Agregar Traceability
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Metodos
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<li>
										<a className="dropdown-item" href="/methods">
											Lista de metodos
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/methods/create">
											Agregar una nuevo metodo
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Elitrol I
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<li>
										<a className="dropdown-item" href="/elitrol">
											Lista de Elitrol
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/eltrol/create">
											Agregar metodo Elitrol
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Elical 2
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<li>
										<a className="dropdown-item" href="/elical">
											Lista de elical
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/elical/create">
											Agregar nuevo metodo elical
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Usuarios
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<li>
										<a className="dropdown-item" href="/register">
											Register
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/login">
											Login
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/perfil">
											Mi pergil Perfil
										</a>
									</li>
									<li>
										<a
											onClick={logoutHandler}
											className="dropdown-item"
											href="/login"
										>
											Logout
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;

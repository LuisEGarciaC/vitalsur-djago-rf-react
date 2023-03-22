import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loader from "../other/Loader";
import Messages from "../other/Messages";
import { USER_EDIT_RESET } from "../../redux/types/userTypes";
import { editUser, getSoloUser } from "../../redux/actions/userActions";

const Userperfil = () => {
	const [user_name, setUser_name] = useState("");
	const [user_first_name, setUser_First_name] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const path = "/";

	const userSolo = useSelector((state) => state.userSolo);
	const { error, loading, user } = userSolo;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userEdit = useSelector((state) => state.userEdit);
	const { success } = userEdit;

	useEffect(() => {
		if (userInfo.id !== user.id) {
			dispatch({ type: USER_EDIT_RESET });
			dispatch(getSoloUser("userprofile"));
		} else {
			setUser_name(user.user_name);
			setUser_First_name(user.first_name);
			setEmail(user.email);
		}
	}, [dispatch, user, success, userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage("Passwords must match ");
		} else {
			dispatch(
				editUser({
					id: user.id,
					user_name: user_name,
					first_name: user_first_name,
					email: email,
					password: password,
				})
			);
			navigate(path);
		}
	};

	return (
		<main className="container">
			<div className="row">
				<h1 className="text-center">Mi perfil</h1>
			</div>
			<div className="row">
				{loading ? (
					<Loader />
				) : error ? (
					<Messages>{error}</Messages>
				) : (
					<div className="row  align-items-center ">
						{error && <Messages>{error}</Messages>}
						{message && <Messages>{message}</Messages>}
						<form onSubmit={submitHandler} method="POST">
							<div className="form-group">
								<label htmlFor="inputname">Nombre del usuario</label>
								<input
									value={user_name}
									onChange={(e) => setUser_name(e.target.value)}
									type="test"
									name="nameuser"
									className="form-control"
									id="inputname"
									aria-describedby="nameuser"
									placeholder="User name"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="Inputusername">Nombre</label>
								<input
									value={user_first_name}
									onChange={(e) => setUser_First_name(e.target.value)}
									id="Inputusername"
									name="username"
									type="text"
									className="form-control"
									aria-describedby="inputusername"
									placeholder="Nombre"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="InputEmail1">Correo del usuario</label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									name="email"
									className="form-control"
									id="InputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="InputPassword">Password</label>
								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									id="InputPassword"
									name="password"
									type="password"
									className="form-control"
									aria-describedby="inputpassword"
									placeholder="Password"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="InputconfirmPassword">Confirm Password</label>
								<input
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									id="InputconfirmPassword"
									name="password2"
									type="password"
									className="form-control"
									aria-describedby="inputcofirmpassword"
									placeholder="Password confirm"
								/>
								<button type="submit" className="btn btn-success mt-3">
									Actualizar
								</button>
							</div>
							
						</form>
					</div>
				)}
			</div>
		</main>
	);
};

export default Userperfil;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { register } from "../../redux/actions/userActions";
import Messages from "../other/Messages";
import Loader from "../other/Loader";


const Register = () => {
	const [user_name, setUser_name] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");

	const dispatch = useDispatch();

	const userRegister = useSelector((state) => state.userRegister);
	const { error, loading, userInfo } = userRegister;

	const navigate = useNavigate();
	const path = "/";

	useEffect(() => {
		if (userInfo) {
			navigate(path);
		}
	}, [userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage("Passwords must match!");
		} else {
			dispatch(register(user_name, email, password));
		}
	};
	return (
		<main className="container">
      <h1 className="text-center">Pagina de Registro de usuarios</h1>
			{message && <Messages>{message}</Messages>}
			{error && <Messages>{error}</Messages>}
      {loading
        ? <Loader />
        : (
			<div className="row  align-items-center ">
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
							aria-describedby="inputpassoword"
							placeholder="Password"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="ConfirmInputPassword">Confirmar contraseña</label>
						<input
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							id="ConfirmInputPassword"
							name="confirmpassword"
							type="password"
							className="form-control"
							aria-describedby="inputconfirmpassword"
							placeholder="Confirm Password"
						/>
					</div>
					<div className="row p-2">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
      )}
		</main>
	);
};

export default Register;

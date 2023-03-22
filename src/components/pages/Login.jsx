import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../redux/actions/userActions";
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const disptach = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { error, loading, userInfo } = userLogin;

	const navigate = useNavigate();
	const path = "/";

	useEffect(() => {
		if (userInfo) {
			navigate(path);
		}
	}, [userInfo]);

	const submitHandler = (e) => {
    e.preventDefault();
		disptach(login(email, password));
	};

	return (
		<main className="container">
			<h1>Pagina de login</h1>
			{error && <Messages>{error}</Messages>}
			{loading ? (
				<Loader />
			) : (
				<div className="row  align-items-center ">
					<form onSubmit={submitHandler} method="POST">
						<div className="form-group">
							<label htmlFor="InputEmail1">Email address</label>
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
								aria-describedby="emailHelp"
								placeholder="Password"
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

export default Login;

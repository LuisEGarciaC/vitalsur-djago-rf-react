import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
	createTraceabilityAction,
	listTraceabilitys,
} from "../../redux/actions/traceabilityActions";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

const TraceabilitysAdd = () => {
	const [traceability, setTraceability] = useState("");

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const path = "/trace";

	const TraceabilitysAdd = useSelector((state) => state.traceabilityscreate);
	const { loading, error } = TraceabilitysAdd;

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createTraceabilityAction(traceability));
    dispatch(listTraceabilitys());
		navigate(path);
	};

	return (
		<div className="container">
			<div className="row pb-3">
				<h1 className="text-center">Agregar una nueva Traceability</h1>
			</div>
			{error && <Messages>{error}</Messages>}
			<div className="row">
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="InputTraceability" className="form-label">
							traceability
						</label>
						<input
							value={traceability}
							onChange={(e) => setTraceability(e.target.value)}
							type="text"
							className="form-control"
							id="InputTraceability"
							aria-describedby="traceadd"
							placeholder="traceability"
							required
						/>
						<div className="row">{loading && <Loader />}</div>
						<div className="row pt-3">
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TraceabilitysAdd;

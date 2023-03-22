import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// components
import Loader from "../other/Loader";
import Messages from "../other/Messages";

// types
import { TRACEABILITY_UPDATE_RESET } from "../../redux/types/traceabilityType";

import {
	traceabilityActionDetails,
	updateTraceabilityAction,
} from "../../redux/actions/traceabilityActions";

const TraceabilitysPut = () => {
	const [traceability, setTraceability] = useState("");
	const [message, setMessage] = useState("");
	const { id } = useParams();

	const navigate = useNavigate();
	const path = "/trace";

	const dispatch = useDispatch();

	const traces = useSelector((state) => state.traceabilitysdetail);
	const { error: errorSolo, loading: loadingSolo, traceinfo } = traces;

	const updatetrace = useSelector((state) => state.traceabilitysupdate);
	const { error, loading, success } = updatetrace;

	useEffect(() => {
		if (success) {
			dispatch({ type: TRACEABILITY_UPDATE_RESET });
		} else {
			if (traceinfo.id !== Number(id)) {
				dispatch(traceabilityActionDetails(id));
			} else {
				setTraceability(traceinfo.traceability);
			}
		}
	}, [dispatch, traceinfo, id, success]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (traceability == " ") {
			setMessage("Existen campos vacios");
		} else {
			dispatch(
				updateTraceabilityAction({
					id: id,
					traceability,
				})
			);
		}
		navigate(path);
		window.location.reload();
	};

	return (
		<div className="container">
			<div className="row">
				<h1 className="text-center"> EDITAR INFORMACION DE LA TRACEABILITY</h1>
			</div>
			<div className="row">
				{loadingSolo && <Loader />}
				{errorSolo && <Messages>{errorSolo}</Messages>}
				{loading ? (
					<Loader />
				) : error ? (
					<Messages>{error}</Messages>
				) : (
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="Inputtrace" className="form-label">
								Traceability
							</label>
							<input
								value={traceability}
								onChange={(e) => setTraceability(e.target.value)}
								type="text"
								className="form-control"
								id="Inputtrace"
								aria-describedby="traceedit"
								placeholder="traceability"
								required
							/>

							<div className="row pt-3">
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</div>
						</div>
					</form>
				)}
				{message && <Messages>{message}</Messages>}
			</div>
		</div>
	);
};

export default TraceabilitysPut;

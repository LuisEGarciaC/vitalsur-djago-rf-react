import axios from "axios";
import {
	ELICAL_LIST_REQUEST,
	ELICAL_LIST_SUCCESS,
	ELICAL_LIST_FAIL,
	ELICAL_CREATE_REQUEST,
	ELICAL_CREATE_SUCCESS,
	ELICAL_CREATE_FAIL,
	ELICAL_DETAILS_REQUEST,
	ELICAL_DETAILS_SUCCESS,
	ELICAL_DETAILS_FAIL,
	ELICAL_UPDATE_REQUEST,
	ELICAL_UPDATE_SUCCESS,
	ELICAL_UPDATE_FAIL,
	ELICAL_DELETE_REQUEST,
	ELICAL_DELETE_SUCCESS,
	ELICAL_DELETE_FAIL,
} from "../types/elicalType";

/*
, getState
*/

/*
	buscamos los fatos con axios y los listamos
*/
export const listelical = () => async (dispatch) => {
	try {
		dispatch({ type: ELICAL_LIST_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.get(
			`http://127.0.0.1:8000/folletos/ecalget/`,
			config
		);

		dispatch({
			type: ELICAL_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ELICAL_LIST_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

/*
 * agregamos y creamos un nuevo elemento
 */

export const createElicalAction =
	(
		referencia,
		quimica,
		value,
		pvalor,
		valor,
		propiedadSg,
		method,
		traceability
	) =>
	async (dispatch, getState) => {
		try {
			dispatch({
				type: ELICAL_CREATE_REQUEST,
			});

			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};

			const { data } = await axios.post(
				`http://127.0.0.1:8000/folletos/ecalpost/`,
				{
					referencia: referencia,
					quimica: quimica,
					value: value,
					pvalor: pvalor,
					valor: valor,
					propiedadSg: propiedadSg,
					method: method,
					traceability: traceability,
				},
				config
			);

			dispatch({
				type: ELICAL_CREATE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: ELICAL_CREATE_FAIL,
				payload:
					error.response && error.response.data.detail
						? error.response.data.detail
						: error.message,
			});
		}
	};

/*
 * buscamos la informacion de un elemento en la tabla
 */

export const elicalActionDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: ELICAL_DETAILS_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.get(
			`http://127.0.0.1:8000/folletos/ecalget/${id}/`,
			config
		);

		dispatch({
			type: ELICAL_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ELICAL_DETAILS_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

/*
 * guardar la informacion
 */

export const updatelicalAction = (elical) => async (dispatch) => {
	try {
		dispatch({
			type: ELICAL_UPDATE_REQUEST,
		});

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.put(
			`http://127.0.0.1:8000/folletos/ecalput/${elical.id}/`,
			elical,
			config
		);

		dispatch({
			type: ELICAL_UPDATE_SUCCESS,
			payload: data,
		});

		dispatch({
			type: ELICAL_DETAILS_REQUEST,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ELICAL_UPDATE_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

/*
 * ELIMINAR
 */

export const deleteElicalAction = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: ELICAL_DELETE_REQUEST,
		});

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.delete(
			`http://127.0.0.1:8000/folletos/ecaldelete/${id}/`,
			config
		);

		dispatch({
			type: ELICAL_DELETE_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: ELICAL_DELETE_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

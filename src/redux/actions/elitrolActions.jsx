import axios from "axios";
import {
	ELITROL_LIST_REQUEST,
	ELITROL_LIST_SUCCESS,
	ELITROL_LIST_FAIL,
	ELITROL_CREATE_REQUEST,
	ELITROL_CREATE_SUCCESS,
	ELITROL_CREATE_FAIL,
	ELITROL_DETAILS_REQUEST,
	ELITROL_DETAILS_SUCCESS,
	ELITROL_DETAILS_FAIL,
	ELITROL_UPDATE_REQUEST,
	ELITROL_UPDATE_SUCCESS,
	ELITROL_UPDATE_FAIL,
	ELITROL_DELETE_REQUEST,
	ELITROL_DELETE_SUCCESS,
	ELITROL_DELETE_FAIL,
} from "../types/elitrolType";

/*
, getState
*/

/*
	buscamos los fatos con axios y los listamos
*/
export const listelitrol = () => async (dispatch) => {
	try {
		dispatch({ type: ELITROL_LIST_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.get(
			`http://127.0.0.1:8000/folletos/eliget/`,
			config
		);

		dispatch({
			type: ELITROL_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ELITROL_LIST_FAIL,
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

export const createElitrolAction =
	(component, method, propidedades, rankmiddle, ranklow, rankhigh) =>
	async (dispatch, getState) => {
		try {
			dispatch({
				type: ELITROL_CREATE_REQUEST,
			});

			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};

			const { data } = await axios.post(
				`http://127.0.0.1:8000/folletos/elipost/`,
				{
					component: component,
					method: method,
					propidedades: propidedades,
					rankmiddle: rankmiddle,
					ranklow: ranklow,
					rankhigh: rankhigh,
				},
				config
			);

			dispatch({
				type: ELITROL_CREATE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: ELITROL_CREATE_FAIL,
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

export const elitrolActionDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: ELITROL_DETAILS_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.get(
			`http://127.0.0.1:8000/folletos/eliget/${id}/`,
			config
		);

		dispatch({
			type: ELITROL_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ELITROL_DETAILS_FAIL,
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

export const updateelitrolAction = (elitrol) => async (dispatch) => {
	try {
		dispatch({
			type: ELITROL_UPDATE_REQUEST,
		});

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.put(
			`http://127.0.0.1:8000/folletos/eliput/${elitrol.id}/`,
			elitrol,
			config
		);

		dispatch({
			type: ELITROL_UPDATE_SUCCESS,
			payload: data,
		});

		dispatch({
			type: ELITROL_DETAILS_REQUEST,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ELITROL_UPDATE_FAIL,
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

export const deleteElitrolAction = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: ELITROL_DELETE_REQUEST,
		});


		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.delete(
			`http://127.0.0.1:8000/folletos/elidelete/${id}/`,
			config
		);

		dispatch({
			type: ELITROL_DELETE_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: ELITROL_DELETE_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};
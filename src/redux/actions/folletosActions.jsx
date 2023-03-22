import axios from "axios";
import {
	FOLLETOS_LIST_REQUEST,
	FOLLETOS_LIST_SUCCESS,
	FOLLETOS_LIST_FAIL,
	FOLLETOS_CREATE_REQUEST,
	FOLLETOS_CREATE_SUCCESS,
	FOLLETOS_CREATE_FAIL,
	FOLLETOS_DETAILS_REQUEST,
	FOLLETOS_DETAILS_SUCCESS,
	FOLLETOS_DETAILS_FAIL,
	FOLLETOS_UPDATE_REQUEST,
	FOLLETOS_UPDATE_SUCCESS,
	FOLLETOS_UPDATE_FAIL,
	FOLLETOS_DELETE_REQUEST,
	FOLLETOS_DELETE_SUCCESS,
	FOLLETOS_DELETE_FAIL,
} from "../types/folletosType";

/*
, getState
*/

/*
	buscamos los fatos con axios y los listamos
*/
export const listfolletos = () => async (dispatch) => {
	try {
		dispatch({ type: FOLLETOS_LIST_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.get(
			`http://127.0.0.1:8000/folletos/get/`,
			config
		);

		dispatch({
			type: FOLLETOS_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: FOLLETOS_LIST_FAIL,
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

export const createFolletoAction =
	(nombre, lote, fecha) => async (dispatch, getState) => {
		try {
			dispatch({
				type: FOLLETOS_CREATE_REQUEST,
			});

			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};

			const { data } = await axios.post(
				`http://127.0.0.1:8000/folletos/post/`,
				{
					nombre: nombre,
					lote: lote,
					fecha: fecha,
				},
				config
			);

			dispatch({
				type: FOLLETOS_CREATE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: FOLLETOS_CREATE_FAIL,
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

export const folletoActionDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: FOLLETOS_DETAILS_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.get(
			`http://127.0.0.1:8000/folletos/get/${id}/`,
			config
		);

		dispatch({
			type: FOLLETOS_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: FOLLETOS_DETAILS_FAIL,
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

export const updateFolletoAction = (folleto) => async (dispatch) => {
	try {
		dispatch({
			type: FOLLETOS_UPDATE_REQUEST,
		});

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.put(
			`http://127.0.0.1:8000/folletos/put/${folleto.id}/`,
			folleto,
			config
		);

		dispatch({
			type: FOLLETOS_UPDATE_SUCCESS,
			payload: data,
		});

		dispatch({
			type: FOLLETOS_DETAILS_REQUEST,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: FOLLETOS_UPDATE_FAIL,
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

export const deleteFolletoAction = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: FOLLETOS_DELETE_REQUEST,
		});


		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.delete(
			`http://127.0.0.1:8000/folletos/delete/${id}/`,
			config
		);

		dispatch({
			type: FOLLETOS_DELETE_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: FOLLETOS_DELETE_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};
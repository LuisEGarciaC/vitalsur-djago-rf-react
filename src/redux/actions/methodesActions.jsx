import axios from "axios";
import {
	METHODES_LIST_REQUEST,
	METHODES_LIST_SUCCESS,
	METHODES_LIST_FAIL,
	METHODES_CREATE_REQUEST,
	METHODES_CREATE_SUCCESS,
	METHODES_CREATE_FAIL,
	METHODES_DETAILS_REQUEST,
	METHODES_DETAILS_SUCCESS,
	METHODES_DETAILS_FAIL,
	METHODES_UPDATE_REQUEST,
	METHODES_UPDATE_SUCCESS,
	METHODES_UPDATE_FAIL,
	METHODES_DELETE_REQUEST,
	METHODES_DELETE_SUCCESS,
	METHODES_DELETE_FAIL,
} from "../types/methodesType";

/*
, getState
*/

/*
	buscamos los fatos con axios y los listamos
*/
export const listMethods = () => async (dispatch, getState) => {
	try {
		dispatch({ type: METHODES_LIST_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(
			`http://127.0.0.1:8000/folletos/mget/`,
			config
		);

		dispatch({
			type: METHODES_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: METHODES_LIST_FAIL,
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

export const createMethodAction = (metodo) => async (dispatch, getState) => {
	try {
		dispatch({
			type: METHODES_CREATE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.post(
			`http://127.0.0.1:8000/folletos/mpost/`,
			{
				metodo: metodo,
			},
			config
		);

		dispatch({
			type: METHODES_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: METHODES_CREATE_FAIL,
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

export const methodActionDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: METHODES_DETAILS_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(
			`http://127.0.0.1:8000/folletos/mget/${id}/`,
			config
		);

		dispatch({
			type: METHODES_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: METHODES_DETAILS_FAIL,
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

export const updateMethodAction = (metodo) => async (dispatch, getState) => {
	try {
		dispatch({
			type: METHODES_UPDATE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(
			`http://127.0.0.1:8000/folletos/mput/${metodo.id}/`,
			metodo,
			config
		);

		dispatch({
			type: METHODES_UPDATE_SUCCESS,
			payload: data,
		});

		dispatch({
			type: METHODES_DETAILS_REQUEST,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: METHODES_UPDATE_FAIL,
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

export const deleteMethodAction = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: METHODES_DELETE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.delete(
			`http://127.0.0.1:8000/folletos/mdelete/${id}/`,
			config
		);

		dispatch({
			type: METHODES_DELETE_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: METHODES_DELETE_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

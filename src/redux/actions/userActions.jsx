import axios from "axios";
import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_EDIT_REQUEST,
	USER_EDIT_SUCCESS,
	USER_EDIT_FAIL,
	USER_SOLO_REQUEST,
	USER_SOLO_SUCCESS,
	USER_SOLO_FAIL,
	USER_SOLO_RESET,
	USER_LIST_REQUEST,
	USER_LIST_FAIL,
	USER_LIST_SUCCESS,
} from "../types/userTypes";

/*
 * LOGIN DE LA PAGINA ACTIONS
 */
export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			"http://localhost:8000/user/login/",
			{ email: email, password: password },
			config
		);

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

/*
 * salir de la aplicacion
 */
export const logout = () => (disptach) => {
	localStorage.removeItem("userInfo");
	disptach({ type: USER_LOGOUT });
};

/*
 * reistro de usuarioas
 */
export const register = (user_name, email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_REGISTER_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			"http://localhost:8000/user/register/",
			{ user_name: user_name, email: email, password: password },
			config
		);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

// EDITAR USUARIO
export const editUser = (user) => async (dispatch, getState) => {
	try {
		dispatch({ type: USER_EDIT_REQUEST });
		dispatch({ type: USER_SOLO_RESET });

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
			"http://127.0.0.1:8000/user/put/",
			user,
			config
		);

		dispatch({
			type: USER_EDIT_SUCCESS,
			payload: data,
		});

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_EDIT_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const getSoloUser = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: USER_SOLO_REQUEST });

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
			`http://127.0.0.1:8000/user/${id}/`,
			config
		);

		dispatch({
			type: USER_SOLO_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_SOLO_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

/*
	* get users list
*/

export const getListUsers = () => async (dispatch, getState) => {
	try {
		dispatch({ type: USER_LIST_REQUEST });

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
			`http://localhost:8000/user/getUsers/`,
			config
		);

		dispatch({
			type: USER_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_LIST_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};
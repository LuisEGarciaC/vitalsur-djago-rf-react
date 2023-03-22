import axios from "axios";
import {
	QUIMICAS_LIST_REQUEST,
	QUIMICAS_LIST_SUCCESS,
	QUIMICAS_LIST_FAIL,
	QUIMICAS_CREATE_REQUEST,
	QUIMICAS_CREATE_SUCCESS,
	QUIMICAS_CREATE_FAIL,
	QUIMICAS_DETAILS_REQUEST,
	QUIMICAS_DETAILS_SUCCESS,
	QUIMICAS_DETAILS_FAIL,
	QUIMICAS_UPDATE_REQUEST,
	QUIMICAS_UPDATE_SUCCESS,
	QUIMICAS_UPDATE_FAIL,
	QUIMICAS_DELETE_REQUEST,
	QUIMICAS_DELETE_SUCCESS,
	QUIMICAS_DELETE_FAIL,
} from "../types/quimicasType";

/*
, getState
*/

/*
	buscamos los fatos con axios y los listamos
*/
export const listquimicas = () => async (dispatch, getState) => {
	try {
		dispatch({ type: QUIMICAS_LIST_REQUEST });

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
			`http://127.0.0.1:8000/folletos/qget/`,
			config
		);

		dispatch({
			type: QUIMICAS_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: QUIMICAS_LIST_FAIL,
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

export const createQuimicaAction =
	(nombre_quimica) => async (dispatch, getState) => {
		try {
			dispatch({
				type: QUIMICAS_CREATE_REQUEST,
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
				`http://127.0.0.1:8000/folletos/qpost/`,
				{
					nombre_quimica: nombre_quimica,
				},
				config
			);

			dispatch({
				type: QUIMICAS_CREATE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: QUIMICAS_CREATE_FAIL,
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

export const quimicaActionDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: QUIMICAS_DETAILS_REQUEST });

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
			`http://127.0.0.1:8000/folletos/qget/${id}/`,
			config
		);

		dispatch({
			type: QUIMICAS_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: QUIMICAS_DETAILS_FAIL,
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

export const updateQuimicaAction = (quimica) => async (dispatch, getState) => {
    try {
        dispatch({
            type: QUIMICAS_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
					`http://127.0.0.1:8000/folletos/qput/${quimica.id}/`,
					quimica,
					config
				);

        dispatch({
            type: QUIMICAS_UPDATE_SUCCESS,
            payload: data,
        })

        dispatch({
            type:QUIMICAS_DETAILS_REQUEST,
            payload: data
        })

    } catch (error) {
        dispatch({
					type: QUIMICAS_UPDATE_FAIL,
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

export const deleteQuimicaAction = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: QUIMICAS_DELETE_REQUEST,
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
			`http://127.0.0.1:8000/folletos/qdelete/${id}/`,
			config
		);

		dispatch({
			type: QUIMICAS_DELETE_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: QUIMICAS_DELETE_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

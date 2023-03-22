import axios from "axios";
import {
	TRACEABILITY_LIST_REQUEST,
	TRACEABILITY_LIST_SUCCESS,
	TRACEABILITY_LIST_FAIL,
	TRACEABILITY_CREATE_REQUEST,
	TRACEABILITY_CREATE_SUCCESS,
	TRACEABILITY_CREATE_FAIL,
	TRACEABILITY_DETAILS_REQUEST,
	TRACEABILITY_DETAILS_SUCCESS,
	TRACEABILITY_DETAILS_FAIL,
	TRACEABILITY_UPDATE_REQUEST,
	TRACEABILITY_UPDATE_SUCCESS,
	TRACEABILITY_UPDATE_FAIL,
	TRACEABILITY_DELETE_REQUEST,
	TRACEABILITY_DELETE_SUCCESS,
	TRACEABILITY_DELETE_FAIL,
} from "../types/traceabilityType";

/*
, getState
*/

/*
	buscamos los fatos con axios y los listamos
*/
export const listTraceabilitys = () => async (dispatch, getState) => {
	try {
		dispatch({ type: TRACEABILITY_LIST_REQUEST });

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
			`http://127.0.0.1:8000/folletos/tget/`,
			config
		);

		dispatch({
			type: TRACEABILITY_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: TRACEABILITY_LIST_FAIL,
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

export const createTraceabilityAction = (traceability) => async (dispatch, getState) => {
	try {
		dispatch({
			type: TRACEABILITY_CREATE_REQUEST,
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
			`http://127.0.0.1:8000/folletos/tpost/`,
			{
				traceability: traceability,
			},
			config
		);

		dispatch({
			type: TRACEABILITY_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: TRACEABILITY_CREATE_FAIL,
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

export const traceabilityActionDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: TRACEABILITY_DETAILS_REQUEST });

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
			`http://127.0.0.1:8000/folletos/tget/${id}/`,
			config
		);

		dispatch({
			type: TRACEABILITY_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: TRACEABILITY_DETAILS_FAIL,
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

export const updateTraceabilityAction = (traceability) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TRACEABILITY_UPDATE_REQUEST
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
					`http://127.0.0.1:8000/folletos/tput/${traceability.id}/`,
					traceability,
					config
				);

        dispatch({
            type: TRACEABILITY_UPDATE_SUCCESS,
            payload: data,
        })

        dispatch({
            type:TRACEABILITY_DETAILS_REQUEST,
            payload: data
        })

    } catch (error) {
        dispatch({
					type: TRACEABILITY_UPDATE_FAIL,
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

export const deleteTraceabilityAction = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: TRACEABILITY_DELETE_REQUEST,
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
			`http://127.0.0.1:8000/folletos/tdelete/${id}/`,
			config
		);

		dispatch({
			type: TRACEABILITY_DELETE_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: TRACEABILITY_DELETE_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

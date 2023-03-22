import axios from "axios";
import {
	UNITS_LIST_REQUEST,
	UNITS_LIST_SUCCESS,
	UNITS_LIST_FAIL,
	UNITS_CREATE_REQUEST,
	UNITS_CREATE_SUCCESS,
	UNITS_CREATE_FAIL,
	UNITS_DETAILS_REQUEST,
	UNITS_DETAILS_SUCCESS,
	UNITS_DETAILS_FAIL,
	UNITS_UPDATE_REQUEST,
	UNITS_UPDATE_SUCCESS,
	UNITS_UPDATE_FAIL,
	UNITS_DELETE_REQUEST,
	UNITS_DELETE_SUCCESS,
	UNITS_DELETE_FAIL,
} from "../types/unitsType";

/*
, getState
*/

/*
	buscamos los fatos con axios y los listamos
*/
export const listUnits = () => async (dispatch, getState) => {
	try {
		dispatch({ type: UNITS_LIST_REQUEST });

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
			`http://127.0.0.1:8000/folletos/uget/`,
			config
		);

		dispatch({
			type: UNITS_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: UNITS_LIST_FAIL,
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

export const createUnitAction =
	(nombre) => async (dispatch, getState) => {
		try {
			dispatch({
				type: UNITS_CREATE_REQUEST,
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
				`http://127.0.0.1:8000/folletos/upost/`,
				{
					nombre: nombre,
				},
				config
			);

			dispatch({
				type: UNITS_CREATE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: UNITS_CREATE_FAIL,
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

export const unitActionDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: UNITS_DETAILS_REQUEST });

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
			`http://127.0.0.1:8000/folletos/uget/${id}/`,
			config
		);

		dispatch({
			type: UNITS_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: UNITS_DETAILS_FAIL,
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

export const updateUnitAction = (unit) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UNITS_UPDATE_REQUEST
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
					`http://127.0.0.1:8000/folletos/uput/${unit.id}/`,
					unit,
					config
				);

        dispatch({
            type: UNITS_UPDATE_SUCCESS,
            payload: data,
        })

        dispatch({
            type:UNITS_DETAILS_REQUEST,
            payload: data
        })

    } catch (error) {
        dispatch({
					type: UNITS_UPDATE_FAIL,
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

export const deleteunitAction = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: UNITS_DELETE_REQUEST,
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
			`http://127.0.0.1:8000/folletos/udelete/${id}/`,
			config
		);

		dispatch({
			type: UNITS_DELETE_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: UNITS_DELETE_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

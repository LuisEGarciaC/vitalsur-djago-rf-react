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
	UNITS_UPDATE_RESET,
	UNITS_DELETE_REQUEST,
	UNITS_DELETE_SUCCESS,
	UNITS_DELETE_FAIL,
} from "../types/unitsType";

// * listar todos los unidaddes quimicas
export const unitListReducer = (state = { unitsinfo: [] }, action) => {
	switch (action.type) {
		case UNITS_LIST_REQUEST:
			return { loading: true, unitsinfo: [] };

		case UNITS_LIST_SUCCESS:
			return { loading: false, unitsinfo: action.payload };

		case UNITS_LIST_FAIL:
			return { loading: false, unitsinfo: action.payload };

		default:
			return state;
	}
};

// * crear o agregar por primera vez
export const unitsCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case UNITS_CREATE_REQUEST:
			return { loading: true };

		case UNITS_CREATE_SUCCESS:
			return { loading: false, success: true, createinfo: action.payload };

		case UNITS_CREATE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// * traer los detalles de un solo elemento
export const unitDetailsReducer = (state = { unitinfo: [] }, action) => {
	switch (action.type) {
		case UNITS_DETAILS_REQUEST:
			return { loading: true, ...state };

		case UNITS_DETAILS_SUCCESS:
			return { loading: false, unitinfo: action.payload };

		case UNITS_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// * guardar la informacion

export const unitUpdateReducer = (state = { infounit: {} }, action) => {
	switch (action.type) {
		case UNITS_UPDATE_REQUEST:
			return { loading: true };

		case UNITS_UPDATE_SUCCESS:
			return { loading: false, success: true, infounit: action.payload };

		case UNITS_UPDATE_FAIL:
			return { loading: false, error: action.payload };

		case UNITS_UPDATE_RESET:
			return { infounit: {} };

		default:
			return state;
	}
};

/*
 * eliminar
 */

export const unitDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case UNITS_DELETE_REQUEST:
			return { loading: true };

		case UNITS_DELETE_SUCCESS:
			return { loading: false, success: true };

		case UNITS_DELETE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

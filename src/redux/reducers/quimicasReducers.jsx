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
	QUIMICAS_UPDATE_RESET,
	QUIMICAS_DELETE_REQUEST,
	QUIMICAS_DELETE_SUCCESS,
	QUIMICAS_DELETE_FAIL,
} from "../types/quimicasType";

// * listar todos los folletos
export const quimicaListReducer = (state = { quimicasinfo: [] }, action) => {
	switch (action.type) {
		case QUIMICAS_LIST_REQUEST:
			return { loading: true, quimicasinfo: [] };

		case QUIMICAS_LIST_SUCCESS:
			return { loading: false, quimicasinfo: action.payload };

		case QUIMICAS_LIST_FAIL:
			return { loading: false, quimicasinfo: action.payload };

		default:
			return state;
	}
};

// * crear o agregar por primera vez
export const quimicasCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case QUIMICAS_CREATE_REQUEST:
			return { loading: true };

		case QUIMICAS_CREATE_SUCCESS:
			return { loading: false, success: true, createinfo: action.payload };

		case QUIMICAS_CREATE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// * traer los detalles de un solo elemento
export const quimicaDetailsReducer = (state = { quimicainfo: [] }, action) => {
	switch (action.type) {
		case QUIMICAS_DETAILS_REQUEST:
			return { loading: true, ...state };

		case QUIMICAS_DETAILS_SUCCESS:
			return { loading: false, quimicainfo: action.payload };

		case QUIMICAS_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// * guardar la informacion

export const quimicaUpdateReducer = (state = { infoquimica: {} }, action) => {
	switch (action.type) {
		case QUIMICAS_UPDATE_REQUEST:
			return { loading: true };

		case QUIMICAS_UPDATE_SUCCESS:
			return { loading: false, success: true, infoquimica: action.payload };

		case QUIMICAS_UPDATE_FAIL:
			return { loading: false, error: action.payload };

		case QUIMICAS_UPDATE_RESET:
			return { infoquimica: {} };

		default:
			return state;
	}
};

/*
 * eliminar
 */

export const quimicaDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case QUIMICAS_DELETE_REQUEST:
			return { loading: true };

		case QUIMICAS_DELETE_SUCCESS:
			return { loading: false, success: true };

		case QUIMICAS_DELETE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

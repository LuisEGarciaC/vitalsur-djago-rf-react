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
	METHODES_UPDATE_RESET,
	METHODES_DELETE_REQUEST,
	METHODES_DELETE_SUCCESS,
	METHODES_DELETE_FAIL,
} from "../types/methodesType";

// * listar todos los unidaddes quimicas
export const methodListReducer = (state = { methodesinfo: [] }, action) => {
	switch (action.type) {
		case METHODES_LIST_REQUEST:
			return { loading: true, methodesinfo: [] };

		case METHODES_LIST_SUCCESS:
			return { loading: false, methodesinfo: action.payload };

		case METHODES_LIST_FAIL:
			return { loading: false, methodesinfo: action.payload };

		default:
			return state;
	}
};

// * crear o agregar por primera vez
export const methodsCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case METHODES_CREATE_REQUEST:
			return { loading: true };

		case METHODES_CREATE_SUCCESS:
			return { loading: false, success: true, createinfo: action.payload };

		case METHODES_CREATE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// * traer los detalles de un solo elemento
export const methodDetailsReducer = (state = { methodinfo: [] }, action) => {
	switch (action.type) {
		case METHODES_DETAILS_REQUEST:
			return { loading: true, ...state };

		case METHODES_DETAILS_SUCCESS:
			return { loading: false, methodinfo: action.payload };

		case METHODES_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// * guardar la informacion

export const methodUpdateReducer = (state = { infomethode: {} }, action) => {
	switch (action.type) {
		case METHODES_UPDATE_REQUEST:
			return { loading: true };

		case METHODES_UPDATE_SUCCESS:
			return { loading: false, success: true, infomethode: action.payload };

		case METHODES_UPDATE_FAIL:
			return { loading: false, error: action.payload };

		case METHODES_UPDATE_RESET:
			return { infomethode: {} };

		default:
			return state;
	}
};

/*
 * eliminar
 */

export const methodDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case METHODES_DELETE_REQUEST:
			return { loading: true };

		case METHODES_DELETE_SUCCESS:
			return { loading: false, success: true };

		case METHODES_DELETE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

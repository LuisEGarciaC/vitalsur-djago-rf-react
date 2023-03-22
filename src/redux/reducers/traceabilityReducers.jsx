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
	TRACEABILITY_UPDATE_RESET,
	TRACEABILITY_DELETE_REQUEST,
	TRACEABILITY_DELETE_SUCCESS,
	TRACEABILITY_DELETE_FAIL,
} from "../types/traceabilityType";

// * listar todos los unidaddes quimicas
export const traceabilityListReducer = (state = { tracesinfo: [] }, action) => {
	switch (action.type) {
		case TRACEABILITY_LIST_REQUEST:
			return { loading: true, tracesinfo: [] };

		case TRACEABILITY_LIST_SUCCESS:
			return { loading: false, tracesinfo: action.payload };

		case TRACEABILITY_LIST_FAIL:
			return { loading: false, tracesinfo: action.payload };

		default:
			return state;
	}
};

// * crear o agregar por primera vez
export const traceabilitysCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case TRACEABILITY_CREATE_REQUEST:
			return { loading: true };

		case TRACEABILITY_CREATE_SUCCESS:
			return { loading: false, success: true, createinfo: action.payload };

		case TRACEABILITY_CREATE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// * traer los detalles de un solo elemento
export const traceabilityDetailsReducer = (state = { traceinfo: [] }, action) => {
	switch (action.type) {
		case TRACEABILITY_DETAILS_REQUEST:
			return { loading: true, ...state };

		case TRACEABILITY_DETAILS_SUCCESS:
			return { loading: false, traceinfo: action.payload };

		case TRACEABILITY_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// * guardar la informacion

export const traceabilityUpdateReducer = (state = { infotrace: {} }, action) => {
	switch (action.type) {
		case TRACEABILITY_UPDATE_REQUEST:
			return { loading: true };

		case TRACEABILITY_UPDATE_SUCCESS:
			return { loading: false, success: true, infotrace: action.payload };

		case TRACEABILITY_UPDATE_FAIL:
			return { loading: false, error: action.payload };

		case TRACEABILITY_UPDATE_RESET:
			return { infotrace: {} };

		default:
			return state;
	}
};

/*
 * eliminar
 */

export const traceabilityDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case TRACEABILITY_DELETE_REQUEST:
			return { loading: true };

		case TRACEABILITY_DELETE_SUCCESS:
			return { loading: false, success: true };

		case TRACEABILITY_DELETE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

import {
	ELICAL_LIST_REQUEST,
	ELICAL_LIST_SUCCESS,
	ELICAL_LIST_FAIL,
	ELICAL_CREATE_REQUEST,
	ELICAL_CREATE_SUCCESS,
	ELICAL_CREATE_FAIL,
	ELICAL_DETAILS_REQUEST,
	ELICAL_DETAILS_SUCCESS,
	ELICAL_DETAILS_FAIL,
	ELICAL_UPDATE_REQUEST,
	ELICAL_UPDATE_SUCCESS,
	ELICAL_UPDATE_FAIL,
	ELICAL_UPDATE_RESET,
	ELICAL_DELETE_REQUEST,
	ELICAL_DELETE_SUCCESS,
	ELICAL_DELETE_FAIL,
} from "../types/elicalType";

/*
 *  GET FULL INFORMACION
 */

export const elicalListReducer = (state = { elicalinfo: [] }, action) => {
	switch (action.type) {
		case ELICAL_LIST_REQUEST:
			return { loading: true, elicalinfo: [] };

		case ELICAL_LIST_SUCCESS:
			return { loading: false, elicalinfo: action.payload };

		case ELICAL_LIST_FAIL:
			return { loading: false, elicalinfo: action.payload };

		default:
			return state;
	}
};


// * crear o agregar por primera vez
export const elicalCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case ELICAL_CREATE_REQUEST:
			return { loading: true };

		case ELICAL_CREATE_SUCCESS:
			return { loading: false, success: true, createinfo: action.payload };

		case ELICAL_CREATE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// * traer los detalles de un solo elemento
export const elicalDetailsReducer = (state = { elicalinfo: [] }, action) => {
	switch (action.type) {
		case ELICAL_DETAILS_REQUEST:
			return { loading: true, ...state };

		case ELICAL_DETAILS_SUCCESS:
			return { loading: false, elicalinfo: action.payload };

		case ELICAL_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};


// * guardar la informacion

export const elicalUpdateReducer = (state = { infoelical: {} }, action) => {
	switch (action.type) {
		case ELICAL_UPDATE_REQUEST:
			return { loading: true };

		case ELICAL_UPDATE_SUCCESS:
			return { loading: false, success: true, infoelical: action.payload };

		case ELICAL_UPDATE_FAIL:
			return { loading: false, error: action.payload };

		case ELICAL_UPDATE_RESET:
			return { infoelical: {} };

		default:
			return state;
	}
};


/*
	* eliminar
*/

export const elicalDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case ELICAL_DELETE_REQUEST:
			return { loading: true };

		case ELICAL_DELETE_SUCCESS:
			return { loading: false, success: true };

		case ELICAL_DELETE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
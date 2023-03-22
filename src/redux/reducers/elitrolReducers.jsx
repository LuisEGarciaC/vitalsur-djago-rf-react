import {
	ELITROL_LIST_REQUEST,
	ELITROL_LIST_SUCCESS,
	ELITROL_LIST_FAIL,
	ELITROL_CREATE_REQUEST,
	ELITROL_CREATE_SUCCESS,
	ELITROL_CREATE_FAIL,
	ELITROL_DETAILS_REQUEST,
	ELITROL_DETAILS_SUCCESS,
	ELITROL_DETAILS_FAIL,
	ELITROL_UPDATE_REQUEST,
	ELITROL_UPDATE_SUCCESS,
	ELITROL_UPDATE_FAIL,
	ELITROL_UPDATE_RESET,
	ELITROL_DELETE_REQUEST,
	ELITROL_DELETE_SUCCESS,
	ELITROL_DELETE_FAIL,
} from "../types/elitrolType";

/*
 *  GET FULL INFORMACION
 */

export const elitrolListReducer = (state = { elitrolinfo: [] }, action) => {
	switch (action.type) {
		case ELITROL_LIST_REQUEST:
			return { loading: true, elitrolinfo: [] };

		case ELITROL_LIST_SUCCESS:
			return { loading: false, elitrolinfo: action.payload };

		case ELITROL_LIST_FAIL:
			return { loading: false, elitrolinfo: action.payload };

		default:
			return state;
	}
};


// * crear o agregar por primera vez
export const elitrolCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case ELITROL_CREATE_REQUEST:
			return { loading: true };

		case ELITROL_CREATE_SUCCESS:
			return { loading: false, success: true, createinfo: action.payload };

		case ELITROL_CREATE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// * traer los detalles de un solo elemento
export const elitrolDetailsReducer = (state = { elitrolinfo: [] }, action) => {
	switch (action.type) {
		case ELITROL_DETAILS_REQUEST:
			return { loading: true, ...state };

		case ELITROL_DETAILS_SUCCESS:
			return { loading: false, elitrolinfo: action.payload };

		case ELITROL_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};


// * guardar la informacion

export const elitrolUpdateReducer = (state = { infoelitrol: {} }, action) => {
	switch (action.type) {
		case ELITROL_UPDATE_REQUEST:
			return { loading: true };

		case ELITROL_UPDATE_SUCCESS:
			return { loading: false, success: true, infoelitrol: action.payload };

		case ELITROL_UPDATE_FAIL:
			return { loading: false, error: action.payload };

		case ELITROL_UPDATE_RESET:
			return { infoelitrol: {} };

		default:
			return state;
	}
};


/*
	* eliminar
*/

export const elitrolDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case ELITROL_DELETE_REQUEST:
			return { loading: true };

		case ELITROL_DELETE_SUCCESS:
			return { loading: false, success: true };

		case ELITROL_DELETE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
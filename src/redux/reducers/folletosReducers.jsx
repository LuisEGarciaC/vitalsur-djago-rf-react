import {
	FOLLETOS_LIST_REQUEST,
	FOLLETOS_LIST_SUCCESS,
	FOLLETOS_LIST_FAIL,
	FOLLETOS_CREATE_REQUEST,
	FOLLETOS_CREATE_SUCCESS,
	FOLLETOS_CREATE_FAIL,
	FOLLETOS_DETAILS_REQUEST,
	FOLLETOS_DETAILS_SUCCESS,
	FOLLETOS_DETAILS_FAIL,
	FOLLETOS_UPDATE_REQUEST,
	FOLLETOS_UPDATE_SUCCESS,
	FOLLETOS_UPDATE_FAIL,
	FOLLETOS_UPDATE_RESET,
	FOLLETOS_DELETE_REQUEST,
	FOLLETOS_DELETE_SUCCESS,
	FOLLETOS_DELETE_FAIL,
} from "../types/folletosType";


// * listar todos los folletos
export const folletoListReducer = (state = { folletosinfo: [] }, action) => {
	switch (action.type) {
		case FOLLETOS_LIST_REQUEST:
			return { loading: true, folletosinfo: [] };

		case FOLLETOS_LIST_SUCCESS:
			return { loading: false, folletosinfo: action.payload };

		case FOLLETOS_LIST_FAIL:
			return { loading: false, folletosinfo: action.payload };

		default:
			return state;
	}
};

// * crear o agregar por primera vez
export const folletosCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case FOLLETOS_CREATE_REQUEST:
			return { loading: true };

		case FOLLETOS_CREATE_SUCCESS:
			return { loading: false, success: true, createinfo: action.payload };

		case FOLLETOS_CREATE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

// * traer los detalles de un solo elemento
export const folletoDetailsReducer = (state = { folletoinfo: [] }, action) => {
	switch (action.type) {
		case FOLLETOS_DETAILS_REQUEST:
			return { loading: true, ...state };

		case FOLLETOS_DETAILS_SUCCESS:
			return { loading: false, folletoinfo: action.payload };

		case FOLLETOS_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};


// * guardar la informacion

export const folletoUpdateReducer = (state = { infofolleto: {} }, action) => {
	switch (action.type) {
		case FOLLETOS_UPDATE_REQUEST:
			return { loading: true };

		case FOLLETOS_UPDATE_SUCCESS:
			return { loading: false, success: true, infofolleto: action.payload };

		case FOLLETOS_UPDATE_FAIL:
			return { loading: false, error: action.payload };

		case FOLLETOS_UPDATE_RESET:
			return { infofolleto: {} };

		default:
			return state;
	}
};


/*
	* eliminar
*/

export const folletoDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case FOLLETOS_DELETE_REQUEST:
			return { loading: true };

		case FOLLETOS_DELETE_SUCCESS:
			return { loading: false, success: true };

		case FOLLETOS_DELETE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
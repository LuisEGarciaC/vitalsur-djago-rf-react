import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

/*
	importacion de reducers USERS
*/
import {
	userEditReducer,
	userLoginReducer,
	userRegisterReducer,
	usersListReducer,
	userSoloReducer,
} from "../reducers/userReducers";

/*
	importacion de reducers FOLLETO
*/
import {
	folletoDeleteReducer,
	folletoDetailsReducer,
	folletoListReducer,
	folletosCreateReducer,
	folletoUpdateReducer,
} from "../reducers/folletosReducers";

/*
	importacion de reducers QUIMICAS
*/

import {
	quimicaDeleteReducer,
	quimicaDetailsReducer,
	quimicaListReducer,
	quimicasCreateReducer,
	quimicaUpdateReducer,
} from "../reducers/quimicasReducers";
/*
	importacion de reducers UNITS
*/
import {
	unitListReducer,
	unitsCreateReducer,
	unitDetailsReducer,
	unitUpdateReducer,
	unitDeleteReducer,
} from "../reducers/unitsReducers";
/*
	importacion de reducers Treceability
*/
import {
	traceabilityListReducer,
	traceabilitysCreateReducer,
	traceabilityDetailsReducer,
	traceabilityUpdateReducer,
	traceabilityDeleteReducer,
} from "../reducers/traceabilityReducers";

/*
	importacion de reducers methodes
*/
import {
	methodListReducer,
	methodsCreateReducer,
	methodDetailsReducer,
	methodUpdateReducer,
	methodDeleteReducer,
} from "../reducers/methodesReducers";

/*
	importacion de reducers informacion de folletos Elitro
*/
import {
	elitrolListReducer,
	elitrolCreateReducer,
	elitrolDeleteReducer,
	elitrolDetailsReducer,
	elitrolUpdateReducer,
} from "../reducers/elitrolReducers";

/*
	importacion de reducers informacion de folletos Elitrol
*/
import {
	elicalCreateReducer,
	elicalDeleteReducer,
	elicalDetailsReducer,
	elicalListReducer,
	elicalUpdateReducer,
} from "../reducers/ElicalReducers";

const reducer = combineReducers({
	// User stuff
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userSolo: userSoloReducer,
	userEdit: userEditReducer,
	UserList: usersListReducer,

	//folletos
	folletosList: folletoListReducer,
	folletoscreate: folletosCreateReducer,
	folletosdetail: folletoDetailsReducer,
	folletosupdate: folletoUpdateReducer,
	folletodelete: folletoDeleteReducer,

	// quimicas
	quimicasList: quimicaListReducer,
	quimicascreate: quimicasCreateReducer,
	quimicasdetail: quimicaDetailsReducer,
	quimicasupdate: quimicaUpdateReducer,
	quimicadelete: quimicaDeleteReducer,

	// units
	unitsList: unitListReducer,
	unitscreate: unitsCreateReducer,
	unitsdetail: unitDetailsReducer,
	unitsupdate: unitUpdateReducer,
	unitdelete: unitDeleteReducer,

	// traceabilitys
	traceabilitysList: traceabilityListReducer,
	traceabilityscreate: traceabilitysCreateReducer,
	traceabilitysdetail: traceabilityDetailsReducer,
	traceabilitysupdate: traceabilityUpdateReducer,
	traceabilitydelete: traceabilityDeleteReducer,

	// methods
	methodsList: methodListReducer,
	methodscreate: methodsCreateReducer,
	methodsdetail: methodDetailsReducer,
	methodsupdate: methodUpdateReducer,
	methoddelete: methodDeleteReducer,

	// elitrol
	elitrolList: elitrolListReducer,
	elitrolcreate: elitrolCreateReducer,
	elitroldetail: elitrolDetailsReducer,
	elitrolupdate: elitrolUpdateReducer,
	elitroldelete: elitrolDeleteReducer,

	// elitrol
	elicalList2: elicalListReducer,
	elicalcreate: elicalCreateReducer,
	elicaldetail: elicalDetailsReducer,
	elicalupdate: elicalUpdateReducer,
	elicaldelete: elicalDeleteReducer,
});

const userInfoStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoStorage },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

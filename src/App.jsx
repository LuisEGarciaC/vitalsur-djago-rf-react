import React from "react";
// imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

//componentes
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

//pages
import Folletos from "./components/pages/Folletos";
import FolletosAdd from "./components/pages/FolletosAdd";
import FolletosPut from "./components/pages/FolletosPut";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Userperfil from "./components/pages/Userperfil";
import UsersList from "./components/pages/UsersList";
import Quimicas from "./components/pages/Quimicas";
import QuimicasAdd from "./components/pages/QuimicasAdd";
import Quimicasput from "./components/pages/Quimicasput";
import Units from "./components/pages/Units";
import UnitsAdd from "./components/pages/UnitsAdd";
import UnitsPut from "./components/pages/Unitsput";
import Methodes from "./components/pages/Methodes";
import MethodsAdd from "./components/pages/MethodesAdd";
import MethodsPut from "./components/pages/Methodesput";
import Traceabilitys from "./components/pages/Traceabilitys";
import TraceabilitysAdd from "./components/pages/TraceabilitysAdd";
import TraceabilitysPut from "./components/pages/Traceabilitysput";
import ElitrolFolleto from "./components/pages/ElitrolFolleto";
import ElitrolAdd from "./components/pages/ElitrolAdd";
import ElitrolPut from "./components/pages/ElitrolPut";
import ElicalFolleto from "./components/pages/ElicalFolleto";
import ElicalAdd from "./components/pages/ElicalAdd";
import ElicalPut from "./components/pages/ElicalPut";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/folletos" element={<Folletos />} />
					<Route path="/folletos/create/" element={<FolletosAdd />} />
					<Route path="/folletos/put/:id" element={<FolletosPut />} />
					<Route path="/quimicasl" element={<Quimicas />} />
					<Route path="/quimicasl/create/" element={<QuimicasAdd />} />
					<Route path="/quimicasl/put/:id" element={<Quimicasput />} />
					<Route path="/units" element={<Units />} />
					<Route path="/units/create/" element={<UnitsAdd />} />
					<Route path="/units/put/:id" element={<UnitsPut />} />
					<Route path="/methods" element={<Methodes />} />
					<Route path="/methods/create/" element={<MethodsAdd />} />

					<Route path="/methods/put/:id" element={<MethodsPut />} />
					<Route path="/trace" element={<Traceabilitys />} />
					<Route path="/trace/create/" element={<TraceabilitysAdd />} />
					<Route path="/traces/put/:id" element={<TraceabilitysPut />} />

					<Route path="/elitrol" element={<ElitrolFolleto />} />
					<Route path="/elitrol/create/" element={<ElitrolAdd />} />
					<Route path="/elitrol/put/:id" element={<ElitrolPut />} />

					<Route path="/elical" element={<ElicalFolleto />} />
					<Route path="/elical/create/" element={<ElicalAdd />} />
					<Route path="/elical/put/:id" element={<ElicalPut />} />

					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/perfil" element={<Userperfil />} />
					<Route path="/users" element={<UsersList />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</Provider>
	);
}

export default App;

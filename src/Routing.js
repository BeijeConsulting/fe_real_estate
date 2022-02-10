import * as RoutingBO from "./backoffice/RoutingBO";

import { Route, Routes } from "react-router-dom";

import Homepage from "./frontend/screens/Homepage";
import NotFound from "./common/screens/NotFound";
import { Provider } from "react-redux";
import React from "react";
import applicationStore from "./applicationStore";

const Routing = () => (
	<Provider store={applicationStore}>
		<Routes>
			{/* FRONTEND */}
			<Route path="" element={<Homepage />} />
			{/* BACKOFFICE */}
			<Route path="admin-login" element={<RoutingBO.Login />} />
			<Route path="admin" element={<RoutingBO.AsideBar />}>
				<Route index element={<RoutingBO.DashBoard />} />
				<Route path="users" element={<RoutingBO.User />} />
				<Route path="user/:id" element={<RoutingBO.User />} />
				<Route
					path="advertisements"
					element={<RoutingBO.User />}
				/>
				<Route
					path="advertisement/:id"
					element={<RoutingBO.User />}
				/>
				<Route
					path="dashBoard"
					element={<RoutingBO.DashBoard />}
				/>
				<Route path="profile" element={<RoutingBO.User />} />
				<Route
					path="collaborators"
					element={<RoutingBO.User />}
				/>
				<Route
					path="collaborator/:id"
					element={<RoutingBO.User />}
				/>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	</Provider>
);

export default Routing;

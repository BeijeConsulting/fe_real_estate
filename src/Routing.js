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

			<Route path=":advType/:buildingType/:city" element={null} /> 
			<Route path="building/:buildingId" element={null} />

			<Route path="about-us" element={null} />
			<Route path="what-we-offer" element={null}>
				<Route path="assess-building" element={null} />
			</Route>

			<Route path="auth">
				<Route path="login" element={null} />
				<Route path="signup" element={null} />
				<Route path="forgotpsw" element={null} />
			</Route>

			<Route path="user">
				<Route path="profile" element={null} />
				<Route path="post-ad" element={null} />
				<Route path="saved-ads" element={null} />
			</Route>

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

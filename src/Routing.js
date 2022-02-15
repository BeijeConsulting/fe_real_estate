import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";

// REDUX
import { Provider } from "react-redux";
import applicationStore from "./applicationStore";

import * as RoutingBO from "./backoffice/RoutingBO";

// FRONTEND SCREENS
import Home from "./frontend/screens/Home/Home";
import Login from './frontend/screens/Auth/Login'
import Signup from './frontend/screens/Auth/Signup'
import ForgotPsw from './frontend/screens/Auth/ForgotPsw'
import AboutUs from "./frontend/screens/Home/AboutUs";
import WhatWeOffer from './frontend/screens/Home/WhatWeOffer'
import AssessBuilding from "./frontend/screens/Home/AssessBuilding";
import User from "./frontend/screens/User/User";
import EditProfile from "./frontend/screens/User/EditProfile";
import PostAdvs from "./frontend/screens/User/PostAdvs";
import SaveAdvs from "./frontend/screens/User/SaveAdvs";
import Dashboard from "./frontend/screens/User/Dashboard";

// BACKOFFICE SCREENS
// here

// COMMON
import NotFound from "./common/screens/NotFound";



const Routing = () => (
	<Provider store={applicationStore}>
		<Routes>
			{/* FRONTEND */}
			<Route path="" >
				<Route path="" element={<Home />} />
				<Route path="about-us" element={<AboutUs />} />
				<Route path="what-we-offer" element={<WhatWeOffer />} />
				<Route path="assess-building" element={<AssessBuilding />} />
			</Route>

			<Route path=":advType/:buildingType/:city" element={null} />
			<Route path="building/:buildingId" element={null} />

			<Route path="auth">
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="forgotpsw" element={<ForgotPsw />} />
			</Route>

			<Route path="user" element={<User />}>
				<Route path="" element={<Dashboard />} />
				<Route path="edit-profile" element={<EditProfile />} />
				<Route path="post-advs" element={<PostAdvs />} />
				<Route path="save-advs" element={<SaveAdvs />} />
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

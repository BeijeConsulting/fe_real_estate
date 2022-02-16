import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

// FRONTEND SCREENS
import AboutUs from "./frontend/screens/Home/AboutUs";
import AssessBuilding from "./frontend/screens/Home/AssessBuilding";

// BACKOFFICE SCREENS
// here
import Cms from "./backoffice/screens/cms/Cms";

// COMMON
import NotFound from "./common/screens/NotFound";
import UsersList from "./backoffice/screens/UsersList/UsersList";

import Auth from "./frontend/screens/Auth/Auth";
import ForgotPsw from "./frontend/screens/Auth/ForgotPsw";
import Home from "./frontend/screens/Home/Home";
import Login from "./frontend/screens/Auth/Login";
import SignUpPrivate from "./frontend/screens/Auth/SignUp/SignUpPrivate";
import WhatWeOffer from "./frontend/screens/Home/WhatWeOffer";
import SignUpBusiness from "./frontend/screens/Auth/SignUp/SignUpBusiness";
import User from "./frontend/screens/User/User";

// REDUX
import { Provider } from "react-redux";
import applicationStore from "./applicationStore";


// BACKOFFICE SCREENS
import Profile from "./backoffice/screens/profile/Profile";
import Cms from "./backoffice/screens/cms/Cms";
import AdminLogin from "./backoffice/screens/AdminLogin/Admin-login"
import * as RoutingBO from "./backoffice/RoutingBO";

// COMMON
import NotFound from "./common/screens/NotFound";
import UpdateProfile from "./backoffice/screens/profile/UpdateProfile";

import SignUp from "./frontend/screens/Auth/SignUp/SignUp";

const Routing = () => (
	<Provider store={applicationStore}>
		<Routes>
			{/* FRONTEND */}
			<Route path="">
				<Route path="" element={<Home />} />
				<Route path="about-us" element={<AboutUs />} />
				<Route path="what-we-offer" element={<WhatWeOffer />} />
				<Route
					path="assess-building"
					element={<AssessBuilding />}
				/>
			</Route>

			<Route path=":advType/:buildingType/:city" element={null} />
			<Route path="building/:buildingId" element={null} />

			<Route path="auth" element={<Auth />}>
				<Route
					path=""
					// redirect to /auth/login
					element={<Navigate to={"login"} replace={true} />}
				/>
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<SignUp />}>
					<Route
						path=""
						// redirect to /auth/signup/private
						element={
							<Navigate
								to={"private"}
								replace={true}
							/>
						}
					/>
					<Route
						path="private"
						element={<SignUpPrivate />}
					/>
					<Route
						path="business"
						element={<SignUpBusiness />}
					/>
				</Route>
				<Route path="forgotpsw" element={<ForgotPsw />} />
			</Route>

			<Route path="user" element={<User />}>
				<Route path="profile" element={null} />
				<Route path="post-ad" element={null} />
				<Route path="saved-ads" element={null} />
			</Route>


			{/* BACKOFFICE */}
			<Route path="admin-auth" element={<AdminLogin />} />
			<Route path="admin" element={<Cms />}>
				<Route index element={<RoutingBO.DashBoard />} />
				<Route path="users" element={<UsersList />} />
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
				<Route path="profile" element={<Profile />} />
				<Route path="profile/update-profile" element={<UpdateProfile />} />
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

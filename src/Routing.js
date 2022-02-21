import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// FRONTEND SCREENS
import AboutUs from "./frontend/screens/Home/AboutUs";
import AssessBuilding from "./frontend/screens/Home/AssessBuilding";
import Auth from "./frontend/screens/Auth/Auth";
import ForgotPsw from "./frontend/screens/Auth/ForgotPsw";
import Home from "./frontend/screens/Home/Home";
import Login from "./frontend/screens/Auth/Login";
import SignUpPrivate from "./frontend/screens/Auth/SignUp/SignUpPrivate";
import WhatWeOffer from "./frontend/screens/Home/WhatWeOffer";
import SignUpBusiness from "./frontend/screens/Auth/SignUp/SignUpBusiness";
import User from "./frontend/screens/User/User";
import EditProfile from "./frontend/screens/User/EditProfile";
import PostAdvs from "./frontend/screens/User/PostAdvs";
import SaveAdvs from "./frontend/screens/User/SaveAdvs";
import SignUp from "./frontend/screens/Auth/SignUp/SignUp";
import Dashboard from "./frontend/screens/User/Dashboard";
import NewAdv from "./frontend/screens/User/NewAdv";
import DetailBuilding from "./frontend/screens/DetailBuilding/DetailBuilding";
import FAQ from "./frontend/screens/FAQ/FAQ";
import Map from "./frontend/screens/Map/Map";

// BACKOFFICE SCREENS
// here
import DetailsAd from "./backoffice/screens/detailsAd/DetailsAd";
import Profile from "./backoffice/screens/profile/Profile";
import UpdateProfile from "./backoffice/screens/profile/UpdateProfile";
import Cms from "./backoffice/screens/cms/Cms";
import CmsBusiness from "./backoffice/screens/cmsBusiness/CmsBusiness";
import AdminLogin from "./backoffice/screens/AdminLogin/Admin-login";
import * as RoutingBO from "./backoffice/RoutingBO";
import UsersList from "./backoffice/screens/UsersList/UsersList";
import VerificationAdv from "./backoffice/screens/verificationAdv/VerificationAdv";
import BusinessList from "./backoffice/screens/BusinessList/BusinessList";
import BusinessDetails from "./backoffice/screens/cmsBusiness/businessDetails/BusinessDetails";
import UpdateBusinessDetails from "./backoffice/screens/cmsBusiness/businessDetails/UpdateBusinessDetails";
import BusinessAdv from "./backoffice/screens/cmsBusiness/businessAdv/BusinessAdv";
import BusinessUsers from "./backoffice/screens/cmsBusiness/businessUsers/BusinessUsers";
import Checker from "./backoffice/screens/Checkers/Checker";
import CheckersList from "./backoffice/screens/Checkers/CheckersList";
import AddChecker from "./backoffice/screens/Checkers/AddChecker";

// COMMON
import NotFound from "./common/screens/NotFound";

// REDUX
import { Provider } from "react-redux";
import applicationStore from "./applicationStore";
import AdvList from "./frontend/screens/Advertisement/AdvList";
import { ROUTES } from "./utils/properties";
import SyncRoutingLanguage from "./common/screens/SyncRoutingLanguage";

const Routing = () => (
	<Provider store={applicationStore}>
		<Routes>
			{/* FRONTEND */}
			{/* Redirect */}
			<Route
				path=""
				element={<Navigate to={ROUTES.FE.BASE.SELF} replace={true} />}
			/>
			<Route path={ROUTES.FE.BASE.SELF} element={<SyncRoutingLanguage />}>
				<Route path={ROUTES.FE.BASE.HOME} element={<Home />} />
				<Route path={ROUTES.FE.BASE.ABOUT_US} element={<AboutUs />} />
				<Route path={ROUTES.FE.BASE.WHAT_WE_OFFER} element={<WhatWeOffer />} />
				<Route
					path={ROUTES.FE.BASE.ASSESS_BUILDING}
					element={<AssessBuilding />}
				/>
				<Route path={ROUTES.FE.BASE.FAQ} element={<FAQ />} />

				<Route path={ROUTES.FE.BASE.ADS_LIST.SELF} element={<AdvList />} />
				<Route
					path={ROUTES.FE.BASE.DETAILS_AD.SELF}
					element={<DetailBuilding />}
				/>

				<Route path={ROUTES.FE.BASE.MAP} element={<Map />} />

				<Route path={ROUTES.FE.BASE.AUTH.SELF} element={<Auth />}>
					{/* Redirect */}
					<Route
						path=""
						element={<Navigate to={ROUTES.FE.BASE.AUTH.LOGIN} replace={true} />}
					/>
					<Route path={ROUTES.FE.BASE.AUTH.LOGIN} element={<Login />} />
					<Route path={ROUTES.FE.BASE.AUTH.SIGNUP.SELF} element={<SignUp />}>
						{/* Redirect */}
						<Route
							path=""
							element={
								<Navigate
									to={ROUTES.FE.BASE.AUTH.SIGNUP.PRIVATE}
									replace={true}
								/>
							}
						/>
						<Route
							path={ROUTES.FE.BASE.AUTH.SIGNUP.PRIVATE}
							element={<SignUpPrivate />}
						/>
						<Route
							path={ROUTES.FE.BASE.AUTH.SIGNUP.BUSINESS}
							element={<SignUpBusiness />}
						/>
					</Route>
					<Route
						path={ROUTES.FE.BASE.AUTH.FORGOT_PASSWORD}
						element={<ForgotPsw />}
					/>
				</Route>

				<Route path={ROUTES.FE.BASE.USER.SELF} element={<User />}>
					<Route path={ROUTES.FE.BASE.USER.DASHBOARD} element={<Dashboard />} />
					<Route path={ROUTES.FE.BASE.USER.NEW_ADV} element={<NewAdv />} />
					<Route
						path={ROUTES.FE.BASE.USER.EDIT_PROFILE}
						element={<EditProfile />}
					/>
					<Route path={ROUTES.FE.BASE.USER.POSTED_ADS} element={<PostAdvs />} />
					<Route path={ROUTES.FE.BASE.USER.SAVED_ADS} element={<SaveAdvs />} />
				</Route>
			</Route>

			{/* BACKOFFICE */}
			<Route path="admin-auth" element={<AdminLogin />} />
			<Route path="admin" element={<Cms />}>
				<Route index element={<RoutingBO.DashBoard />} />
				<Route path="users" element={<UsersList />} />
				<Route path="businesses" element={<BusinessList />} />
				<Route path="business/:id" element={<CmsBusiness />}>
					<Route path="details" element={<BusinessDetails />} />
					<Route
						path="details/update-details"
						element={<UpdateBusinessDetails />}
					/>
					<Route path="advertisements" element={<BusinessAdv />} />
					<Route path="users" element={<BusinessUsers />} />
				</Route>
				<Route path="user/:id" element={<RoutingBO.User />} />
				<Route path="advertisements" element={<RoutingBO.User />} />
				<Route path="verification-adv" element={<VerificationAdv />} />
				<Route path="advertisement/:id" element={<DetailsAd />} />
				<Route path="dashBoard" element={<RoutingBO.DashBoard />} />
				<Route path="profile" element={<Profile />} />
				<Route path="profile/update-profile" element={<UpdateProfile />} />
				<Route path="collaborators" element={<CheckersList />} />
				<Route path="collaborator/:id" element={<Checker />} />
				<Route path="collaborator/add-collaborator" element={<AddChecker />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	</Provider>
);
export default Routing;

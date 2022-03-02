import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// BACKOFFICE SCREENS
// here
import BusinessesStatistic from "./backoffice/screens/cmsDashBoard/businessesStatistic/BusinessesStatistic";
import AdvertisementsStatistic from "./backoffice/screens/cmsDashBoard/advertisementsStatistic/AdvertisementsStatistic";
import UserStatistic from "./backoffice/screens/cmsDashBoard/userStatistic/UserStatistic";
import CmsDashBoard from "./backoffice/screens/cmsDashBoard/CmsDashBoard";
import DetailsAd from "./backoffice/screens/detailsAd/DetailsAd";
import Profile from "./backoffice/screens/profile/Profile";
import UpdateProfile from "./backoffice/screens/profile/UpdateProfile";
import Cms from "./backoffice/screens/cms/Cms";
import CmsBusiness from "./backoffice/screens/cmsBusiness/CmsBusiness";
import AdminLogin from "./backoffice/screens/AdminLogin/Admin-login";
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
import AdvListBo from "./backoffice/screens/AdvListBo/AdvListBo";
import CmsUser from "./backoffice/screens/CmsUser/CmsUser";
import UserDetails from "./backoffice/screens/CmsUser/UserDetails/UserDetails";
import UpdateUserDetails from "./backoffice/screens/CmsUser/UserDetails/UpdateUserDetails";
import UserAdv from "./backoffice/screens/CmsUser/UserAdv/UserAdv";

// COMMON
import NotFound from "./common/screens/NotFound";

// REDUX
import { Provider } from "react-redux";
import applicationStore from "./applicationStore";
import AdvList from "./frontend/screens/Advertisement/AdvList";
import { ROUTES } from "./utils/properties";
import SyncRoutingLanguage from "./common/screens/SyncRoutingLanguage";
import PublicProfile from "./frontend/screens/UsersSection/PublicProfile";
import SpinngerScreen from "./common/components/funcComponents/SpinnerScreen/SpinnerScreen";

// FRONTEND SCREENS
const Home = React.lazy(() => import("./frontend/screens/Home/Home"));
const WhatWeOffer = React.lazy(() =>
	import("./frontend/screens/Home/WhatWeOffer")
);
const AboutUs = React.lazy(() => import("./frontend/screens/Home/AboutUs"));
const AssessBuilding = React.lazy(() =>
	import("./frontend/screens/Home/AssessBuilding")
);
const Auth = React.lazy(() => import("./frontend/screens/Auth/Auth"));
const Login = React.lazy(() => import("./frontend/screens/Auth/Login"));
const SignUp = React.lazy(() =>
	import("./frontend/screens/Auth/SignUp/SignUp")
);
const SignUpPrivate = React.lazy(() =>
	import("./frontend/screens/Auth/SignUp/SignUpPrivate")
);
const SignUpBusiness = React.lazy(() =>
	import("./frontend/screens/Auth/SignUp/SignUpBusiness")
);
const ForgotPsw = React.lazy(() => import("./frontend/screens/Auth/ForgotPsw"));
const User = React.lazy(() => import("./frontend/screens/User/User"));
const EditProfile = React.lazy(() =>
	import("./frontend/screens/User/EditProfile")
);
const PostedAdvs = React.lazy(() =>
	import("./frontend/screens/User/PostedAdvs")
);
const SaveAdvs = React.lazy(() => import("./frontend/screens/User/SaveAdvs"));
const Dashboard = React.lazy(() => import("./frontend/screens/User/Dashboard"));
const NewAdv = React.lazy(() => import("./frontend/screens/User/NewAdv"));
const DetailBuilding = React.lazy(() =>
	import("./frontend/screens/DetailBuilding/DetailBuilding")
);
const FAQ = React.lazy(() => import("./frontend/screens/FAQ/FAQ"));
const Map = React.lazy(() => import("./frontend/screens/Map/Map"));

// Component
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
				{/* Home */}
				<Route
					path={ROUTES.FE.BASE.HOME}
					element={
						<Suspense fallback={<SpinngerScreen />}>
							<Home />
						</Suspense>
					}
				/>

				{/* About us */}
				<Route
					path={ROUTES.FE.BASE.ABOUT_US}
					element={
						<Suspense fallback={<SpinngerScreen />}>
							<AboutUs />
						</Suspense>
					}
				/>

				{/* What we offer */}
				<Route
					path={ROUTES.FE.BASE.WHAT_WE_OFFER}
					element={
						<Suspense fallback={<SpinngerScreen />}>
							<WhatWeOffer />
						</Suspense>
					}
				/>

				{/* Assess buildings */}
				<Route
					path={ROUTES.FE.BASE.ASSESS_BUILDING}
					element={
						<Suspense fallback={<SpinngerScreen />}>
							<AssessBuilding />
						</Suspense>
					}
				/>

				{/* Frequently asked questions */}
				<Route
					path={ROUTES.FE.BASE.FAQ}
					element={
						<Suspense fallback={<SpinngerScreen />}>
							<FAQ />
						</Suspense>
					}
				/>

				{/* Advertisements' list */}
				<Route
					path={ROUTES.FE.BASE.ADS_LIST.SELF}
					element={
						<Suspense fallback={<SpinngerScreen />}>
							<AdvList />
						</Suspense>
					}
				/>

				{/* Property's details */}
				<Route
					path={ROUTES.FE.BASE.DETAILS_AD.SELF}
					element={
						<Suspense fallback={<SpinngerScreen />}>
							<DetailBuilding />
						</Suspense>
					}
				/>

				{/* Map */}
				<Route
					path={ROUTES.FE.BASE.MAP}
					element={
						<Suspense fallback={<SpinngerScreen />}>
							<Map />
						</Suspense>
					}
				/>

				{/* Users section ( public, no auth ) */}
				<Route path={ROUTES.FE.BASE.USERS_SECTION.SELF}>
					<Route
						path={ROUTES.FE.BASE.USERS_SECTION.PUBLIC_PROFILE.SELF}
						element={
							<Suspense fallback={<SpinngerScreen />}>
								<PublicProfile />
							</Suspense>
						}
					/>
				</Route>

				{/* Auth - Sign In - Sign Up */}
				<Route
					path={ROUTES.FE.BASE.AUTH.SELF}
					element={
						<Suspense fallback={<SpinngerScreen />}>
							<Auth />
						</Suspense>
					}
				>
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

				{/* User section ( private, auth needed ) */}
				<Route
					path={ROUTES.FE.BASE.USER.SELF}
					element={
						<Suspense fallback={<SpinngerScreen />}>
							<User />
						</Suspense>
					}
				>
					<Route path={ROUTES.FE.BASE.USER.DASHBOARD} element={<Dashboard />} />
					<Route path={ROUTES.FE.BASE.USER.NEW_ADV} element={<NewAdv />} />
					<Route
						path={ROUTES.FE.BASE.USER.EDIT_PROFILE}
						element={<EditProfile />}
					/>
					<Route
						path={ROUTES.FE.BASE.USER.POSTED_ADS}
						element={<PostedAdvs />}
					/>
					<Route path={ROUTES.FE.BASE.USER.SAVED_ADS} element={<SaveAdvs />} />
				</Route>
			</Route>

			{/* BACKOFFICE */}
			<Route path="admin-auth" element={<AdminLogin />} />
			<Route path="admin" element={<Cms />}>
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
				<Route path="user/:id" element={<CmsUser />}>
					<Route path="details" element={<UserDetails />} />
					<Route
						path="details/update-details"
						element={<UpdateUserDetails />}
					/>
					<Route path="advertisements" element={<UserAdv />} />
				</Route>
				<Route path="advertisements" element={<AdvListBo />} />
				<Route path="verification-adv" element={<VerificationAdv />} />
				<Route path="advertisement/:id" element={<DetailsAd />} />
				<Route path="dashBoard" element={<CmsDashBoard />}>
					<Route path="users" element={<UserStatistic />} />
					<Route path="advertisements" element={<AdvertisementsStatistic />} />
					<Route path="businesses" element={<BusinessesStatistic />} />
				</Route>
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

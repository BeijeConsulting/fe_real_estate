import React, { useCallback, useEffect, useState } from "react";

// files
import banner from "../../assets/images/immagine-letto-2.png";
import avatar from "../../assets/images/avatar.png";

// components
import NavBar from "../../components/Navbar/Navbar";

// api
import {
	getPublicAdsByUsername,
	getUserByUsername,
} from "../../../services/frontend/usersApi";

// routing
import { useParams } from "react-router-dom";

//TRANSLATION
import { useTranslation } from "react-i18next";
import RenderAdvs from "../../components/AdvCard/RenderAdvs";

const STATUS_TYPE = {
	LOADING: "loading",
	SUCCESS: "success",
	FAILED: "failed",
};

const PublicProfile = () => {
	const [state, setState] = useState({
		statusLoadingUser: STATUS_TYPE.LOADING,
		user: null,
		ads: [],
	});
	const params = useParams();
	const { t } = useTranslation();

	useEffect(() => {
		const loadUser = async () => {
			// Note: if request is successful, resUser can be also `null`. See `getUserByUsername`
			const fecthedUser = await getUserByUsername(params.username).catch(
				(err) => console.error(err)
			);

			let newState = {};

			if (!fecthedUser) {
				newState.statusLoadingUser = STATUS_TYPE.FAILED;
			}

			newState.statusLoadingUser = STATUS_TYPE.SUCCESS;
			newState.user = fecthedUser;
			setState((previousState) => ({
				...previousState,
				...newState,
			}));
		};

		loadUser();
	}, [params.username]);

	useEffect(() => {
		if (!!state.user?.id) {
			getPublicAdsByUsername(state.user.username).then((res) =>
				setState((previousState) => ({
					...previousState,
					ads: res.data,
				}))
			);
		}
	}, [state.user]);

	return (
		<div className="flex flex-col items-center bg-gray min-h-screen w-screen">
			<NavBar fixed />
			<div className="h-10"></div>
			{state.statusLoadingUser === STATUS_TYPE.FAILED ? (
				<h1>{t("Dashboard.UserNotFound")}</h1>
			) : (
				<div className="h-fit w-fit max-w-xl md:max-w-3xl">
					{/* Header */}
					{/* Note: the sizes in header's className rule every size inside it. */}
					<header
						className={`relative h-52 w-96 overflow-hidden md:h-96 md:w-screen md:max-w-3xl `}
					>
						{/* Banner image */}
						<div
							className={`absolute flex h-full items-center justify-center left-0 top-0 w-full`}
						>
							<img alt="banner" className={`h-full w-full`} src={banner} />
						</div>
						<div className="absolute bottom-0 flex h-fit items-end justify-between left-0 w-full z-10">
							{/* Image profile user */}
							<img
								className="bg-white/[0.6] h-24 w-24 rounded-full md:h-36 md:w-36 border-4 border-solid border-slate-900"
								src={avatar}
								alt="profile-img"
							/>
							{/* Username */}
							<p className="bg-white/[0.6] font-bold text-2xl p-2 md:text-3xl">
								{state.user?.username ?? t("Dashboard.UsernameUnkown")}
							</p>
						</div>
					</header>
					{/*  */}
					<div className="flex flex-col p-2">
						<div className="flex flex-col pt-2">
							<h1 className="font-bold text-xl">{t("Dashboard.UserData")}</h1>
							<p>
								<b>{t("Dashboard.UserData")}</b>{" "}
								{!!state.user?.createDatetime
									? new Date(state.user.createDatetime).toLocaleDateString()
									: state.user?.createDatetime}
							</p>
							<p>
								<b>Email:</b> {state.user?.email ?? t("Dashboard.None")}
							</p>
							<p>
								<b>{t("Dashboard.Business")}:</b>{" "}
								{state.user?.business?.businessName ?? t("Dashboard.None")}
							</p>
						</div>
						<div className="flex flex-col pt-3">
							<h1 className="font-bold text-xl">
								{t("Dashboard.ProfilePostedAds")}
							</h1>
							<RenderAdvs data={state.ads} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PublicProfile;

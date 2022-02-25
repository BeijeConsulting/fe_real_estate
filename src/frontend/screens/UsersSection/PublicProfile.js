import React, { useCallback, useEffect, useState } from "react";

// files
import banner from "../../assets/images/immagine-letto-2.png";
import avatar from "../../assets/images/avatar.jpg";

// components
import NavBar from "../../components/Navbar/Navbar";
import AdvCard from "../../components/AdvCard/AdvCard";
import { getUserByUsername } from "../../../services/frontend/users";
import { findAds } from "../../../services/frontend/advertisementApi";
import { useNavigate, useParams } from "react-router-dom";

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
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		const loadUser = async () => {
			// Note: if request is successful, resUser can be also `null`. See `getUserByUsername`
			const fecthedUser = await getUserByUsername(params.username).catch(
				() => null
			);

			let newState = {};

			if (!fecthedUser) {
				newState.statusLoadingUser = STATUS_TYPE.FAILED;
			}

			newState.statusLoadingUser = STATUS_TYPE.SUCCESS;
			newState.user = fecthedUser;

			setState((previousState) => ({ ...previousState, ...newState }));
		};

		loadUser();
	}, [params.username]);

	useEffect(() => {
		if (!!state.user?.id) {
			findAds({ userId: state.user.id }).then((res) => console.log(res.data));
		}
		// console.log(state.user);
	}, [state.user]);

	const handleAdvRender = useCallback(
		(adv, key) => {
			const handleNavigate = (dest) => () => {
				navigate(dest);
			};
			return (
				<AdvCard
					key={"advard-" + key + adv.id}
					id={adv.id}
					city={adv.city}
					squareMeters={adv.areaMsq}
					description={adv?.longDescription}
					roomNumber={adv.rooms}
					price={adv.price}
					onClick={handleNavigate(`/${params.lang}/adv/${adv.id}`)}
					authorName={adv.seller.username}
				/>
			);
		},
		[params.lang, navigate]
	);

	return (
		<div className="flex flex-col items-center bg-gray h-screen w-screen">
			<NavBar fixed />
			<div className="h-10"></div>
			{state.statusLoadingUser === STATUS_TYPE.FAILED ? (
				<h1>User not found</h1>
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
							{/* Username */}
							<p className="bg-white/[0.6] font-bold text-xl p-2 md:text-3xl">
								{state.user?.username ?? "Unknown"}
							</p>
							{/* Image profile user */}
							<img
								className="bg-white/[0.6] h-16 w-16 md:h-36 md:w-36"
								src={avatar}
								alt="profile-img"
							/>
						</div>
					</header>
					{/*  */}
					<div className="flex flex-col p-2">
						<div className="flex flex-col pt-2">
							<p>
								<b>Email:</b> {state.user?.email ?? "nessuna"}
							</p>
							<p>
								<b>Azienda:</b>{" "}
								{state.user?.business?.businessName ?? "nessuna"}
							</p>
						</div>
						<div className="flex flex-col pt-3">
							<h1 className="font-bold">Annunci pubblicati</h1>
							{!!state.ads?.length && state.ads.length > 0 ? (
								state.ads.map(handleAdvRender)
							) : (
								<p>Impossibile caricare annunci</p>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PublicProfile;

import React, { useCallback, useEffect, useState } from "react";

// files
import banner from "../../assets/images/immagine-letto-2.png";
import avatar from "../../assets/images/avatar.jpg";

// components
import NavBar from "../../components/Navbar/Navbar";
import AdvCard from "../../components/AdvCard/AdvCard";
import { getUserByUsername } from "../../../services/frontend/users";
import { useNavigate, useParams } from "react-router-dom";

const PublicProfile = () => {
	const [state, setState] = useState({ user: null, ads: [] });
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		getUserByUsername(params.username).then((u) =>
			setState((previousState) => ({ ...previousState, user: u }))
		);
	}, [params.username]);

	useEffect(() => {
		if (!!state.user) {
			// chiamata api
		}
		console.log(state.user);
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
		<div className="flex flex-col items-center bg-gray h-screen ">
			<div className="h-fit w-screen">
				<NavBar />
			</div>
			<div className="h-fit max-w-xl md:max-w-3xl">
				{/*  */}
				<header className="relative h-32 overflow-hidden w-full">
					<img alt="banner" className="absolute left-0 -top-16" src={banner} />
					<div className="absolute flex bottom-0 h-fit items-end justify-between left-0 w-full z-10">
						<p className="bg-white/[0.6] font-bold text-xl p-2">
							{state.user?.username ?? "Unknown"}
						</p>
						<img
							className="bg-white/[0.6] h-16 w-16"
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
							<b>Azienda:</b> {state.user?.business?.businessName ?? "nessuna"}
						</p>
					</div>
					<div className="flex flex-col pt-3">
						<h1 className="font-bold">Annunci pubblicati</h1>
						{state.ads.map(handleAdvRender)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PublicProfile;

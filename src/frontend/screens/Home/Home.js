import React, { useState } from "react";
import Toast from "../../components/Toast/Toast";

// Css
import "./Home.css";

// COMPONENTS
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import Illustrations from "../../components/Illustrations/Illustrations";
import Carousel from "../../components/Carousel/Carousel";
import Button from "../../components/UI/Button/Button";

// translations
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS } from "../../../common/utils/storage";

const Home = () => {
	const { t } = useTranslation();
	let navigate = useNavigate()

	const [toast, setToast] = useState({ type: '', msg: '' })

	const handleClick = () => {
		let token = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_TOKEN)

		if (token) {
			navigate(`user/new-adv`)
		} else {
			setToast({ type: 'error', msg: 'Per piacere esegui il Login' })
		}
	}

	return (
		<div className="fixed-background">
			<Toast type={toast.type} msg={toast.msg} />
			{/* SEO */}
			<Helmet>
				<meta name="description" content={t("Home.helmet.description")} />
				<title>DOMUS</title>
			</Helmet>
			{/* Home */}
			<div className="home-container">
				<Navbar fixed />

				<div className=" h-screen flex flex-col">
					<Search />

					<div onClick={handleClick} className='flex flex-1 justify-center absolute mx-auto bottom-10 left-0 right-0'>
						<p className='btn-home rounded font-primary'>PUBBLICA ANNUNCIO</p>
					</div>
				</div>
				<Illustrations className="illustrations-container" />

				<Carousel />

				<div className="flex flex-col w-full mt-6 p-2 bg-secondary">
					<h1 className="text-3xl md:text-4xl text-center color-primary p-2">{t("Home.publishAd.text")}</h1>
					<h3 className="text-xl md:text-xl text-center color-primary">{t("Home.publishAd.subtext")}</h3>
					<div className="w-2/5 mb- mx-auto">
						<Button
							size={18}
							label={t("Home.publishAd.button")}
						>
						</Button>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Home;

import React from "react";

// Css
import "./Home.css";

// COMPONENTS
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import Illustrations from "../../components/Illustrations/Illustrations";
import Carousel2 from "../../components/Carousel/Carousel2";

// translations
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();

	return (
		<div className="fixed-background">
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
				</div>
				<Illustrations className="illustrations-container" />

				<Carousel2 />

				<div className="h-screen"></div>

				<div className="bluesection-container">
					{t("Home.publishAd.text")} <br />
					{t("Home.publishAd.subtext")}
					<button className="text-base border-2 rounded-lg text-yellow-400 border-yellow-400 cursor: pointer; p-3 sm:mt-9 sm:text-2xl">
						{t("Home.publishAd.button")}
					</button>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Home;

import React from "react";

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

				<Carousel />

				<div className="flex flex-col w-full mt-6 p-2 bg-secondary">
					<h1 className="text-3xl md:text-4xl text-center color-primary p-2">{t("Home.publishAd.text")}</h1>
					<h3 className="text-xl md:text-xl text-center color-primary">{t("Home.publishAd.subtext")}</h3>
					<div className="w-2/5 mb- mx-auto">
						<Button
							size={16}
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

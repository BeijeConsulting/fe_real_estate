import "./AboutUs.css";
import React from "react";

import { Helmet } from "react-helmet";

//COMPONENTS
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

// IMAGES

import Family from "../../../assets/images/Family.jpg";

const AboutUs = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta name="description" content={t("AboutUs.helmet.description")} />
				<title>{t("AboutUs.helmet.title")}</title>
			</Helmet>

			<NavBar />

			<div className="aboutus-image">
				<div className="w-96 text-3xl font-bold bg-secondary text-white mt-80 z-50 position:relative h-12; lg:mt-96 lg:h-14 flex items-center justify-center">
					{t("AboutUs.bannerText")}
				</div>
			</div>

			<h1 className="aboutus-title">{t("AboutUs.title")}</h1>
			<p className="mobile-pargraph">{t("AboutUs.paragraph")}</p>
			<div className="ourvalues-container">
				<div className="ourvalues-image">
					<img src={Family} alt="" />
				</div>

				<div className="ourvalues-text">
					<p className="lg:text-3xl lg:font-bold lg:ml-20 lg:mt-12 relative sm:text-xl sm:ml-8 sm:">
						{t("AboutUs.paragraphTitle")}
					</p>
					<p className="lg:text-lg lg:italic lg:mt-36 lg:p-3 lg:leading-9 sm:text-base sm:mt-0 sm:italic">
						{t("AboutUs.paragraph")}
					</p>
				</div>
			</div>

			<div className="blue-container">
				<h1 className="text-white ml-4"> {t("AboutUs.agencyData.title")} </h1>

				<p>
					{t("AboutUs.agencyData.paragraphs.1")}
					<br />
					{t("AboutUs.agencyData.paragraphs.2")}
					<br />
					{t("AboutUs.agencyData.paragraphs.3")}
					<br />
					{t("AboutUs.agencyData.paragraphs.4")}
					<br />
					{t("AboutUs.agencyData.paragraphs.5")}
				</p>
			</div>

			<footer className="aboutus-footer">
				<Footer />
			</footer>
		</>
	);
};

export default AboutUs;

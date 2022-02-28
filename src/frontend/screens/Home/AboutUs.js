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
					LA NOSTRA STORIA
				</div>
			</div>

			<h1 className="aboutus-title"> CHI SIAMO </h1>
			<p className="mobile-pargraph">
				{" "}
				Crediamo fortemente in una visione globale <br /> del mercato
				immobiliare. Noi di Domus.it mettiamo al centro la persona: nella nostra
				azienda tutti hanno un grande valore <br /> intrinseco e ci teniamo ad
				avere un team di persone provenienti da diverse culture e background
				sociali.{" "}
			</p>
			<div className="ourvalues-container">
				<div className="ourvalues-image">
					<img src={Family} alt="" />
				</div>

				<div className="ourvalues-text">
					<p className="lg:text-3xl lg:font-bold lg:ml-20 lg:mt-12 relative sm:text-xl sm:ml-8 sm:">
						{" "}
						I VALORI IN CUI CREDIAMO{" "}
					</p>
					<p className="lg:text-lg lg:italic lg:mt-36 lg:p-3 lg:leading-9 sm:text-base sm:mt-0 sm:italic">
						{" "}
						Crediamo fortemente in una visione globale del mercato immobiliare.
						Noi di Domus.it mettiamo al centro la persona: nella nostra azienda
						tutti hanno un grande valore intrinseco e ci teniamo ad avere un
						team di persone provenienti da diverse culture e background sociali.
					</p>
				</div>
			</div>

			<div className="blue-container">
				<h1 className="text-white ml-4"> DATI SOCIETARI </h1>

				<p>
					Domus.it è un sito web di DomusGroup, a socio unico <br />
					Sede legale: Corso Mantova 3, 20122, Milano <br />
					Capitale sociale: €40.000 i.v. <br />
					P.I. e C.F.: 05388421963 <br />
					REA: MI-1817573 <br />
					Società soggetta a direzione e coordinamento di Inter Milan a.c.
				</p>
			</div>

			<footer className="aboutus-footer">
				<Footer />
			</footer>
		</>
	);
};

export default AboutUs;

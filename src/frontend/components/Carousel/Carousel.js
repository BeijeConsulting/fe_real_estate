import React, { useState } from "react";
import "./carousel.css";

//Components
import CardCarousel from "../UI/CardCarousel/CardCarousel";

//Images


// routing
import { useTranslation } from "react-i18next";

const Carousel = () => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col">
			<h1 className="text-3xl font-bold mt-8 mx-auto md:ml-20 font-primary color-secondary">
				{t("Carousel.title")}
			</h1>
			<div className="flex flex-col mx-auto md:flex-row md:ml-14">
				<CardCarousel
					title="Casa Colonica Modena"
					subtitle={t("Carousel.seeDetails")}
				/>

				<CardCarousel
					title="Casa studenti Bologna"
					subtitle={t("Carousel.seeDetails")}
				/>

				<CardCarousel
					title="Appartamento Chiasso"
					subtitle={t("Carousel.seeDetails")}
				/>
			</div>
		</div>
	);
};

export default Carousel;

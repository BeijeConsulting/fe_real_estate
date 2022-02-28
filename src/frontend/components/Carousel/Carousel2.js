import React from "react";
import "./carousel2.css";

//Components
import CardCarousel from "../UI/CardCarousel/CardCarousel";

//Images
import Apartment1 from "../../../assets/images/Apartment1.jpg";
import Apartment2 from "../../../assets/images/Apartment2.jpg";
import Apartment3 from "../../../assets/images/Apartament3b.jpg";
import Apartment4 from "../../../assets/images/Apartment4.jpg";

// routing
import { useTranslation } from "react-i18next";

const Carousel2 = () => {
	const { t } = useTranslation();

	return (
		<>
			<h1 className="font-primary max-w-5xl mx-auto text-3xl font-semibold ml-5 mt-7 sm:text-4xl sm:mt-11">
				{t("Carousel.title")}
			</h1>
			<div className="fixed-background over">
				<div className="scroll-helper">
					<div className="cards-container">
						<CardCarousel
							title="Casa Colonica Modena"
							image={Apartment1}
							subtitle={t("Carousel.seeDetails")}
						/>

						<CardCarousel
							title="Casa studenti Bologna"
							image={Apartment2}
							subtitle={t("Carousel.seeDetails")}
						/>

						<CardCarousel
							title="Appartamento Chiasso"
							image={Apartment3}
							subtitle={t("Carousel.seeDetails")}
						/>

						<CardCarousel
							title="Terrazzo Bologna"
							image={Apartment4}
							subtitle={t("Carousel.seeDetails")}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Carousel2;

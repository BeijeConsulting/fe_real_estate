import "./WhatWeOffer.css";
import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ServiceCard from "../../components/whatWeOffer/ServiceCard";
import { withTranslation } from "react-i18next";

const CLASSES = {
	CARD: "flex flex-col items-start mt-4 mb-2 my-8",
	PRE_CARD_TEXT: "ml-2 mb-6 uppercase font-semibold max-w-xs md:max-w-none ",
	CARD_INFO:
		"flex flex-col items-start justify-evenly text-sm text-white font-bold",
};

const WhatWeOffer = ({ t }) => {
	return (
		<div className="w-screen h-screen fixed overflow-auto flex flex-col justify-between items-center">
			<header className="w-screen mb-4">
				<NavBar />
			</header>
			<div className="flex flex-col items-center mt-4">
				<p className={"font-bold text-black text-xl  uppercase "}>
					{t("WhatWeOffer.title")}
				</p>
			</div>
			<div className={CLASSES.CARD}>
				<p className={CLASSES.PRE_CARD_TEXT}>
					{t("WhatWeOffer.services.newAd.preCardText")}
				</p>
				<ServiceCard
					buttonText={t("WhatWeOffer.services.newAd.button")}
					classNameRedirectSection={"what-we-offer__insert-ad"}
					title={t("WhatWeOffer.services.newAd.title")}
				>
					<div className={CLASSES.CARD_INFO}>
						<p className={"text-xl uppercase"}>
							{t("WhatWeOffer.services.newAd.infoTitle")}
						</p>
						<p className="">{t("WhatWeOffer.services.newAd.infoText")}</p>
					</div>
				</ServiceCard>
			</div>
			<div className={CLASSES.CARD}>
				<p className={CLASSES.PRE_CARD_TEXT}>
					{t("WhatWeOffer.services.assessProperty.preCardText")}
				</p>
				<ServiceCard
					buttonText={t("WhatWeOffer.services.assessProperty.button")}
					classNameRedirectSection={"what-we-offer__assess-property"}
					reverse={true}
					title={t("WhatWeOffer.services.assessProperty.title")}
				>
					<div className={`${CLASSES.CARD_INFO}`}>
						<p className={"text-xl uppercase text-center w-full"}>
							{t("WhatWeOffer.services.assessProperty.infoTitle")}
						</p>
						<p className="ml-4">
							{t("WhatWeOffer.services.assessProperty.infoText")}
						</p>
					</div>
				</ServiceCard>
			</div>
			<footer className="w-screen mt-3">
				<Footer />
			</footer>
		</div>
	);
};

export default withTranslation()(WhatWeOffer);

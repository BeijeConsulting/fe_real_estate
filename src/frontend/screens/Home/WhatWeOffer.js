import "./WhatWeOffer.css";
import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ServiceCard from "../../components/whatWeOffer/ServiceCard";

const CLASSES = {
	CARD: "flex flex-col items-start mt-4 mb-2",
	PRE_CARD_TEXT: "ml-2 mb-6 uppercase",
};

const WhatWeOffer = () => {
	return (
		<div className="h-screen flex flex-col justify-between items-center">
			<header className="w-screen mb-3">
				<NavBar />
			</header>
			<div className="flex flex-col items-center">
				<p>Cerca un immobile</p>
				<p>Questa è una searchbar</p>
			</div>
			<div className={CLASSES.CARD}>
				<p className={CLASSES.PRE_CARD_TEXT}>
					Sei un privato o un'agenzia immobiliare?
				</p>
				<ServiceCard
					classNameRedirectSection={
						"what-we-offer__insert-ad"
					}
				>
					<p>Hai bisogno di un aiuto?</p>
				</ServiceCard>
			</div>
			<div className={CLASSES.CARD}>
				<p className={CLASSES.PRE_CARD_TEXT}>
					Vuoi vendere ma non hai idea di quanto vale la tua
					proprietà?
				</p>
				<ServiceCard
					classNameRedirectSection={
						"what-we-offer__assess-property"
					}
				>
					<p>Hai bisogno di un aiuto?</p>
				</ServiceCard>
			</div>
			<footer className="w-screen mt-3">
				<Footer />
			</footer>
		</div>
	);
};

export default WhatWeOffer;

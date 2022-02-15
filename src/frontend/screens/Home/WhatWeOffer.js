import "./WhatWeOffer.css";
import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ServiceCard from "../../components/whatWeOffer/ServiceCard";

const CLASSES = {
	CARD: "flex flex-col items-start mt-4 mb-2 my-8",
	PRE_CARD_TEXT: "ml-2 mb-6 uppercase font-semibold",
	CARD_INFO:
		"flex flex-col items-start justify-evenly text-sm text-white font-bold",
};

const WhatWeOffer = () => {
	return (
		<div className="h-screen flex flex-col justify-between items-center">
			<header className="w-screen mb-4">
				<NavBar />
			</header>
			<div className="flex flex-col items-center mt-4">
				<p
					className={
						"font-bold text-black text-xl  uppercase "
					}
				>
					Cerca un immobile
				</p>
				<input
					placeholder="Searchbar"
					type="text"
					style={{
						border: "1px solid black",
						padding: 3,
					}}
				/>
			</div>
			<div className={CLASSES.CARD}>
				<p className={CLASSES.PRE_CARD_TEXT}>
					Sei un privato o un'agenzia immobiliare?
				</p>
				<ServiceCard
					buttonText={"Inserisci"}
					classNameRedirectSection={
						"what-we-offer__insert-ad"
					}
					title={"inserisci ora un nuovo annuncio!"}
				>
					<div className={CLASSES.CARD_INFO}>
						<p className={"text-xl uppercase"}>
							Hai bisogno di un aiuto?
						</p>
						<p className="">
							<br />
							Chiama il numero <br /> 0289623520!{" "}
							<br />
							da lunedì a venerdì - dalle <br />{" "}
							09.00 alle 21.00
							<br /> <br />
							Oppure scrivi a: domus@casa.it
						</p>
					</div>
				</ServiceCard>
			</div>
			<div className={CLASSES.CARD}>
				<p className={CLASSES.PRE_CARD_TEXT}>
					Vuoi vendere ma non hai idea di quanto vale la tua
					proprietà?
				</p>
				<ServiceCard
					buttonText={"Valuta"}
					classNameRedirectSection={
						"what-we-offer__assess-property"
					}
					reverseRow={true}
					title={"valuta ora una tua proprieta'!"}
				>
					<div className={`${CLASSES.CARD_INFO}`}>
						<p
							className={
								"text-xl uppercase text-center w-full"
							}
						>
							Tante novita'!
						</p>
						<p className="ml-4">
							<br />
							Da ora puoi valutare la tua proprietà
							direttamente sul nostro sito
							<br />
							<br />
							Oppure contattando <br />
							un nostro operatore al numero:
							<br />
							0289623520.
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

export default WhatWeOffer;

// CSS
import "./illustrations.css";

//React
import React from "react";

// Illustrations
import icon1 from "../../../assets/images/icon1Home.jpg";
import icon2 from "../../../assets/images/icon2Home.jpg";
import icon3 from "../../../assets/images/icon3Home.jpg";

// Routing
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../../utils/properties";

// Components
import Button from "../UI/Button/Button";

const Illustrations = (props) => {
	const params = useParams();
	const navigate = useNavigate();
	const navigateTo = (dest) => () => {
		navigate(dest);
	};

	const { t } = useTranslation();

	return (
		<div className="max-w-6xl mt-16 mx-auto">
			<h1 className="font-primary text-3xl font-semibold text-center mt-5 mb-6 sm:ml-44 sm:text-4xl lg:ml-6">
				{t("Illustrations.title")}
			</h1>
			<div className=" flex flex-col md:flex-row justify-between">
				<Item
					img={icon1}
					label={t("Illustrations.1")}
					onClick={navigateTo(
						`/${params.lang}/${ROUTES.FE.BASE.WHAT_WE_OFFER}`
					)}
				/>

				<Item
					img={icon2}
					label={t("Illustrations.2")}
					onClick={navigateTo(`/${params.lang}/${ROUTES.FE.BASE.MAP}`)}
				/>
				<Item
					img={icon3}
					label={t("Illustrations.3")}
					onClick={navigateTo(
						`/${params.lang}/${ROUTES.FE.BASE.ABOUT_US}`
					)}
				/>
			</div>
		</div>
	);
};

const Item = ({ img, label, onClick }) => {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col justify-center items-center mt-8 mb-12">
			<img className="h-full mb-2" src={img}></img>
			<p className="text-center font-primary text-xl">{label} </p>
			<Button
				marginTop={5}
				label={t("Illustrations.Item.go")}
				onClick={onClick}
			/>
		</div>
	);
};

export default Illustrations;

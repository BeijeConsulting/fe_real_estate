import React, { useEffect, useState }  from "react";
import "./carousel.css";

//Components
import RenderAdvs from "../AdvCard/RenderAdvs";

//Images


// routing
import { useTranslation } from "react-i18next";
import { getLatestAds } from "../../../services/frontend/advertisementApi";

const Carousel = () => {
	const { t } = useTranslation();

	const [state, setState ] = useState([])

	useEffect(() => {
	  getLatestAds().then(res => {
		  setState(res.data)
	  })
	}, [])
	

	return (
		<div className="flex flex-col">
			<h1 className="text-3xl font-bold mt-8 mx-auto md:ml-20 font-primary color-secondary">
				{t("Carousel.title")}
			</h1>
			<div className="flex flex-1 justify-center flex-col mx-auto md:flex-row md:ml-14">
				<RenderAdvs horizontal data={state} />
			</div>
		</div>
	);
};

export default Carousel;

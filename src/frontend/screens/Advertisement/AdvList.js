import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// COMPONENTS
import Button from "../../components/UI/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import AdvCard from "../../components/AdvCard/AdvCard";
import Filters from "../../components/Filters/Filters";

// API
import { findAds } from "../../../services/frontend/advertisementApi";

import useURLQuery from "../../hooks/useQuery";
import { Select } from "antd";

const { Option } = Select;

const AdvList = () => {
	let { city, advType, buildingType, lang } = useParams();
	let query = useURLQuery();
	let location = useLocation();

	const [advList, setAdvList] = useState([]);
	let navigate = useNavigate();

	let type = "";
	const cityCapital = city.charAt(0).toUpperCase() + city.slice(1);

	useEffect(() => {
		findAds({
			advType: advType.toUpperCase(),
			city: cityCapital,
			buildingType: buildingType.toUpperCase(),
			maxPrice: query.get("maxPrice"),
			minPrice: query.get("minPrice"),
			balcony: query.get("balcony"),
			basement: query.get("basement"),
			pool: query.get("pool"),
			terrace: query.get("terrace"),
		}).then((res) => {
			setAdvList(res.data);
		});
	}, [location.search, location.pathname]);

	const handleNavigate = (dest) => () => {
		navigate(dest);
	};

	switch (advType) {
		case "rent":
			type = "Affitto";
			break;
		case "sale":
			type = "Vendita";
			break;
		case "short_rent":
			type = "Affito Breve";
			break;
	}

	const handleAdvRender = (adv, key) => {
		return (
			<AdvCard
				key={"advard-" + key + adv.id}
				id={adv.id}
				city={adv.city}
				squareMeters={adv.areaMsq}
				description={adv?.longDescription}
				roomNumber={adv.rooms}
				price={adv.price}
				onClick={handleNavigate(`/${lang}/adv/${adv.id}`)}
				authorName={adv.seller.username}
			/>
		);
	};

	return (
		<div className="min-h-screen bg-gray">
			<Navbar />

			<div className="max-w-6xl mx-auto mt-10 flex">
				<Button
					iconPosition="left"
					label="Torna alla Home"
					type="secondary"
					onClick={handleNavigate("/")}
				/>
			</div>

			<div className="max-w-5xl lg:max-w-6xl p-2 mx-auto">
				<p className="text-3xl font-bold">
					Ho trovato {advList.length} {buildingType} in {type} a {cityCapital}{" "}
				</p>

				<Select className="w-40" placeholder="Ordina per..">
					<Option>Dal meno caro</Option>
					<Option>Dal piu' caro</Option>
				</Select>

				<div className="flex mt-10 space-x-4">
					<div style={{ flex: 2 }}>
						{/* CARD LIST HERE */}
						{advList.map(handleAdvRender)}
					</div>
					<div className="flex-1 md:block hidden">
						<Filters />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdvList;

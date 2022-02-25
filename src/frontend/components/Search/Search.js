import React, { useState, useEffect } from "react";

//COMPONENTS
import SearchSelect from "./SearchSelect";
import Button from "../UI/Button/Button";
import LocationSelect from "./LocationSelect";

// CONSTS
import { ADV_TYPES, BUILDING_TYPES } from "../../../common/utils/globalTypes";
import { ROUTES } from "../../../utils/properties";

import { useNavigate } from "react-router-dom";
import { findAds } from "../../../services/frontend/advertisementApi";


const Search = () => {
	let navigate = useNavigate();

	const [results, setResults] = useState([])
	const [query, setQuery] = useState({
		buildingType: { label: "Casa", value: "HOUSE" },
		advType: { label: "Vendita", value: "SALE" },
		location: "Scegli dove...",
	});

	

	let imgUrl = "https://www.lago.it/wp-content/uploads/2017/10/Lago-Appartamento-Store-Arnhem-1.jpg";


	useEffect(() => {
		findAds({
			advType: query.advType.value.toUpperCase(),
			city: query.location,
			buildingType: query.buildingType.value.toUpperCase()
		}).then(res => {
			setResults(res.data)
		})
	}, [query])
	

	const setBuildingType = (value) => { setQuery({ ...query, buildingType: value }); }
	const setAdvType = (value) => { setQuery({ ...query, advType: value }); }
	const setLocation = (value) => { setQuery({ ...query, location: value }); }

	const handleSubmit = () => {
		let newUrl = ROUTES.FE.BASE.ADS_LIST.getPath(
			query.advType.value,
			query.buildingType.value,
			query.location
		);

		navigate(newUrl.toLowerCase());
	};

	return (
		<div className="select-none flex-1 flex flex-col justify-center items-center">
			<div className="flex flex-col md:flex-row text-white z-30 text-5xl space-x-2">
				<p>Cerco</p>
				<SearchSelect
					ico=""
					value={query.buildingType.label}
					callback={setBuildingType}
					options={BUILDING_TYPES}
				/>
				<p>in</p>
				<SearchSelect
					ico=""
					value={query.advType.label}
					callback={setAdvType}
					options={ADV_TYPES}
				/>
				<p>a</p>
				<LocationSelect
					ico=""
					value={query.location}
					callback={setLocation}
				/>
			</div>

			<Button
				disabled={results.length <= 0 ? true : false}
				type="primary"
				size={26}
				label={ results.length >= 1 ? `VEDI ${results.length} CASE` : `NON HO TROVATO CASE`}
				marginTop={25}
				onClick={handleSubmit}
			/>

			{/* BACKGROUND OVERLAY + BG */}
			<div
				className="flex-1 absolute inset-0 -z-20"
				style={{
					backgroundImage: `url(${imgUrl})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="absolute inset-0 flex-1 bg-black opacity-70 -z-10" />
		</div>
	);
};

export default Search;

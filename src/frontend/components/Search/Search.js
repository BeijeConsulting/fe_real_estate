import React, { useState, useEffect } from "react";

//COMPONENTS
import SearchSelect from "./SearchSelect";
import Button from "../UI/Button/Button";
import LocationSelect from "./LocationSelect";

// CONSTS
import { ADV_TYPES, BUILDING_TYPES } from "../../../common/utils/globalTypes";
import { ROUTES } from "../../../utils/properties";

//routing
import { useNavigate } from "react-router-dom";

// api
import { findAds } from "../../../services/frontend/advertisementApi";

// lang
import { useTranslation } from "react-i18next";

const Search = () => {
	const { t } = useTranslation();
	let navigate = useNavigate();

	const [results, setResults] = useState(0);
	const [query, setQuery] = useState({
		buildingType: { label: "Casa", value: "HOUSE" },
		advType: { label: "Vendita", value: "SALE" },
		location: "",
	});

	let imgUrl =
		"https://www.lago.it/wp-content/uploads/2017/10/Lago-Appartamento-Store-Arnhem-1.jpg";

	useEffect(() => {
		findAds({
			advType: query.advType.value.toUpperCase(),
			city: query.location,
			buildingType: query.buildingType.value.toUpperCase(),
		}).then((res) => {
			setResults(res.data.totRecords);
		});
	}, [query]);

	const setBuildingType = (value) => {
		setQuery({ ...query, buildingType: value });
	};
	const setAdvType = (value) => {
		setQuery({ ...query, advType: value });
	};
	const setLocation = (value) => {
		setQuery({ ...query, location: value });
	};

	const handleSubmit = () => {
		let newUrl = ROUTES.FE.BASE.ADS_LIST.getPath(
			query.advType.value,
			query.buildingType.value,
			query.location
		);

		navigate(newUrl.toLowerCase());
	};

	const mapBuildingTypes = () => {
		return BUILDING_TYPES.map((type) => ({
			...type,
			label: t(`Search.buildingTypeSingular.${type.value.toLowerCase()}`),
		}));
	};

	const mapAdvTypes = () => {
		return ADV_TYPES.map((type) => ({
			...type,
			label: t(`Search.advType.${type.value.toLowerCase()}`),
		}));
	};

	const buttonMessage = () => {
		let mess = "";
		if (results < 1) {
			mess += `${t(`Search.button.notFound`)} ${t(
				`Search.buildingTypePlural.${query.buildingType.value.toLowerCase()}`
			).toLowerCase()}`;
		} else {
			mess += `${t(`Search.button.see`)} ${results} `;

			if (results > 1) {
				mess += t(
					`Search.buildingTypePlural.${query.buildingType.value.toLowerCase()}`
				).toLowerCase();
			} else {
				mess += t(
					`Search.buildingTypeSingular.${query.buildingType.value.toLowerCase()}`
				).toLowerCase();
			}
		}

		return mess;
	};

	return (
		<div className="select-none flex flex-col justify-center items-center">
			<div className="flex flex-col text-4xl md:flex-row text-white z-30 md:text-5xl md:space-x-2">
				<div className="flex pb-4 md:pb-0 ">
					<p className="pr-2">{t(`Search.search`)}</p>
					<SearchSelect
						ico=""
						value={t(
							`Search.buildingTypeSingular.${query.buildingType.value.toLowerCase()}`
						)}
						callback={setBuildingType}
						options={mapBuildingTypes()}
					/>
				</div>
				<div className="flex pb-4 md:pb-0 ">
					<p className="pr-2">{t(`Search.for`)}</p>
					<SearchSelect
						ico=""
						value={t(`Search.advType.${query.advType.value.toLowerCase()}`)}
						callback={setAdvType}
						options={mapAdvTypes()}
					/>
				</div>
				<div className="flex pb-4 md:pb-0 ">
					<p className="pr-2">{t(`Search.in`)}</p>
					<LocationSelect
						ico=""
						value={
							query.location !== ""
								? query.location
								: t("Search.locationDefault")
						}
						callback={setLocation}
					/>
				</div>
			</div>

			<Button
				disabled={results <= 0 ? true : false}
				type="primary"
				size={26}
				label={buttonMessage()}
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

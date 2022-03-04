import React, { useEffect, useState } from "react";

// COMPONENTS
import Button from "../../components/UI/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import AdvCard from "../../components/AdvCard/AdvCard";
import Filters from "../../components/Filters/Filters";
import { Select } from "antd";

//UTILS
import sortList from "../../../common/utils/sortList";
import { LOCAL_STORAGE_KEYS } from "../../../common/utils/storage";

// imgs
import noHouseFound from "../../assets/illustrations/noHouseFound.svg";
import { useTranslation } from "react-i18next";
// API
import { findAds } from "../../../services/frontend/advertisementApi";
import { getUserSavedAds } from "../../../services/frontend/usersApi";

// HOOKS
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useURLQuery from "../../hooks/useQuery";

//redux
import { connect } from "react-redux";
import AdvCardSkeleton from "../../components/AdvCard/AdvCardSkeleton";

const { Option } = Select;

const AdvList = (props) => {
	// hooks
	let { city, advType, buildingType, lang } = useParams();
	let query = useURLQuery();
	let location = useLocation();
	let navigate = useNavigate();
	let { t } = useTranslation();

	const [advList, setAdvList] = useState({ data: [], loading: true });
	const [sortType, setSortType] = useState();

	let cityCapital = city.charAt(0).toUpperCase() + city.slice(1);

	// GET Adv List with Filters
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
			let list = [...res.data.resList];

			if (sortType) {
				setAdvList({ loading: false, data: sortList(sortType, list) });
			} else {
				setAdvList({ loading: false, data: list });
			}
		});
	}, [location.search, location.pathname, sortType]);

	// GET User saved Ads
	useEffect(() => {
		let token = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_TOKEN);

		if (token) {
			getUserSavedAds(props.dispatch);
		}
	}, []);

	const handleNavigate = (dest) => () => navigate(dest);
	const handleSorting = (e) => setSortType(e);

	const handleAdvRender = (adv, key) => {
		return (
			<AdvCard
				key={"advard-" + key + adv.id}
				savedAds={props.savedAds}
				id={adv.id}
				advType={adv.advType}
				city={adv.city}
				address={adv.address}
				squareMeters={adv.areaMsq}
				description={adv?.longDescription}
				roomNumber={adv.rooms}
				price={adv.price}
				onClick={handleNavigate(`/${lang}/adv/${adv.id}`)}
				onAuthorClick={handleNavigate(
					`/${lang}/users-section/public-profile/${adv.seller.username}`
				)}
				authorName={adv.seller.username}
				business={adv.seller.business}
			/>
		);
	};

	const render = () => {
		if (advList.loading) {
			return (
				<>
					<AdvCardSkeleton />
					<AdvCardSkeleton />
					<AdvCardSkeleton />
				</>
			);
		} else if (advList.data.length >= 1) {
			return advList.data.map(handleAdvRender);
		} else {
			return (
				<div className="font-primary text-center">
					<img
						className="mx-auto max-h-80 mb-6"
						src={noHouseFound}
						alt="no house found"
					/>
					<p className="text-3xl font-bold">
						{t("AdvList.NotFound")}{" "}
						{t(`AdvList.buildingTypePlural.${buildingType}`)}{" "}
						{t("AdvList.ForYou")}
					</p>
					<p className="">{t("AdvList.UnderConstruction")}</p>
				</div>
			);
		}
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
					{t("AdvList.found")} {advList.data.length}{" "}
					{advList.data.length > 1
						? t(`AdvList.buildingTypePlural.${buildingType}`)
						: t(`AdvList.buildingTypeSingular.${buildingType}`)}{" "}
					{t("AdvList.in")} {t(`AdvList.advType.${advType}`)} {t("AdvList.a")}{" "}
					{cityCapital}{" "}
				</p>

				<Select
					onChange={handleSorting}
					className="w-40 mt-6"
					placeholder={t("AdvList.SortBy")}
				>
					<Option value="price-asc">{t("AdvList.Cheapest")}</Option>
					<Option value="price-desc">{t("AdvList.MostExpensive")}</Option>
				</Select>

				<div className="flex mt-10 space-x-4">
					<div style={{ flex: 2 }}>
						{/* CARD LIST HERE */}

						{render()}
					</div>
					<div className="flex-1 md:block hidden">
						<Filters />
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	savedAds: state.userMeDuck.savedAds,
});

export default connect(mapStateToProps)(AdvList);

import React, { useState } from "react";
import { Steps, Divider, Select, Input, Checkbox } from "antd";

//Components
import Button from "../../components/UI/Button/Button";
import CircleButton from "../../components/UI/CircleButton/CircleButton";

//Utils
import {
	ADV_TYPES,
	BUILDING_TYPES,
	CONDITION,
	COOLING,
	DEED_STATES,
	FURNITURE,
	YARD,
} from "../../../common/utils/globalTypes";
import storage from "../../../common/utils/storage";

//Translation
import { useTranslation } from "react-i18next";

//POST
import { addNewAdv } from "../../../services/frontend/advertisementApi";
//Css
import "./NewAdv.css";
import Textarea from "../../components/UI/Textarea/Textarea";

const NewAdv = (props) => {
	const [current, setCurrent] = useState(0);

	const [state, setState] = useState({
		address: "",
		advType: ADV_TYPES[0],
		areaMsq: "",
		attic: false,
		balcony: false,
		basement: false,
		bathrooms: 0,
		buildingType: BUILDING_TYPES[0],
		buildingYear: "",
		city: "",
		condition: CONDITION.NEW,
		cooling: COOLING.NO,
		description: "",
		deedState: DEED_STATES.FREE,
		elevator: false,
		energyRating: "",
		floor: 0,
		floors: 0,
		furniture: FURNITURE.NO,
		guidedTour: false,
		heating: "",
		houseNumber: "",
		parkingSpots: 0,
		pool: false,
		price: "",
		reception: false,
		rooms: 0,
		terrace: false,
		virtualTour: false,
		yard: YARD.NO,
		zipCode: "",
	});

	const { Step } = Steps;
	const { Option } = Select;

	const { t } = useTranslation();

	const postAd = async () => {
		let token = localStorage.getItem(storage.LOCAL_STORAGE_KEYS.USER_TOKEN);
		const body = {
			...state,
			areaMsq: parseInt(state.areaMsq),
			buildingYear: parseInt(state.buildingYear),
			houseNumber: parseInt(state.houseNumber),
			price: parseInt(state.price),
		};
		console.log(body);
		const adv = await addNewAdv(
			// {
			// 	advType: body.advType,
			// 	city: body.city,
			// 	zipCode: body.zipCode,
			// 	address: body.address,
			// 	houseNumber: body.houseNumber,
			// 	areaMsq: body.areaMsq,
			// 	buildingType: body.buildingType,
			// 	deedState: body.deedState,
			// 	guidedTour: body.guidedTour,
			// 	virtualTour: body.virtualTour,
			// },
			body,
			token
		)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	const switchCheck = (key) => () => {
		const newState = { ...state };
		newState[key] = !newState[key];
		setState(newState);
	};

	const handlerInput = (key) => (e) => {
		const newState = { ...state };
		newState[key] = e.target.value;
		setState(newState);
	};

	const handleSelectPropertyChange = (key) => (value) => {
		const newState = { ...state };
		newState[key] = value;
		setState(newState);
	};

	const increment = (key) => (e) => {
		e.preventDefault();
		const newState = { ...state };
		newState[key] = newState[key] + 1;
		setState(newState);
	};
	const decrement = (key) => (e) => {
		e.preventDefault();
		const newState = { ...state };

		if (newState[key] > 0) {
			newState[key] = newState[key] - 1;
			setState(newState);
		}
	};

	const optionType = (type, key) => {
		return (
			<Option key={"new-adv " + key} value={type.value}>
				{type.label}
			</Option>
		);
	};

	const handleStepChange = (current) => {
		setCurrent(current);
	};

	const goNext = () => {
		setCurrent(current + 1);
	};

	const goBack = () => {
		setCurrent(current - 1);
	};

	return (
		<>
			<div className="my-4">
				<h1 className="uppercase font-primary font-light text-center text-4xl">
					{t("NewAdv.Title")}
				</h1>
			</div>

			<div className="new-adv-container ">
				<div className="md:flex justify-center gap-2">
					<div style={{ marginTop: "26px" }} className="md:flex ml-4 mb-0 ">
						<Steps
							direction="vertical"
							current={current}
							onChange={handleStepChange}
						>
							<Step />
							<Step />
							<Step />
							<Step />
						</Steps>
					</div>

					<Divider type="vertical" />

					<form className="flex flex-col mx-4 mt-4 mb-0">
						{current === 0 && (
							<div>
								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										{t("NewAdv.BuildingType")}
									</label>
									<Select
										className="w-full"
										defaultValue="Specifica una tipologia..."
										onChange={handleSelectPropertyChange("buildingType")}
										value={state.buildingType}
									>
										{BUILDING_TYPES.map(optionType)}
									</Select>
								</div>

								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										{t("NewAdv.AdvType")}
									</label>
									<Select
										className="w-full"
										defaultValue="NO"
										onChange={handleSelectPropertyChange("advType")}
										value={state.advType}
									>
										{ADV_TYPES.map(optionType)}
									</Select>
								</div>

								<div className="flex gap-3">
									<div className="mb-5">
										<label className="block uppercase font-primary color-secondary">
											{t("NewAdv.City")}
										</label>
										<Input
											placeholder={t("NewAdv.CityPlaceholder")}
											onChange={handlerInput("city")}
											value={state.city}
										/>
									</div>

									<div className="mb-5">
										<label className="block uppercase font-primary color-secondary">
											{t("NewAdv.ZIP")}
										</label>
										<Input
											type={"number"}
											placeholder={t("NewAdv.ZIPPlaceholder")}
											onChange={handlerInput("zipCode")}
											value={state.zipCode}
										/>
									</div>
								</div>

								<div className="flex gap-3 ">
									<div className="mb-5">
										<label className="block uppercase font-primary color-secondary">
											{t("NewAdv.Address")}
										</label>
										<Input
											placeholder={t("NewAdv.AddressPlaceholder")}
											onChange={handlerInput("address")}
											value={state.address}
										/>
									</div>

									<div className="mb-5">
										<label className="block uppercase font-primary color-secondary">
											{t("NewAdv.HouseNumber")}
										</label>
										<Input
											type={"number"}
											placeholder={t("NewAdv.HouseNumberPlaceholder")}
											onChange={handlerInput("houseNumber")}
											value={state.houseNumber}
										/>
									</div>
								</div>

								<div className="mb-5">
									<label
										className="uppercase font-primary color-secondary"
										style={{ display: "block" }}
									>
										{t("NewAdv.Footage")}
									</label>
									<Input
										type={"number"}
										placeholder={t("NewAdv.FootagePlaceholder")}
										onChange={handlerInput("areaMsq")}
										value={state.areaMsq}
									/>
								</div>

								<div className="mb-5">
									<label
										className="uppercase font-primary color-secondary"
										style={{ display: "block" }}
									>
										Anno immobile
									</label>
									<Input
										type={"number"}
										placeholder="Esempio: 2010"
										onChange={handlerInput("buildingYear")}
										value={state.buildingYear}
									/>
								</div>
								<Button label="Avanti" onClick={goNext} />
							</div>
						)}
						{current === 1 && (
							<div className="flex flex-col mx-auto">
								{/* <div className="grid grid-cols-3"> */}

								<div className="flex flex-wrap gap-2">
									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											{t("NewAdv.Balcony")}
										</label>
										<Checkbox
											onChange={switchCheck("balcony")}
											checked={state.balcony}
										/>
									</div>

									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											{t("NewAdv.Elevator")}
										</label>
										<Checkbox
											onChange={switchCheck("elevator")}
											checked={state.elevator}
										/>
									</div>

									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											{t("NewAdv.Pool")}
										</label>
										<Checkbox
											onChange={switchCheck("pool")}
											checked={state.pool}
										/>
									</div>
								</div>

								<div className="flex flex-wrap gap-2">
									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											{t("NewAdv.Attic")}
										</label>
										<Checkbox
											onChange={switchCheck("attic")}
											checked={state.attic}
										/>
									</div>

									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											{t("NewAdv.Basement")}
										</label>
										<Checkbox
											onChange={switchCheck("basement")}
											checked={state.basement}
										/>
									</div>

									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											{t("NewAdv.Terrace")}
										</label>
										<Checkbox
											onChange={switchCheck("terrace")}
											checked={state.terrace}
										/>
									</div>
								</div>
								<div className="flex flex-wrap gap-2">
									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											{t("NewAdv.Reception")}
										</label>
										<Checkbox
											onChange={switchCheck("reception")}
											checked={state.reception}
										/>
									</div>
								</div>

								<div className="mb-5">
									<label className="uppercase font-primary color-secondary mr-3">
										{t("NewAdv.ParkingSpot")}
									</label>
									<div className="flex mr-2">
										<CircleButton
											label="-"
											onClickCallback={decrement("parkingSpots")}
										/>
										<span className="text-lg font-semibold my-2 mx-3">
											{state.parkingSpots}
										</span>
										<CircleButton
											label="+"
											onClickCallback={increment("parkingSpots")}
										/>
									</div>
								</div>
								<div className="flex flex-wrap mx-auto">
									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											{t("NewAdv.Bathrooms")}
										</label>
										<div className="flex mr-2">
											<CircleButton
												label="-"
												onClickCallback={decrement("bathrooms")}
											/>
											<span className="text-lg font-semibold my-2 mx-3">
												{state.bathrooms}
											</span>
											<CircleButton
												label="+"
												onClickCallback={increment("bathrooms")}
											/>
										</div>
									</div>

									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											{t("NewAdv.Rooms")}
										</label>
										<div className="flex mr-2">
											<CircleButton
												label="-"
												onClickCallback={decrement("rooms")}
											/>
											<span className="text-lg font-semibold my-2 mx-3">
												{state.rooms}
											</span>
											<CircleButton
												label="+"
												onClickCallback={increment("rooms")}
											/>
										</div>
									</div>
								</div>

								<div className="flex flex-wrap mx-auto">
									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-1">
											{t("NewAdv.Floor")}
										</label>
										<div className="flex mr-2">
											<CircleButton
												label="-"
												onClickCallback={decrement("floor")}
											/>
											<span className="text-lg font-semibold my-2 mx-3">
												{state.floor}
											</span>
											<CircleButton
												label="+"
												onClickCallback={increment("floor")}
											/>
										</div>
									</div>

									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-1">
											{t("NewAdv.TotalFloors")}
										</label>
										<div className="flex mr-2">
											<CircleButton
												label="-"
												onClickCallback={decrement("floors")}
											/>
											<span className="text-lg font-semibold my-2 mx-3">
												{state.floors}
											</span>
											<CircleButton
												label="+"
												onClickCallback={increment("floors")}
											/>
										</div>
									</div>
								</div>

								<div className="flex gap-2 justify-center">
									<Button
										iconPosition="left"
										className="w-36"
										label="Indietro"
										onClick={goBack}
									/>
									<Button
										className={"w-36"}
										label={t("NewAdv.Next")}
										onClick={goNext}
									/>
								</div>
							</div>
						)}
						{current === 2 && (
							<div>
								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										{t("NewAdv.PropertyCondition")}
									</label>
									<Select
										defaultValue="NEW"
										style={{ width: "100%" }}
										onChange={handleSelectPropertyChange("condition")}
										value={state.condition}
									>
										<Option value="NEW">New</Option>
										<Option value="GOOD">Good</Option>
										<Option value="RENOVATE">Renovate</Option>
									</Select>
								</div>

								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										{t("NewAdv.EnergyRating")}
									</label>
									<Select
										defaultValue="Energy rating"
										style={{ width: "100%" }}
										onChange={handleSelectPropertyChange("energyRating")}
										value={state.energyRating}
									>
										<Option value="A_Plus">A+</Option>
										<Option value="A">A</Option>
										<Option value="B">B</Option>
										<Option value="C">C</Option>
										<Option value="D">D</Option>
										<Option value="E">E</Option>
										<Option value="F">F</Option>
										<Option value="G">G</Option>
									</Select>
								</div>

								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										Deed state
									</label>
									<Select
										defaultValue="FREE"
										style={{ width: "100%" }}
										onChange={handleSelectPropertyChange("deedState")}
										value={state.deedState}
									>
										<Option value="BARE_PROPERTY">Bare property</Option>
										<Option value="FREE">Free</Option>
										<Option value="OCCUPATED">Occupated</Option>
										<Option value="RENTED">Rented</Option>
									</Select>
								</div>

								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										{t("NewAdv.Furniture")}
									</label>
									<Select
										defaultValue="----"
										style={{ width: "100%" }}
										onChange={handleSelectPropertyChange("furniture")}
										value={state.furniture}
									>
										<Option value="FURNISHED">FURNISHED</Option>
										<Option value="NO">NO</Option>
										<Option value="PARTIAL">PARTIAL</Option>
									</Select>
								</div>

								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										{t("NewAdv.Heating")}
									</label>
									<Select
										defaultValue="Riscaldamento"
										style={{ width: "100%" }}
										onChange={handleSelectPropertyChange("heating")}
										value={state.heating}
									>
										<Option value="CENTRAL">Central</Option>
										<Option value="INDIPENDENT">indipendent</Option>
										<Option value="NO">No</Option>
									</Select>
								</div>

								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										{t("NewAdv.AirCon")}
									</label>
									<Select
										defaultValue="NO"
										style={{ width: "100%" }}
										onChange={handleSelectPropertyChange("cooling")}
										value={state.cooling}
									>
										<Option value="CENTRAL">Central</Option>
										<Option value="DISPOSITION">Disposition</Option>
										<Option value="INDIPENDENT">indipendent</Option>
										<Option value="NO">No</Option>
									</Select>

									<div className="mt-5 mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											{t("NewAdv.Garden")}
										</label>
										<Select
											defaultValue="NO"
											style={{ width: "100%" }}
											onChange={handleSelectPropertyChange("yard")}
											value={state.yard}
										>
											<Option value="SHARED">Shared</Option>
											<Option value="PRIVATE">Private</Option>
											<Option value="NO">No</Option>
										</Select>
									</div>

									<div className="flex gap-2 justify-center">
										<Button
											iconPosition="left"
											className={"w-36"}
											label="Indietro"
											onClick={goBack}
										/>
										<Button
											className={"w-36"}
											label={t("NewAdv.Next")}
											onClick={goNext}
										/>
									</div>
								</div>
							</div>
						)}
						{current === 3 && (
							<div>
								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										{t("NewAdv.Price")}
									</label>
									<Input
										type={"number"}
										placeholder="Prezzo"
										onChange={handlerInput("price")}
										value={state.price}
									/>
								</div>
								<div className="flex flex-col mb-5">
									<label className="uppercase font-primary color-secondary mr-1">
										{t("NewAdv.Description")}
									</label>
									<Textarea
										className={"border-2 border-slate-300"}
										minHeight={"50px"}
										maxHeight={"250px"}
										onChange={handlerInput("description")}
										value={state.description}
									/>
								</div>

								<div className="mb-5">
									<label className="uppercase font-primary color-secondary mr-1">
										{t("NewAdv.GuidedTour")}
									</label>
									<Checkbox
										onChange={switchCheck("guidedTour")}
										checked={state.guidedTour}
									/>
								</div>

								<div className="mb-5">
									<label className="uppercase font-primary color-secondary mr-1">
										Vuoi fare una visita virtuale?
									</label>
									<Checkbox
										onChange={switchCheck("virtualTour")}
										checked={state.virtualTour}
									/>
								</div>

								<div className="mb-5">
									<input type="file" id="myFile" name="filename"></input>
								</div>

								<div className="flex gap-2 justify-center">
									<Button
										iconPosition="left"
										className={"md:w-36"}
										label="Indietro"
										onClick={goBack}
									/>
									<Button label={t("NewAdv.Post")} onClick={postAd} />
								</div>
							</div>
						)}
					</form>
				</div>
			</div>
		</>
	);
};

export default NewAdv;

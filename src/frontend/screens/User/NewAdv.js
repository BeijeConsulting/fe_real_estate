import React, { useState } from "react";
import { Steps, Divider, Select, Input, Checkbox } from "antd";

//Components
import Button from "../../components/UI/Button/Button";
import CircleButton from "../../components/UI/CircleButton/CircleButton";

//Utils
import { ADV_TYPES, BUILDING_TYPES } from "../../../common/utils/globalTypes";
import storage from "../../../common/utils/storage";

//POST
import { addNewAdv } from "../../../services/frontend/advertisementApi";
//Css
import "./NewAdv.css";
import Textarea from "../../components/UI/Textarea/Textarea";

const NewAdv = (props) => {
	const [current, setCurrent] = useState(0);

	const [state, setState] = useState({
		address: "",
		advType: "",
		areaMsq: "",
		attic: false,
		balcony: false,
		basement: false,
		bathrooms: 0,
		buildingType: "",
		buildingYear: "",
		city: "",
		condition: "",
		cooling: "",
		description: "",
		elevator: false,
		energyRating: "",
		floor: 0,
		floors: 0,
		furniture: "",
		guidedTour: false,
		heating: "",
		houseNumber: "",
		parkingSpots: false,
		pool: false,
		price: "",
		reception: false,
		rooms: 0,
		terrace: false,
		yard: "",
		zipCode: "",
	});

	const { Step } = Steps;
	const { Option } = Select;

	const postAd = async () => {
		let token = localStorage.getItem(storage.LOCAL_STORAGE_KEYS.USER_TOKEN);
		console.log(state);
		const adv = await addNewAdv(state, token).then((res) => {
			console.log(res);
		});
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
					Crea un nuovo annuncio
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
										Tipo di immobile
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
										Tipo di annuncio
									</label>
									<Select
										className="w-full"
										defaultValue="Specifica una tipologia..."
										onChange={handleSelectPropertyChange("advType")}
										value={state.advType}
									>
										{ADV_TYPES.map(optionType)}
									</Select>
								</div>

								<div className="flex gap-3">
									<div className="mb-5">
										<label className="block uppercase font-primary color-secondary">
											Città
										</label>
										<Input
											placeholder="Città"
											onChange={handlerInput("city")}
											value={state.city}
										/>
									</div>

									<div className="mb-5">
										<label className="block uppercase font-primary color-secondary">
											CAP
										</label>
										<Input
											type={"number"}
											placeholder="CAP"
											onChange={handlerInput("zipCode")}
											value={state.zipCode}
										/>
									</div>
								</div>

								<div className="flex gap-3 ">
									<div className="mb-5">
										<label className="block uppercase font-primary color-secondary">
											Indirizzo
										</label>
										<Input
											placeholder="Esempio: Viale Genova"
											onChange={handlerInput("address")}
											value={state.address}
										/>
									</div>

									<div className="mb-5">
										<label className="block uppercase font-primary color-secondary">
											Numero civico
										</label>
										<Input
											type={"number"}
											placeholder="Esempio: 11"
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
										Dimensioni
									</label>
									<Input
										type={"number"}
										placeholder="Esempio: 100 mq"
										onChange={handlerInput("areaMsq")}
										value={state.areaMsq}
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
											Balcone
										</label>
										<Checkbox
											onChange={switchCheck("balcony")}
											checked={state.balcony}
										/>
									</div>

									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											Ascensore
										</label>
										<Checkbox
											onChange={switchCheck("elevator")}
											checked={state.elevator}
										/>
									</div>

									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											Piscina
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
											Soffitta
										</label>
										<Checkbox
											onChange={switchCheck("attic")}
											checked={state.attic}
										/>
									</div>

									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											Cantina
										</label>
										<Checkbox
											onChange={switchCheck("basement")}
											checked={state.basement}
										/>
									</div>

									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											Terrazzo
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
											Portineria
										</label>
										<Checkbox
											onChange={switchCheck("reception")}
											checked={state.reception}
										/>
									</div>

									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											Posto auto
										</label>
										<Checkbox
											onChange={switchCheck("parkingSpots")}
											checked={state.parkingSpots}
										/>
									</div>
								</div>

								{/* </div> */}

								<div className="flex flex-wrap mx-auto">
									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											N. Bagni
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
											N. Camere
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
											N. Piano
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
											N. Piani Totali
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
										className={"w-36"}
										label="Indietro"
										onClick={goBack}
									/>
									<Button className={"w-36"} label="Avanti" onClick={goNext} />
								</div>
							</div>
						)}
						{current === 2 && (
							<div>
								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										Condizioni immobile
									</label>
									<Select
										defaultValue="In che condizioni è l'immobile?"
										style={{ width: "100%" }}
										onChange={handleSelectPropertyChange("condition")}
										value={state.condition}
									>
										<Option value="new">New</Option>
										<Option value="good">Good</Option>
										<Option value="renovate">Renovate</Option>
									</Select>
								</div>

								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										Classe energetica
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
										È arredato?
									</label>
									<Select
										defaultValue="----"
										style={{ width: "100%" }}
										onChange={handleSelectPropertyChange("furniture")}
										value={state.furniture}
									>
										<Option value="furnished">FURNISHED</Option>
										<Option value="no">NO</Option>
										<Option value="partial">PARTIAL</Option>
									</Select>
								</div>

								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										Riscaldamento
									</label>
									<Select
										defaultValue="Riscaldamento"
										style={{ width: "100%" }}
										onChange={handleSelectPropertyChange("heating")}
										value={state.heating}
									>
										<Option value="central">Central</Option>
										<Option value="indipendent">indipendent</Option>
										<Option value="no">No</Option>
									</Select>
								</div>

								<div className="mb-5">
									<label className="block uppercase font-primary color-secondary">
										Aria condizionata
									</label>
									<Select
										defaultValue="Cooling"
										style={{ width: "100%" }}
										onChange={handleSelectPropertyChange("cooling")}
										value={state.cooling}
									>
										<Option value="central">Central</Option>
										<Option value="disposition">Disposition</Option>
										<Option value="indipendent">indipendent</Option>
										<Option value="no">No</Option>
									</Select>

									<div className="mb-5">
										<label className="uppercase font-primary color-secondary mr-3">
											Giardino
										</label>
										<Select
											defaultValue="Giardino"
											style={{ width: "100%" }}
											onChange={handleSelectPropertyChange("yard")}
											value={state.yard}
										>
											<Option value="shared">Shared</Option>
											<Option value="private">Private</Option>
											<Option value="no">No</Option>
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
											label="Avanti"
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
										Prezzo
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
										Descrizione
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
										Vuoi fare una visita guidata?
									</label>
									<Checkbox
										onChange={switchCheck("guidedTour")}
										checked={state.guidedTour}
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
									<Button label="Pubblica" onClick={postAd} />
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

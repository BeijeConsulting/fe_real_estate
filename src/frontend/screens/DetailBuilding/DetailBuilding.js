import "./detailBuilding.css";
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";

//Images
import Avatar from "../../assets/images/jardin.jpeg";

//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt, faHeart,
	faMapLocationDot,
	faBath, faDoorOpen,
	faMaximize, faStairs,
	faHouse, faCalendarDays
} from "@fortawesome/free-solid-svg-icons";

//API
import javaAcademyService from "../../../services/javaAcademyService";

//Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/UI/Card/Card";
import BuildingInfobox from "../../components/BuildingInfobox/BuildingInfobox";
import ContactSeller from "../../components/ContactSeller/ContactSeller";
import Property3DView from "../../components/Property3DView/Property3DView";

class DetailBuilding extends Component {
	constructor(props) {
		super(props);

		this.state = {
			adv: {},
			data: [
				{
					image:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1Lpa3Gb4GhJLkprEGpKo_vP8lNMOwnLT7rUN_vDiNnX2YSEYl6WGc1nsNEJ8bqZeWOY&usqp=CAU",
				},
				{
					image:
						"https://www.easyrelooking.com/wp-content/uploads/taverna4_EasyRelooking.jpg",
				},
				{
					image:
						"https://www.diotti.com/media/wysiwyg/easyrelooking/easyrelooking-render-02.jpg",
				},
			],
			canvasView: false
		};
	}

	getApiDetailBuilding = () => {
		javaAcademyService.getDetailBuilding(this.props.params.buildingId).then((res) => {
			const adv = res.data;
			let details = {};
			if (!!adv) {
				details = {
					address: adv.address,
					advType: adv.advType,
					areaMsq: adv.areaMsq,
					attic: adv.attic,
					balcony: adv.balcony,
					basement: adv.basement,
					bathrooms: adv.bathrooms,
					buildingType: adv.buildingType,
					buildingYear: adv.buildingYear,
					city: adv.city,
					condition: adv.condition,
					cooling: adv.cooling,
					date: adv.publishedDateTime,
					deedState: adv.deedState,
					elevator: adv.elevator,
					energyRating: adv.energyRating,
					floor: adv.floor,
					floors: adv.floors,
					furniture: adv.furniture,
					guidedTour: adv.guidedTour,
					heating: adv.heating,
					houseNumber: adv.houseNumber,
					description: adv.longDescription,
					parkingSpots: adv.parkingSpots,
					pool: adv.pool,
					price: adv.price,
					reception: adv.reception,
					rooms: adv.rooms,
					terrace: adv.terrace,
					virtualTour: adv.virtualTour,
					yard: adv.yard,
					zipCode: adv.zipcode,
				};
			}

			this.setState({ adv: details });
		});
	}

	componentDidMount() {
		this.getApiDetailBuilding();
	}

	openCanvas = (e) => {
		e.stopPropagation();
		this.setState({ canvasView: true });
	};
	closeCanvas = (e) => {
		// e.stopPropagation();
		this.setState({ canvasView: false });
	};

	render() {
		return (
			<>
				<Navbar fixed />
				{this.state.canvasView && this.state.adv.virtualTour && (
					<div>
						<Property3DView onClickClose={this.closeCanvas} />
					</div>
				)}
				<div className="flex flex-col font-primary bg-slate-200">
					<div className="mx-auto xl:max-w-5xl xl:mx-auto">
						<div className="flex flex-row mt-20 bg-white p-1 md:p-3">
							<h1 className="text-xl ml-2 my-2 md:text-2xl font-bold bg-white rounded">
								BILOCALE IN PERIFERIA A NAPOLI
							</h1>
							<div className="mt-2 bg-primary border-2 border-blue-900 ml-2">
								<h1 className="text-xl font-bold color-secondary">
									{this.state.adv.advType}
								</h1>
							</div>
						</div>
						<div className="flex flex-col items-left md:flex-row bg-white rounded md:mx-auto">
							<Carousel
								width="750px"
								height="450px"
								data={this.state.data}
								radius="10px"
								slideNumber={true}
								dots={true}
								pauseIconColor="darkgrey"
								pauseIconSize="40px"
								slideBackgroundColor="darkgrey"
								slideImageFit="cover"
								thumbnails={true}
								thumbnailWidth="100px"
								style={{
									width: "75%",
									margin: "15px 25px",
								}}
							/>
							<div className={"flex flex-col md:h-60 md:w-1/4 p-2 md:mt-3 md:mx-auto"}>
								<div className="flex flex-row">
									<div className="flex flex-row mx-2">
										<FontAwesomeIcon
											className={"h-8 color-primary"}
											icon={faMapMarkerAlt}
										/>
										<h1 className="text-2xl font-bold mx-4 color-secondary uppercase">
											{this.state.adv.city}
										</h1>
									</div>
									<FontAwesomeIcon
										className={" h-6 text-gray-500"}
										icon={faHeart}
									/>

								</div>
								<div className="flex flex-col p-2 mt-3 gap-4">
									<div className="flex flex-row">
										<FontAwesomeIcon
											className={"text-xl text-gray-800 mt-0.5 mr-2"}
											icon={faMapLocationDot}
										/>
										<h1 className="text-lg font-medium">
											{this.state.adv.address}, {this.state.adv.houseNumber}
										</h1>
									</div>
									<div className="flex">
										<FontAwesomeIcon
											className={"text-xl text-gray-800 mt-0.5 mr-2"}
											icon={faMaximize} />
										<h1 className="text-lg font-medium">{this.state.adv.areaMsq} m<sup>2</sup> </h1>
									</div>
									<div className="flex">
										<FontAwesomeIcon
											className={"text-xl text-gray-800 mt-0.5 mr-2"}
											icon={faDoorOpen} />
										<h1 className="text-lg font-medium">{this.state.adv.rooms} camere</h1>
									</div>
									<div className="flex">
										<FontAwesomeIcon
											className={"text-xl text-gray-800 mt-0.5 mr-2"}
											icon={faBath} />
										<h1 className="text-lg font-medium">{this.state.adv.bathrooms} bagni</h1>
									</div>
									<div className="flex">
										<FontAwesomeIcon
											className={"text-xl text-gray-800 mt-0.5 mr-2"}
											icon={faHouse} />
										<h1 className="text-lg font-medium">{this.state.adv.condition}</h1>
									</div>
									<div className="flex">
										<FontAwesomeIcon
											className={"text-xl text-gray-800 mt-0.5 mr-2"}
											icon={faStairs} />
										<h1 className="text-lg font-medium">{this.state.adv.floor}° piano</h1>
									</div>
									<div className="flex">
										<FontAwesomeIcon
											className={"text-xl text-gray-800 mt-0.5 mr-2"}
											icon={faCalendarDays} />
										<h1 className="text-lg font-medium">Pubblicato il {new Date(this.state.adv.date).toLocaleDateString()}</h1>
									</div>
									<div className="price">
										{this.state.adv.price}€
									</div>
									<button onClick={this.openCanvas}>Open 3D View</button>
								</div>
							</div>
						</div>

						<div className="flex flex-col">
							<div className="flex flex-row m-2">
								<img className={"avatar"} src={Avatar} alt=""></img>
								<h3 className="text-lg font-semibold m-2">Jessica Beje</h3>
							</div>

							<div className="flex flex-col my-10 md:flex md:flex-row">
								<Card className="flex flex-col w-1/3 p-4 mr-6">
									<h1 className="text-2xl font-bold text-center">Descrizione</h1>
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a type
										specimen book.
									</p>
								</Card>
								<Card className="flex flex-col w-4/6 p-4">
									<h1 className="text-2xl text-center font-bold">
										Informazioni nel dettaglio
									</h1>
									<div className="flex flex-row">
										<BuildingInfobox
											title={"Ascensore:"}
											adv={this.state.adv.elevator}
										/>
										<BuildingInfobox
											title={"Reception:"}
											adv={this.state.adv.reception}
										/>
										<BuildingInfobox
											title={"Piscina:"}
											adv={this.state.adv.pool}
										/>
										<BuildingInfobox
											title={"Terrazza"}
											adv={this.state.adv.terrace}
										/>
										<BuildingInfobox
											title={"Soffitta"}
											adv={this.state.adv.attic}
										/>
										<BuildingInfobox
											title={"Balcone"}
											adv={this.state.adv.balcony}
										/>
									</div>
									<div className="flex flex-row">

										<BuildingInfobox
											title={"Cantina"}
											adv={this.state.adv.basement}
										/>

										<BuildingInfobox
											title={"Aria condizionata"}
											adv={this.state.adv.cooling}
										/>

										<BuildingInfobox
											title={"Classe energetica"}
											adv={this.state.adv.energyRating}
										/>
										<BuildingInfobox
											title={"Arredato"}
											adv={this.state.adv.furniture}
										/>
										<BuildingInfobox
											title={"Posto auto"}
											adv={this.state.adv.parkingSpots}
										/>
									</div>
									<div className="flex flex-row">
										<BuildingInfobox
											title={"Portineria"}
											adv={this.state.adv.reception}
										/>
										<BuildingInfobox
											title={"Giardino"}
											adv={this.state.adv.yard}
										/>
									</div>
								</Card>
							</div>
						</div>
						<ContactSeller />
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

const Wrap = (props) => {
	const params = useParams();
	return <DetailBuilding {...props} params={params} />;
};

export default Wrap;

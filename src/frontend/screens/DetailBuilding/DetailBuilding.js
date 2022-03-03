import "./detailBuilding.css";
import React, { Component } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";
import { withTranslation } from "react-i18next";


import getBuildingType from '../../../common/utils/getBuildingType'

//Images
import Avatar from "../../assets/images/avatar.png";

//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt, faHeart,
	faMapLocationDot,
	faBath, faDoorOpen,
	faMaximize, faStairs,
	faHouse, faCalendarDays,
	faCubes, faElevator, faBellConcierge,
	faPersonSwimming, faBoxOpen, faSun, faWineBottle,
	faSnowflake, faLightbulb,
	faCar, faTree, faChair, faStar
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
			canvasView: false,
			navigateToSellerProfile: false,
			title: ""
		};
	}


	componentDidMount() {
		javaAcademyService.getDetailBuilding(this.props.params.buildingId).then((res) => {
			const adv = res.data;
			console.log(res)
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
					description: adv.longDescription,
					elevator: adv.elevator,
					energyRating: adv.energyRating,
					floor: adv.floor,
					floors: adv.floors,
					furniture: adv.furniture,
					guidedTour: adv.guidedTour,
					heating: adv.heating,
					houseNumber: adv.houseNumber,
					parkingSpots: adv.parkingSpots,
					pool: adv.pool,
					price: adv.price,
					reception: adv.reception,
					rooms: adv.rooms,
					terrace: adv.terrace,
					virtualTour: adv.virtualTour,
					yard: adv.yard,
					zipCode: adv.zipcode,

					avatar: adv.seller.avatarUrl,
					username: adv.seller.username
				};
			}

			this.setState(
				{
					adv: details,
					title: getBuildingType(adv.rooms) + " in " + adv.address
				}

			);
		});
	}

	handleNavigate = () => {
		this.setState({ navigateToSellerProfile: true })
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
		const { t } = this.props;
		return (
			<>
				<Navbar fixed />
				<div className="flex flex-col font-primary bg-gray-200">
					<div className="mx-auto xl:max-w-5xl xl:mx-auto">
						<div className="flex flex-row mt-20 bg-white p-1 md:p-3">
							<h1 className="text-xl ml-2 my-2 md:text-2xl font-bold bg-white rounded">
								{this.state.title}
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
									width: "100%",
									margin: "15px 25px",
								}}
							/>
							<div className={"flex flex-col md:h-60 md:w-96 p-2 md:mt-3 md:mx-auto"}>
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
										<h1 className="text-lg font-medium">{this.state.adv.rooms} {t("DetailBuilding.rooms")}</h1>
									</div>
									<div className="flex">
										<FontAwesomeIcon
											className={"text-xl text-gray-800 mt-0.5 mr-2"}
											icon={faBath} />
										<h1 className="text-lg font-medium">{this.state.adv.bathrooms} {t("DetailBuilding.bathrooms")}</h1>
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
										<h1 className="text-lg font-medium">{this.state.adv.floor}° {t("DetailBuilding.floor")}</h1>
									</div>
									<div className="flex">
										<FontAwesomeIcon
											className={"text-xl text-gray-800 mt-0.5 mr-2"}
											icon={faCalendarDays} />
										<h1 className="text-lg font-medium">{t("DetailBuilding.posted")} {new Date(this.state.adv.date).toLocaleDateString()}</h1>
									</div>
									<div className="price">
										{this.state.adv.price}€
									</div>
									<div className="flex mt-1">
										{this.state.canvasView && this.state.adv.virtualTour && (
											<div>
												<Property3DView onClickClose={this.closeCanvas} />
											</div>
										)}
										<FontAwesomeIcon
											className={"text-2xl text-gray-800 mt-1 mr-2"}
											icon={faCubes}
										/>
										<button className="text-xl font-medium" onClick={this.openCanvas}>{t("DetailBuilding.open3D")}</button>

									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col">
							<div className="flex flex-row m-2">
								<img className={"avatar"} src={!!this.state.adv.avatar ? this.state.adv.avatar : Avatar}></img>
								<h3 className="text-lg font-semibold mt-3 ml-2 cursor-pointer" onClick={this.handleNavigate}>{this.state.adv.username}</h3>
								{
									this.state.navigateToSellerProfile &&
									<Navigate
										to={(`/${this.props.params.lang}/users-section/public-profile/${this.state.adv.username}`)} />
								}
							</div>

							<div className="flex flex-col my-5 md:h-60 md:my-10 md:flex md:flex-row">
								<Card className="flex flex-col md:h-full mb-6 md:w-1/3 p-4 md:mr-6">
									<h1 className="text-2xl font-bold text-center">{t("DetailBuilding.description")}</h1>
									{
										!this.state.adv.description ?
											<p className="text-center">{t("DetailBuilding.descriptionNotPosted")}</p>
											: <p className="text-center">{this.state.adv.description}</p>
									}
								</Card>
								<Card className="flex flex-col md:h-full md:w-4/6 p-4">
									<h1 className="text-2xl text-center font-bold">
										{t("DetailBuilding.detailInfo")}
									</h1>
									<div className="flex flex-col md:flex-row justify-evenly mt-2">

										<div className="flex flex-col">
											<div className="flex flex-row">
												<FontAwesomeIcon
													className="text-lg text-gray-800 mr-1 mt-2"
													icon={faElevator}
												/>
												<BuildingInfobox
													title={t("DetailBuilding.elevator")}
													adv={this.state.adv.elevator}
												/>
											</div>
											<div className="flex flex-row">
												<FontAwesomeIcon
													className="text-lg text-gray-800 mr-1 mt-2"
													icon={faBellConcierge}
												/>
												<BuildingInfobox
													title={t("DetailBuilding.reception")}
													adv={this.state.adv.reception}
												/>
											</div>
											<div className="flex flex-row">
												<FontAwesomeIcon
													className="text-lg text-gray-800 mr-1 mt-2"
													icon={faPersonSwimming}
												/>
												<BuildingInfobox
													title={t("DetailBuilding.pool")}
													adv={this.state.adv.pool}
												/>
											</div>
											<div className="flex flex-row">
												<FontAwesomeIcon
													className="text-lg text-gray-800 mr-1 mt-2"
													icon={faBoxOpen}
												/>
												<BuildingInfobox
													title={t("DetailBuilding.attic")}
													adv={this.state.adv.attic}
												/>
											</div>
										</div>

										<div className="flex flex-col">
											<div className="flex flex-row">
												<FontAwesomeIcon
													className="text-lg text-gray-800 mr-1 mt-2"
													icon={faSun}
												/>
												<BuildingInfobox
													title={t("DetailBuilding.terrace")}
													adv={this.state.adv.terrace}
												/>
											</div>
											<div className="flex flex-row">
												<FontAwesomeIcon
													className="text-lg text-gray-800 mr-1 mt-2"
													icon={faStar}
												/>
												<BuildingInfobox
													title={t("DetailBuilding.balcony")}
													adv={this.state.adv.balcony}
												/>
											</div>

											<div className="flex flex-row">
												<FontAwesomeIcon
													className="text-lg text-gray-800 mr-1 mt-2"
													icon={faWineBottle}
												/>
												<BuildingInfobox
													title={t("DetailBuilding.basement")}
													adv={this.state.adv.basement}
												/>
											</div>
											<div className="flex flex-row">
												<FontAwesomeIcon
													className="text-lg text-gray-800 mr-1 mt-2"
													icon={faSnowflake}
												/>
												<BuildingInfobox
													title={t("DetailBuilding.cooling")}
													adv={this.state.adv.cooling} />
											</div>
										</div>

										<div className="flex flex-col">
											<div className="flex flex-row">
												<FontAwesomeIcon
													className="text-lg text-gray-800 mr-2 mt-2"
													icon={faLightbulb}
												/>
												<BuildingInfobox
													title={t("DetailBuilding.energyRating")}
													adv={this.state.adv.energyRating}
												/>
											</div>
											<div className="flex flex-row">
												<FontAwesomeIcon
													className="text-lg text-gray-800 mr-1 mt-2"
													icon={faCar}
												/>
												<BuildingInfobox
													title={t("DetailBuilding.parkingSpots")}
													adv={this.state.adv.parkingSpots}
												/>
											</div>
											<div className="flex flex-row">
												<FontAwesomeIcon
													className="text-lg text-gray-800 mr-1 mt-2"
													icon={faTree}
												/>
												<BuildingInfobox
													title={t("DetailBuilding.yard")}
													adv={this.state.adv.yard}
												/>
											</div>
											<div className="flex flex-row">
												<FontAwesomeIcon
													className="text-lg text-gray-800 mr-1 mt-2"
													icon={faChair}
												/>
												<BuildingInfobox
													title={t("DetailBuilding.forniture")}
													adv={this.state.adv.forniture}
												/>
											</div>
										</div>

									</div>
								</Card>
							</div>
						</div>
						<ContactSeller />
					</div>
				</div >
				<Footer />
			</>
		);
	}
}

const Wrap = (props) => {
	const params = useParams();
	return <DetailBuilding {...props} params={params} />;
};

export default withTranslation()(Wrap);

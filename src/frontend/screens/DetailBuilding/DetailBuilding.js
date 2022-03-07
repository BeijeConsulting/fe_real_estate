import "./detailBuilding.css";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";
import { useTranslation } from "react-i18next";


import getBuildingType from '../../../common/utils/getBuildingType'

//Images
import Avatar from "../../assets/images/avatar.png";

//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt, 
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
import AdvFavouriteButton from "../../components/AdvCard/AdvFavouriteButton";
import typesTranslator from "../../utils/typesTranslator";

const DetailBuilding = () => {
	let title = ""
	let data = [
		{ image: "https://www.easyrelooking.com/wp-content/uploads/taverna4_EasyRelooking.jpg" },
		{ image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1Lpa3Gb4GhJLkprEGpKo_vP8lNMOwnLT7rUN_vDiNnX2YSEYl6WGc1nsNEJ8bqZeWOY&usqp=CAU" },
		{ image: "https://www.diotti.com/media/wysiwyg/easyrelooking/easyrelooking-render-02.jpg" },
	]

	let { t } = useTranslation()
	let navigate = useNavigate()
	let params = useParams()

	const [adv, setAdv] = useState()
	const [isCanvaVisible, setIsCanvaVisible] = useState()

	useEffect(() => {
		javaAcademyService.getDetailBuilding(params.buildingId)
			.then(res => {
				setAdv(res.data)
			})
	}, [])

	const handleNavigate = (dest) => () =>  navigate(dest)
	const toggleCanva = () => setIsCanvaVisible(!isCanvaVisible)

	if ( !adv ) {
		return <p>loading</p>
	}

	title = getBuildingType(adv.rooms) + " in " + typesTranslator.adv(adv.advType)  +  " a " + adv.address 


	return (
		<>
			<Navbar fixed />
			<div className="flex flex-col font-primary bg-gray-300">
				<div className="mx-auto xl:max-w-5xl xl:mx-auto">
					<div className="flex flex-row mt-20 bg-white p-1 md:p-3">
						<h1 className="text-xl ml-2 my-2 md:text-2xl font-bold bg-white rounded">
							{title}
						</h1>
					</div>
					<div className="flex flex-col items-left md:flex-row bg-white rounded md:mx-auto">
						<Carousel
							width="750px"
							height="450px"
							data={data}
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
										{adv.city}
									</h1>
								</div>
								<AdvFavouriteButton id={adv.id} />

							</div>
							<div className="flex flex-col p-2 mt-3 gap-4">
								<div className="flex flex-row">
									<FontAwesomeIcon
										className={"text-xl text-gray-800 mt-0.5 mr-2"}
										icon={faMapLocationDot}
									/>
									<h1 className="text-lg font-medium">
										{adv.address}, {adv.houseNumber}
									</h1>
								</div>
								<div className="flex">
									<FontAwesomeIcon
										className={"text-xl text-gray-800 mt-0.5 mr-2"}
										icon={faMaximize} />
									<h1 className="text-lg font-medium">{adv.areaMsq} m<sup>2</sup> </h1>
								</div>
								<div className="flex">
									<FontAwesomeIcon
										className={"text-xl text-gray-800 mt-0.5 mr-2"}
										icon={faDoorOpen} />
									<h1 className="text-lg font-medium">{adv.rooms} {t("DetailBuilding.rooms")}</h1>
								</div>
								<div className="flex">
									<FontAwesomeIcon
										className={"text-xl text-gray-800 mt-0.5 mr-2"}
										icon={faBath} />
									<h1 className="text-lg font-medium">{adv.bathrooms} {t("DetailBuilding.bathrooms")}</h1>
								</div>
								<div className="flex">
									<FontAwesomeIcon
										className={"text-xl text-gray-800 mt-0.5 mr-2"}
										icon={faHouse} />
									<h1 className="text-lg font-medium">{adv.condition}</h1>
								</div>
								<div className="flex">
									<FontAwesomeIcon
										className={"text-xl text-gray-800 mt-0.5 mr-2"}
										icon={faStairs} />
									<h1 className="text-lg font-medium">{adv.floor}° {t("DetailBuilding.floor")}</h1>
								</div>
								<div className="flex">
									<FontAwesomeIcon
										className={"text-xl text-gray-800 mt-0.5 mr-2"}
										icon={faCalendarDays} />
									<h1 className="text-lg font-medium">{t("DetailBuilding.posted")} {new Date(adv.date).toLocaleDateString()}</h1>
								</div>
								<div className="price">
									{adv.price}€
								</div>
								<div className="flex mt-1">

									{isCanvaVisible && <Property3DView onClickClose={toggleCanva} />}
									{adv.virtualTour &&
										<>
											<FontAwesomeIcon
												className={"text-2xl text-gray-800 mt-1 mr-2"}
												icon={faCubes}
											/>
											<button
												className="text-xl font-medium"
												onClick={toggleCanva}
											>
												{t("DetailBuilding.open3D")}
											</button>
										</>
									}
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col">
						<div className="flex flex-row m-2">
							<img className={"avatar"} src={!!adv.avatar ? adv.avatar : Avatar}></img>
							<h3
								className="text-lg font-semibold mt-3 ml-2 cursor-pointer"
								onClick={handleNavigate(`/${params.lang}/users-section/public-profile/${adv.seller.username}`)}
							>
								{adv.seller.username}
							</h3>
						</div>

						<div className="flex flex-col my-5 md:h-60 md:my-10 md:flex md:flex-row">
							<Card className="flex flex-col md:h-full mb-6 md:w-1/3 p-4 md:mr-6">
								<h1 className="text-2xl font-bold text-center">{t("DetailBuilding.description")}</h1>
								{
									!adv.description ?
										<p className="text-center">{t("DetailBuilding.descriptionNotPosted")}</p>
										: <p className="text-center">{adv.description}</p>
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
												adv={adv.elevator}
											/>
										</div>
										<div className="flex flex-row">
											<FontAwesomeIcon
												className="text-lg text-gray-800 mr-1 mt-2"
												icon={faBellConcierge}
											/>
											<BuildingInfobox
												title={t("DetailBuilding.reception")}
												adv={adv.reception}
											/>
										</div>
										<div className="flex flex-row">
											<FontAwesomeIcon
												className="text-lg text-gray-800 mr-1 mt-2"
												icon={faPersonSwimming}
											/>
											<BuildingInfobox
												title={t("DetailBuilding.pool")}
												adv={adv.pool}
											/>
										</div>
										<div className="flex flex-row">
											<FontAwesomeIcon
												className="text-lg text-gray-800 mr-1 mt-2"
												icon={faBoxOpen}
											/>
											<BuildingInfobox
												title={t("DetailBuilding.attic")}
												adv={adv.attic}
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
												adv={adv.terrace}
											/>
										</div>
										<div className="flex flex-row">
											<FontAwesomeIcon
												className="text-lg text-gray-800 mr-1 mt-2"
												icon={faStar}
											/>
											<BuildingInfobox
												title={t("DetailBuilding.balcony")}
												adv={adv.balcony}
											/>
										</div>

										<div className="flex flex-row">
											<FontAwesomeIcon
												className="text-lg text-gray-800 mr-1 mt-2"
												icon={faWineBottle}
											/>
											<BuildingInfobox
												title={t("DetailBuilding.basement")}
												adv={adv.basement}
											/>
										</div>
										<div className="flex flex-row">
											<FontAwesomeIcon
												className="text-lg text-gray-800 mr-1 mt-2"
												icon={faSnowflake}
											/>
											<BuildingInfobox
												title={t("DetailBuilding.cooling")}
												adv={adv.cooling} />
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
												adv={adv.energyRating}
											/>
										</div>
										<div className="flex flex-row">
											<FontAwesomeIcon
												className="text-lg text-gray-800 mr-1 mt-2"
												icon={faCar}
											/>
											<BuildingInfobox
												title={t("DetailBuilding.parkingSpots")}
												adv={adv.parkingSpots}
											/>
										</div>
										<div className="flex flex-row">
											<FontAwesomeIcon
												className="text-lg text-gray-800 mr-1 mt-2"
												icon={faTree}
											/>
											<BuildingInfobox
												title={t("DetailBuilding.yard")}
												adv={adv.yard}
											/>
										</div>
										<div className="flex flex-row">
											<FontAwesomeIcon
												className="text-lg text-gray-800 mr-1 mt-2"
												icon={faChair}
											/>
											<BuildingInfobox
												title={t("DetailBuilding.forniture")}
												adv={adv.forniture}
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


export default DetailBuilding

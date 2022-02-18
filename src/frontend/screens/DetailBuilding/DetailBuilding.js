import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";

//API
import javaAcademyService from "../../../services/javaAcademyService";

//Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/UI/Card/Card";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Icon
import { faMapMarkerAlt, faHeart, faMapLocationDot, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

//Images
import Avatar from "../../assets/images/jardin.jpeg";

import "./detailBuilding.css";
import Textarea from "../../components/UI/Textarea/Textarea";
import BuildingInfobox from "../../components/BuildingInfobox/BuildingInfobox";
import ContactSeller from "../../components/ContactSeller/ContactSeller";

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
        };
    }

    componentDidMount() {
        javaAcademyService.getAds().then((res) => {
            const adv = res.data.find(
                (adv) => adv.id === parseInt(this.props.params.buildingId)
            );
            console.log(adv);

            let details = {};

            if (!!adv) {
                details = {
                    address: adv.address,
                    advType: adv.advType,
                    city: adv.city,
                    date: adv.publishedDateTime,
                    buildingType: adv.buildingType,
                    price: adv.price,
                    zipCode: adv.zipcode,
                    elevator: adv.elevator,
                    reception: adv.reception,
                    pool: adv.pool,
                    terrace: adv.terrace
                };
            }

            this.setState({ adv: details });
        });
    }

    render() {
        return (
            <>
                <Navbar fixed />
                <div className="flex flex-col font-primary bg-slate-200">
                    <div className="mx-auto xl:max-w-5xl xl:mx-auto">
                        <div className="flex flex-row mx-auto mt-20 bg-white p-1 md:p-3">
                            <h1 className="text-xl ml-2 my-2 md:text-2xl font-bold bg-white rounded">
                                BILOCALE IN PERIFERIA A NAPOLI
                            </h1>
                            <div className="mt-2 bg-primary border-2 border-blue-900 ml-2">
                                <h1 className="text-xl font-bold color-secondary">{this.state.adv.advType}</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-left w-100 md:flex-row bg-white rounded md:mx-auto">
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
                                    width: "80%",
                                    margin: "15px 25px"
                                }}
                            />
                            <div className={"flex flex-col md:h-60 md:w-1/4 p-2 md:mt-10 md:mx-auto"}>
                                <div className="flex flex-row">
                                    <div className="flex flex-row mx-2">
                                        <FontAwesomeIcon
                                            className={"h-8 color-primary"}
                                            icon={faMapMarkerAlt}
                                        />
                                        <h1 className="text-2xl font-bold mx-4 color-secondary uppercase">
                                            {
                                                this.state.adv.city
                                            }
                                        </h1>
                                    </div>
                                    <FontAwesomeIcon
                                        className={" h-6 text-gray-500"}
                                        icon={faHeart}
                                    />
                                </div>
                                <div className="flex flex-col p-2">
                                    <div className="flex flex-row md:m-4 ">
                                        <FontAwesomeIcon className={"text-xl text-gray-800 mt-0.5 mr-2"} icon={faMapLocationDot} />
                                        <h1 className="text-lg font-medium">
                                            {this.state.adv.address}
                                        </h1>
                                    </div>
                                    <div className="price text-right mr-10">{this.state.adv.price}€</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex flex-row m-2">
                                <img className={"avatar"} src={Avatar}></img>
                                <h3 className="text-lg font-semibold m-2">Jessica Beje</h3>
                            </div>
                            <Card className="flex flex-col my-10 p-4 md:mx-auto">
                                <h1 className="text-2xl font-bold">Descrizione</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged.
                                </p>
                            </Card>
                            <Card className="flex flex-col mb-6 p-4">
                                <h1 className="text-2xl font-bold">Informazioni nel dettaglio</h1>
                                <div className="flex flex-row">

                                    <BuildingInfobox
                                        title={"Ascensore:"}
                                        adv={this.state.adv.elevator}
                                    />
                                    <BuildingInfobox
                                        title={"Reception:"}
                                        adv={this.state.adv.elevator}
                                    />
                                </div>
                                <div className="flex flex-row">
                                    <BuildingInfobox
                                        title={"Piscina:"}
                                        adv={this.state.adv.pool} />

                                    <BuildingInfobox
                                        title={"Terrazza"}
                                        adv={this.state.adv.terrace}
                                    />
                                </div>
                            </Card>
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

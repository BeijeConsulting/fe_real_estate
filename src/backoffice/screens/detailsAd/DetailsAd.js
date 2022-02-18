import React, { useState, useEffect } from "react";
import "./detailsAd.css";
// redux
import { connect } from "react-redux";
//router
import { useParams } from "react-router-dom";
// service
import { getAdv } from "../../../services/backoffice/advertisementApi";
// Ant design imports
import { Typography, Carousel, Collapse, Button, Row, Col, List } from "antd";
import Item from "antd/lib/list/Item";
const { Link, Title } = Typography;
const { Panel } = Collapse;

const DetailsAd = (props) => {
    // hooks
    const [adv, setAdv] = useState([]);
    // global var
    const title = (` ${adv[0]?.advType} ${adv[0]?.buildingType} ${adv[0]?.city}`).toUpperCase();
    const description = adv[0]?.longDescription
    const creator = "Antonio";
    const revisor = "Antonio";

    //router
    const param = useParams();
    //utils
    const formatDataFromApi = (valueObj) => {
        Object.keys(valueObj).map((key) => {
            if ((typeof valueObj[key]) === 'string') {
                return valueObj[key] = valueObj[key].charAt(0).toUpperCase() + valueObj[key].slice(1).toLowerCase();
            } else {
                switch (valueObj[key]) {
                    case null:
                        return valueObj[key] = "-"
                        break;
                    case true:
                        return valueObj[key] = "Si"
                        break;
                    case false:
                        return valueObj[key] = "No"
                        break;
                }
            }
        });
        return valueObj;
    }
    // axios
    const createAdv = async () => {
        let resultApi = await getAdv(props.admin.token, param.id)
        let formatData = [formatDataFromApi(resultApi[0])]
        setAdv(formatData);
    }
    // func Ant Design
    //carousel
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    // useEffect
    useEffect(() => {
        createAdv();
    }, []);
    return (

        <>

            <div lassName="container-all" >
                <div className="container-advdetails">
                    {/* title */}
                    <Title className="title" level={2}>
                        {title}
                    </Title>

                    {/* <div className="container-head"> */}
                    {/* link name creator */}
                    {/* <span> Creato da:&nbsp;
                            <Link href="https://ant.design" target="_blank">
                                {creator}
                            </Link>
                        </span> */}
                    {/* link revisor?? */}
                    {/* <span> Revisionato da:&nbsp;
                            <Link href="https://ant.design" target="_blank">
                                {revisor}
                            </Link>
                        </span>
                    </div> */}

                    {/* carousell */}
                    {/* <div className="container-carousel">
                        <Carousel className="carousel" afterChange={onChange}>
                            <div className="photo">
                                <h3 className="adv-photos">1</h3>
                            </div>
                            <div className="photo">
                                <h3 className="adv-photos">2</h3>
                            </div>
                            <div className="photo">
                                <h3 className="adv-photos">3</h3>
                            </div>
                            <div className="photo">
                                <h3 className="adv-photos">4</h3>
                            </div>
                        </Carousel>
                    </div> */}

                    {/* description */}
                    <div className="description">
                        <Title className="title" level={4}>
                            Descrizione
                        </Title>
                        {
                            description === "-" &&
                            <p style={{ textAlign: "center" }}>Nessuna Descrizione</p>
                        }
                        {
                            description !== "-" &&
                            <p>
                                {description}
                            </p>
                        }
                    </div>

                    {/* collapse */}
                    <div className="collapse-container">
                        <Collapse className="collapse">
                            <Panel className="title-collapse" header="INFORMAZIONI LOCAZIONE" key="1">
                                {/* section1 */}
                                <Row>
                                    <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta title={"Tipo Abitazione"} description={item.buildingType} />
                                                    <List.Item.Meta
                                                        title={"Indirizzo"}
                                                        description={item.address}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Numero  Civico"}
                                                        description={item.houseNumber}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Città"}
                                                        description={item.city}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
                                        {" "}
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta
                                                        title={"CAP"}
                                                        description={item.zipcode}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Tipo Annuncio"}
                                                        description={item.advType}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Stato dell'Atto"}
                                                        description={item.deedState}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Planimetria"}
                                                        description={item.planimetry}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
                                        {" "}
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta title={"Costruttore Id"} description={item.buildingId} />
                                                    <List.Item.Meta
                                                        title={"Tour Guidato"}
                                                        description={item.guidedTour}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Tour Virtuale"}
                                                        description={item.virtualTour}
                                                    />
                                                    <List.Item.Meta title={"Prezzo"} description={item.price + '€'} />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel className="title-collapse" header="INFORMAZIONI ABITAZIONE" key="2">
                                {/* section2 */}
                                <Row>
                                    <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta title={"Anno Costruzione"} description={item.buildingYear} />
                                                    <List.Item.Meta
                                                        title={"Area mq"}
                                                        description={item.areaMsq}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Numero Stanze"}
                                                        description={item.rooms}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Piano"}
                                                        description={item.floor}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Livelli Immobile"}
                                                        description={item.floors}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Balconi"}
                                                        description={item.balcony}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
                                        {" "}
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta title={"Numero Bagni"} description={item.bathrooms} />
                                                    <List.Item.Meta
                                                        title={"Classe Energetica"}
                                                        description={item.energyRating}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Condizione"}
                                                        description={item.condition}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Raffreddamento"}
                                                        description={item.cooling}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Riscaldamento"}
                                                        description={item.heating}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Ascensore"}
                                                        description={item.elevator}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
                                        {" "}
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta
                                                        title={"Arredamento"}
                                                        description={item.furniture}
                                                    />
                                                    <List.Item.Meta title={"Posto Auto"} description={item.parkingSpots} />
                                                    <List.Item.Meta
                                                        title={"Piscina"}
                                                        description={item.pool}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Terrazzo"}
                                                        description={item.terrace}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Reception"}
                                                        description={item.reception}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Giardino"}
                                                        description={item.yard}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel className="title-collapse" header="INFORMAZIONI ANNUNCIO" key="3">
                                {/* section3 */}
                                <Row>
                                    <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta title={"Id"} description={item.id} />
                                                    <List.Item.Meta
                                                        title={"Data Creazione"}
                                                        description={item.createDateTime}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Data Disabilitazione"}
                                                        description={item.disabledDateTime}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Data Fine"}
                                                        description={item.endedDateTime}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
                                        {" "}
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta title={"Data Scadenza"} description={item.expirationDateTime} />
                                                    <List.Item.Meta
                                                        title={"Data Pubblicazione"}
                                                        description={item.publishedDateTime}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Stato Annuncio"}
                                                        description={item.status}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                </Row>
                            </Panel>
                        </Collapse>
                    </div>

                    {/* bottons */}
                    <div className="container-button">
                        <Button type="danger">Elimina</Button>
                    </div>
                </div>
            </div>
        </>

    );
};

DetailsAd.propTypes = {};
// redux
const mapStateToProps = (state) => ({
    admin: state.adminDuck.admin
})
export default connect(mapStateToProps)(DetailsAd)


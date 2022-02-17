import React, { useState, useEffect } from "react";
import "./detailsAd.css";

// redux
import { connect } from "react-redux";

//router
import { useParams } from "react-router-dom";

// service
import axios from "axios";
import { getAdv } from "../../../services/backoffice/advertisementApi";

// Ant design imports
import { Typography, Carousel, Collapse, Button, Row, Col, List } from "antd";
import Item from "antd/lib/list/Item";

const { Link, Title } = Typography;
const { Panel } = Collapse;

const DetailsAd = (props) => {
    // hooks
    const [adv, setAdv] = useState([]);

    const title = (`${adv[0]?.buildingType} ${adv[0]?.advType} ${adv[0]?.city}`).toUpperCase();
    const description = adv[0]?.longDescription
    const creator = "Antonio";
    const revisor = "Antonio";

    //router
    const param = useParams();
    console.log('PARAM', adv.id,);



    // axios
    const createAdv = async () => {
        console.log(props.admin.token);
        let resultApi = await getAdv(props.admin.token, param.id)
        console.log('ADVV', resultApi)
        setAdv(resultApi);
    }
    // func Ant Design
    //carousel
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    const img =
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg";
    const contentStyle = {
        height: "430px",
        Image: "#fff",
        lineHeight: "360px",
        textAlign: "center",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
    };

    // collapse
    function callback(key) {
        console.log(key);
    }

    // button
    function handleMenuClick(e) {
        console.log("click", e);
    }

    // useEffect
    useEffect(async () => {
        await createAdv()
    }, []);
    return (

        <>
            {
                adv &&
                <div className="container">
                    {/* title */}
                    <Title className="title" level={2}>
                        {title}
                    </Title>

                    <div className="container-head">
                        {/* link name creator */}
                        <Link href="https://ant.design" target="_blank">
                            Creato da: <span className="link">{creator}</span>
                        </Link>
                        {/* link revisor?? */}
                        <Link href="https://ant.design" target="_blank">
                            Revisionato da: <span className="link">{revisor}</span>
                        </Link>
                    </div>

                    {/* carousell */}
                    <div className="container-carousel">
                        <Carousel className="carousel" afterChange={onChange}>
                            <div className="photo">
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div className="photo">
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div className="photo">
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div className="photo">
                                <h3 style={contentStyle}>4</h3>
                            </div>
                        </Carousel>
                    </div>

                    {/* description */}
                    <div className="description">
                        <Title className="title" level={4}>
                            Descrizione
                        </Title>
                        <p>
                            {description}
                        </p>
                    </div>

                    {/* collapse */}

                    <div className="collapse">
                        <Collapse onChange={callback}>
                            <Panel className="title-collapse" header="INFORMAZIONI LOCAZIONE" key="1">
                                {/* section1 */}
                                <Row>
                                    <Col span={8}>
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
                                    <Col span={8}>
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
                                                        description={Item.deedState}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Planimetria"}
                                                        description={item.planimetry}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col span={8}>
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
                            <Panel className="title-collapse" header="INFORMAZIONI 2" key="2">
                                {/* section2 */}
                                <Row>
                                    <Col span={8}>
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta title={"Id"} description={"address"} />
                                                    <List.Item.Meta
                                                        title={"Indirizzo"}
                                                        description={"address"}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Tipo Annuncio"}
                                                        description={"address"}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Area mq"}
                                                        description={"address"}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col span={8}>
                                        {" "}
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta title={"Id"} description={"address"} />
                                                    <List.Item.Meta
                                                        title={"Indirizzo"}
                                                        description={"address"}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Tipo Annuncio"}
                                                        description={"address"}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Area mq"}
                                                        description={"address"}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col span={8}>
                                        {" "}
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta title={"Id"} description={"address"} />
                                                    <List.Item.Meta
                                                        title={"Indirizzo"}
                                                        description={"address"}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Tipo Annuncio"}
                                                        description={"address"}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Area mq"}
                                                        description={"address"}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel className="title-collapse" header="INFORMAZIONI 3" key="3">
                                {/* section3 */}
                                <Row>
                                    <Col span={8}>
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta title={"Id"} description={"address"} />
                                                    <List.Item.Meta
                                                        title={"Indirizzo"}
                                                        description={"address"}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Tipo Annuncio"}
                                                        description={"address"}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Area mq"}
                                                        description={"address"}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col span={8}>
                                        {" "}
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta title={"Id"} description={"address"} />
                                                    <List.Item.Meta
                                                        title={"Indirizzo"}
                                                        description={"address"}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Tipo Annuncio"}
                                                        description={"address"}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Area mq"}
                                                        description={"address"}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col span={8}>
                                        {" "}
                                        <List
                                            className="info-list"
                                            size="small"
                                            itemLayout="vertical"
                                            dataSource={adv}
                                            renderItem={(item, key) => (
                                                <List.Item key={key} className="info-profile-items">
                                                    <List.Item.Meta title={"Id"} description={"address"} />
                                                    <List.Item.Meta
                                                        title={"Indirizzo"}
                                                        description={"address"}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Tipo Annuncio"}
                                                        description={"address"}
                                                    />
                                                    <List.Item.Meta
                                                        title={"Area mq"}
                                                        description={"address"}
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
                        <Button type="primary">Approva</Button>
                        <Button type="danger">Rifiuta</Button>
                    </div>
                </div>
            }
        </>

    );
};

DetailsAd.propTypes = {};


// redux
const mapStateToProps = (state) => ({
    admin: state.adminDuck.admin
})
export default connect(mapStateToProps)(DetailsAd)


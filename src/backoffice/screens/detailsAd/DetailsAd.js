import React, { useState, useEffect } from "react";
import "./detailsAd.css";

// service
import axios from "axios";

// Ant design imports
import { Typography, Carousel, Collapse, Button, Row, Col, List } from "antd";
import Item from "antd/lib/list/Item";

const { Link, Title } = Typography;
const { Panel } = Collapse;

const DetailsAd = (props) => {
    const title = "Casa dei Puffi";
    const creator = "Antonio";
    const revisor = "Antonio";

    // hooks
    const [adv, setAdv] = useState([]);

    // axios
    const getAdv = async () => {
        let newAdv = null;
        try {
            const response = await axios.get(
                "http://domus-test.eba-733cj72h.eu-south-1.elasticbeanstalk.com/ads"
            );
            newAdv = [response.data[0]];
        } catch (error) { }
        setAdv(newAdv);
    };

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
    useEffect(() => {
        getAdv();
        console.log("STATO", adv);
    }, []);
    return (
        <>
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries.
                    </p>
                </div>

                {/* collapse */}

                <div className="collapse">
                    <Collapse onChange={callback}>
                        <Panel className="title-collapse" header="INFORMAZIONI 1" key="1">
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
                                                <List.Item.Meta title={"Id"} description={item.id} />
                                                <List.Item.Meta
                                                    title={"Indirizzo"}
                                                    description={item.address}
                                                />
                                                <List.Item.Meta
                                                    title={"Tipo Annuncio"}
                                                    description={item.advType}
                                                />
                                                <List.Item.Meta
                                                    title={"Area mq"}
                                                    description={Item.areaMsq}
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
        </>
    );
};

DetailsAd.propTypes = {};

export default DetailsAd;


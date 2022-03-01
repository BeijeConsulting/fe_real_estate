import React, { useState, useEffect } from "react";
import "./detailsAd.css";
// redux
import { connect } from "react-redux";
//router
import { useParams, Link } from "react-router-dom";
// service
import {
  disableAdv,
  getAdv,
  postAdvState,
} from "../../../services/backoffice/advertisementApi";
// Ant design imports
import { Typography, Carousel, Collapse, Button, Row, Col, List } from "antd";
import { useTranslation } from "react-i18next";
const { Title, Text } = Typography;
const { Panel } = Collapse;

const DetailsAd = (props) => {
  const { t } = useTranslation()
  // hooks
  const [adv, setAdv] = useState([]);
  const [seller, setSeller] = useState("");
  const [checker, setChecker] = useState("");
  // global var
  const title =
    ` ${adv[0]?.advType} ${adv[0]?.buildingType} ${adv[0]?.city}`.toUpperCase();
  const description = adv[0]?.longDescription;

  //router
  const param = useParams();
  //utils
  const formatDataFromApi = (valueObj) => {
    Object.keys(valueObj).map((key) => {
      if (typeof valueObj[key] === "string") {
        return (valueObj[key] =
          valueObj[key].charAt(0).toUpperCase() +
          valueObj[key].slice(1).toLowerCase());
      } else {
        switch (valueObj[key]) {
          case null:
            return (valueObj[key] = "-");
            break;
          case true:
            return (valueObj[key] = "Si");
            break;
          case false:
            return (valueObj[key] = "No");
            break;
        }
      }
    });
    return valueObj;
  };
  // axios
  const createAdv = async () => {
    let resultApi = await getAdv(props.admin.token, param.id);
    let formatData = [formatDataFromApi(resultApi[0])];
    // let nameSeller = await getNameUserFromSellerId(props.admin.token, formatData[0].seller.id)

    let seller = {
      username: formatData[0].seller?.username,
      idSeller: formatData[0].seller?.id,
    };

    let checker = {
      username: formatData[0].checker?.username,
      idChecker: formatData[0].checker?.id,
    };
    setAdv(formatData);
    setSeller(seller);
    setChecker(checker);
    console.log("STATO", adv[0].status);
  };

  // carousel func
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  //buttons funs
  const approveAdv = async () => {
    let data = await postAdvState(props.admin.token, param.id, "approve");
  };
  const refuseAdv = async () => {
    let data = await postAdvState(props.admin.token, param.id, "refuse");
  };
  const deleteAdv = async () => {
    let data = await disableAdv(props.admin.token, param.id);
  };
  // useEffect
  useEffect(() => {
    createAdv();
  }, []);
  return (
    <>
      {adv.length !== 0 && (
        <div className="container-all">
          <div className="container-advdetails">
            {/* title */}
            <Title className="title" level={2}>
              {title}
            </Title>
            {adv[0].status === "Approved" && (
              <Title className="state-adv" level={5} type="success">
                {adv[0].status}
              </Title>
            )}
            {adv[0].status === "Refused" && (
              <Title className="state-adv" level={5} type="warning">
                {adv[0].status}
              </Title>
            )}
            {adv[0].status === "Deleted" && (
              <Title className="state-adv" level={5} type="danger">
                {adv[0].status}
              </Title>
            )}
            <div className="container-head">
              {/* link name creator */}
              <span>
                {" "}
                {t("BoAds.Detail.CreatedBy")}&nbsp;
                <Link to={`/admin/user/${seller.idSeller}/details`}>
                  {seller.username}
                </Link>
              </span>
              {/* link revisor?? */}
              <span>
                {" "}
                {t("BoAds.Detail.RevisedBy")}&nbsp;
                <Link to={`/admin/user/${checker.idChecker}/details`}>
                  {checker.username}
                </Link>
              </span>
            </div>

            {/* carousell */}
            <div className="container-carousel">
              <Carousel className="carousel" afterChange={onChange}>
                <div className="adv-photo">
                  <h3 className="adv-photos">1</h3>
                </div>
                <div className="adv-photo">
                  <h3 className="adv-photos">2</h3>
                </div>
                <div className="adv-photo">
                  <h3 className="adv-photos">3</h3>
                </div>
                <div className="adv-photo">
                  <h3 className="adv-photos">4</h3>
                </div>
              </Carousel>
            </div>

            {/* description */}
            <div className="description">
              <Title className="title" level={4}>
                {t("BoAds.Detail.Description")}
              </Title>
              {description === "-" && (
                <p style={{ textAlign: "center" }}>{t("BoAds.Detail.NoDescription")}</p>
              )}
              {description !== "-" && (
                <p style={{ textAlign: "center" }}>{description}</p>
              )}
            </div>

            {/* collapse */}
            <div className="collapse-container">
              <Collapse className="collapse">
                <Panel
                  className="title-collapse"
                  header={t("BoAds.Detail.LocationInfo")}
                  key="1"
                >
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
                            <List.Item.Meta
                              title={t("BoAds.Columns.BuildingType")}
                              description={item.buildingType}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.address")}
                              description={item.address}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.houseNumber")}
                              description={item.houseNumber}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Columns.City")}
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
                              title={t("BoAds.Detail.zipCode")}
                              description={item.zipCode}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Ads.AdvType")}
                              description={item.advType}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.deedState")}
                              description={item.deedState}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.planimetry")}
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
                            <List.Item.Meta
                              title={t("BoAds.Detail.idConstructor")}
                              description={item.buildingId}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.tour")}
                              description={item.guidedTour}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.Vtour")}
                              description={item.virtualTour}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.price")}
                              description={item.price + "€"}
                            />
                          </List.Item>
                        )}
                      />
                    </Col>
                  </Row>
                </Panel>
                <Panel
                  className="title-collapse"
                  header={t("BoAds.Detail.HouseInfo")}
                  key="2"
                >
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
                            <List.Item.Meta
                              title={t("BoAds.Detail.year")}
                              description={item.buildingYear}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.area")}
                              description={item.areaMsq}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.rooms")}
                              description={item.rooms}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.floor")}
                              description={item.floor}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.floors")}
                              description={item.floors}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.balcony")}
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
                            <List.Item.Meta
                              title={t("BoAds.Detail.bathrooms")}
                              description={item.bathrooms}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.energyRating")}
                              description={item.energyRating}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.condition")}
                              description={item.condition}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.cooling")}
                              description={item.cooling}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.heating")}
                              description={item.heating}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.elevator")}
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
                              title={t("BoAds.Detail.furniture")}
                              description={item.furniture}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.parkingSpots")}
                              description={item.parkingSpots}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.pool")}
                              description={item.pool}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.terrace")}
                              description={item.terrace}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.reception")}
                              description={item.reception}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.yard")}
                              description={item.yard}
                            />
                          </List.Item>
                        )}
                      />
                    </Col>
                  </Row>
                </Panel>
                <Panel
                  className="title-collapse"
                  header={t("BoAds.Detail.AdvInfo")}
                  key="3"
                >
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
                            <List.Item.Meta
                              title={"Id"}
                              description={item.id}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.created")}
                              description={item.createDateTime}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.disabled")}
                              description={item.disabledDateTime}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.ended")}
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
                            <List.Item.Meta
                              title={t("BoAds.Detail.expiration")}
                              description={item.expirationDateTime}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.posted")}
                              description={item.publishedDateTime}
                            />
                            <List.Item.Meta
                              title={t("BoAds.Detail.status")}
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
              <Button type="primary" onClick={approveAdv}>
                {t("BoAds.Detail.buttonApprove")}
              </Button>
              <Button type="danger" onClick={deleteAdv}>
                {t("BoAds.Detail.buttonDelete")}
              </Button>
              <Button type="danger" onClick={refuseAdv}>
                {t("BoAds.Detail.buttonRefuse")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

DetailsAd.propTypes = {};
// redux
const mapStateToProps = (state) => ({
  admin: state.adminDuck.admin,
});
export default connect(mapStateToProps)(DetailsAd);

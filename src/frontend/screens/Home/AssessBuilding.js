import React, { useState } from 'react'
import Done from "../../assets/images/done.svg"
import Card from "../../components/UI/Card/Card"
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"
import { useNavigate } from 'react-router-dom'

//Translation
import { useTranslation } from 'react-i18next';

const AssessBuilding = () => {

  let navigate = useNavigate()
  const { t } = useTranslation()
  const [state, setState] = useState(
    {
      name: "",
      surname: "",
      email: "",
      phone: "",
      buildingType: "",
      city: "",
      address: "",
      houseNumber: "",
      areaMsq: "",
      rooms: "",
      yearBuilding: "",
      condition: "",

      formCompiled: false
    }
  )

  const handlerInput = (key) => (e) => {
    const newState = { ...state };
    newState[key] = e.target.value;
    setState(newState);
  };

  const submitForm = () => {
    setState({ ...state, formCompiled: true })
  }

  const handleNavigate = () => {
    navigate("/")
  }

  let labelClass = "font-bold text-xl m-0 p-0";
  return (
    <>
      <Navbar />
      {
        state.formCompiled === false &&
        <>
          <h1 className="mt-4 text-5xl color-secondary text-center font-bold">
            {t("AssessProperty.Title")}</h1>
          <h3 className="mt-1.5 text-xl text-center text-gray-500 font-semibold">
            {t("AssessProperty.Subtitle")}
          </h3>
          <div className="flex flex-col justify-center items-center mx-auto">
            <Card className="flex flex-col my-5 mx-auto">
              <div className="flex flex-col">
                <h1 className="text-2xl color-secondary font-bold"> {t("AssessProperty.PersonalInfo")}</h1>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
                  <div className="flex flex-col">
                    <p className={labelClass}>{t("AssessProperty.Name")}</p>
                    <Input placeholder={t("AssessProperty.NamePlaceholder")} onChange={handlerInput("name")} />
                  </div>
                  <div className="flex flex-col">
                    <p className={labelClass}>{t("AssessProperty.LastName")}</p>
                    <Input placeholder={t("AssessProperty.LastNamePlaceholder")} onChange={handlerInput("surname")} />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Email"}</p>
                    <Input placeholder={t("AssessProperty.EmailPlaceholder")} onChange={handlerInput("email")} />
                  </div>
                  <div className="flex flex-col">
                    <p className={labelClass}>{t("AssessProperty.PhoneNumber")}</p>
                    <Input type="number" placeholder={"3333333333"} onChange={handlerInput("phone")} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl color-secondary mt-4 font-bold">{t("AssessProperty.PropertyDetails")}</h1>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
                  <div className="flex flex-col">
                    <p className={labelClass}>{t("AssessProperty.PropertyType")}</p>
                    <Input placeholder={t("AssessProperty.PropertyTypePlaceholder")} onChange={handlerInput("buildingType")} />
                  </div>
                  <div className="flex flex-col">
                    <p className={labelClass}>{t("AssessProperty.City")}</p>
                    <Input placeholder={t("AssessProperty.CityPlaceholder")} onChange={handlerInput("city")} />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
                  <div className="flex flex-col">
                    <p className={labelClass}>{t("AssessProperty.Address")}</p>
                    <Input placeholder={t("AssessProperty.AddressPlaceholder")} onChange={handlerInput("address")} />
                  </div>
                  <div className="flex flex-col">
                    <p className={labelClass}>{t("AssessProperty.Number")}</p>
                    <Input type="number" placeholder={t("AssessProperty.NumberPlaceholder")} onChange={handlerInput("houseNumber")} />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
                  <div className="flex flex-col">
                    <p className={labelClass}>{t("AssessProperty.LivingSpace")}</p>
                    <Input type="number" placeholder={t("AssessProperty.LivingSpacePlaceholder")} onChange={handlerInput("areaMsq")} />
                  </div>
                  <div className="flex flex-col">
                    <p className={labelClass}>{t("AssessProperty.TotalRooms")}</p>
                    <Input type="number" placeholder={t("AssessProperty.TotalRoomsPlaceholder")} onChange={handlerInput("rooms")} />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
                  <div className="flex flex-col">
                    <p className={labelClass}>{t("AssessProperty.PropertyYear")}</p>
                    <Input type={"number"} placeholder={"2000"} onChange={handlerInput("yearBuilding")} />
                  </div>
                  <div className="flex flex-col">
                    <p className={labelClass}>{t("AssessProperty.Condition")}</p>
                    <Input placeholder={t("AssessProperty.ConditionPlaceholder")} onChange={handlerInput("condition")} />
                  </div>
                </div>
              </div>
              <Button
                marginTop={20}
                label={t("AssessProperty.BtnLabel")}
                onClick={submitForm} />
            </Card>

          </div>
        </>
      }
      {
        state.formCompiled === true &&
        <div className='flex flex-col justify-center items-center my-28'>
          <Card className={"flex flex-col justify-center items-center"}>
            <h1 className='text-4xl text-center px-2 uppercase'>
              {t("AssessProperty.ThankYouMessage")}
            </h1>
            <p className='text-xl text-center px-2'>
              {t("AssessProperty.ThankYouMessageSubtitle")}</p>
            <img className="mt-4 h-72 w-3/5 mx-auto" src={Done} alt='done' />
          </Card>
          <Button
            marginTop={20}
            label={t("AssessProperty.BtnLabelToHome")}
            onClick={handleNavigate} />
        </div>
      }
      <Footer />
    </>
  )
}

export default AssessBuilding
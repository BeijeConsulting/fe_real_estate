import React, { useState } from 'react'
import Done from "../../assets/images/done.svg"
import Card from "../../components/UI/Card/Card"
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"
import { useNavigate } from 'react-router-dom'

const AssessBuilding = () => {

  let navigate = useNavigate()

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
          <h1 className="mt-4 text-5xl color-secondary text-center font-bold">Scopri quanto vale il tuo immobile</h1>
          <h3 className="mt-1.5 text-xl text-center text-gray-500 font-semibold">Compila il form e verrai ricontattato da un nostro tecnico</h3>
          <div className="flex flex-col justify-center items-center mx-auto">
            <Card className="flex flex-col my-5 mx-auto">
              <div className="flex flex-col">
                <h1 className="text-2xl color-secondary font-bold">Informazioni personali</h1>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Name"}</p>
                    <Input placeholder={"Giorgio"} onChange={handlerInput("name")} />
                  </div>
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Cognome"}</p>
                    <Input placeholder={"Rossi"} onChange={handlerInput("surname")} />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Email"}</p>
                    <Input placeholder={"esempio@esempio.com"} onChange={handlerInput("email")} />
                  </div>
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Phone"}</p>
                    <Input type="number" placeholder={"3333333333"} onChange={handlerInput("phone")} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl color-secondary mt-4 font-bold">Dettagli immobile</h1>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Tipo di immobile"}</p>
                    <Input placeholder={"Esempio: terreno"} onChange={handlerInput("buildingType")} />
                  </div>
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Città"}</p>
                    <Input placeholder={"Esempio: Milano"} onChange={handlerInput("city")} />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Via"}</p>
                    <Input placeholder={"Esempio: Via Milano"} onChange={handlerInput("address")} />
                  </div>
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Numero"}</p>
                    <Input type="number" placeholder={"Esempio: 123"} onChange={handlerInput("houseNumber")} />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Superficie"}</p>
                    <Input type="number" placeholder={"Esempio: 300 mq"} onChange={handlerInput("areaMsq")} />
                  </div>
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Numero locali"}</p>
                    <Input type="number" placeholder={"Esempio: 4"} onChange={handlerInput("rooms")} />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Anno immobile"}</p>
                    <Input type={"number"} placeholder={"2000"} onChange={handlerInput("yearBuilding")} />
                  </div>
                  <div className="flex flex-col">
                    <p className={labelClass}>{"Condizioni"}</p>
                    <Input placeholder={"Esempio: buone"} onChange={handlerInput("condition")} />
                  </div>
                </div>
              </div>
              <Button
                marginTop={20}
                label={"Invia"}
                onClick={submitForm} />
            </Card>

          </div>
        </>
      }
      {
        state.formCompiled === true &&
        <div className='flex flex-col justify-center items-center my-28'>
          <Card className={"flex flex-col justify-center items-center"}>
            <h1 className='text-4xl text-center px-2'>TI RINGRAZIAMO PER AVER SCELTO DOMUS!</h1>
            <p className='text-xl text-center px-2'>Un nostro tecnico elaborerà la tua richiesta e ti contatterà ai recapiti che hai inserito</p>
            <img className="mt-4 h-72 w-3/5 mx-auto" src={Done} />
          </Card>
          <Button
            marginTop={20}
            label={"Return to home"}
            onClick={handleNavigate} />
        </div>
      }
      <Footer />
    </>
  )
}

export default AssessBuilding
import Card from "../../components/UI/Card/Card"
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"

const AssessBuilding = () => {

  let labelClass = "font-bold text-2xl m-0 p-0";
  return (
    <>
      <Navbar />
      <h1 className="mt-3 text-5xl color-secondary text-center font-bold">Scopri quanto vale il tuo immobile</h1>
      <h3 className="mt-1.5 text-xl text-center text-gray-500 font-semibold">Compila il form e verrai ricontattato da un nostro tecnico</h3>
      <div className="flex flex-col justify-center items-center">


        <Card className="flex flex-col my-5">
          <div className="flex flex-col">
            <h1 className="text-xl color-secondary font-bold">Informazioni personali</h1>
            <div className="flex flex-row space-x-4 mt-3">
              <div className="flex flex-col">
                <p className={labelClass}>{"Name"}</p>
                <Input value={"NAME"} onChange={null} />
              </div>
              <div className="flex flex-col">
                <p className={labelClass}>{"Cognome"}</p>
                <Input value={"NAME"} onChange={null} />
              </div>
            </div>
            <div className="flex flex-row space-x-4 mt-3">
              <div className="flex flex-col">
                <p className={labelClass}>{"Email"}</p>
                <Input value={"NAME"} onChange={null} />
              </div>
              <div className="flex flex-col">
                <p className={labelClass}>{"Phone"}</p>
                <Input value={"Phone"} onChange={null} />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl color-secondary mt-4 font-bold">Dettagli immobile</h1>
            <div className="flex flex-row space-x-4 mt-3">
              <div className="flex flex-col">
                <p className={labelClass}>{"Tipo di immobile"}</p>
                <Input value={"Tipo"} onChange={null} />
              </div>
              <div className="flex flex-col">
                <p className={labelClass}>{"Città"}</p>
                <Input value={"Milano"} onChange={null} />
              </div>
            </div>
            <div className="flex flex-row space-x-4 mt-3">
              <div className="flex flex-col">
                <p className={labelClass}>{"Via"}</p>
                <Input value={"Via Milano"} onChange={null} />
              </div>
              <div className="flex flex-col">
                <p className={labelClass}>{"Numero"}</p>
                <Input type="number" value={"1234"} onChange={null} />
              </div>
            </div>
            <div className="flex flex-row space-x-4 mt-3">
              <div className="flex flex-col">
                <p className={labelClass}>{"Metri quadrati"}</p>
                <Input value={"200 m^2"} onChange={null} />
              </div>
              <div className="flex flex-col">
                <p className={labelClass}>{"Numero locali"}</p>
                <Input value={"5 vani"} onChange={null} />
              </div>
            </div>
            <div className="flex flex-row space-x-4 mt-3">
              <div className="flex flex-col">
                <p className={labelClass}>{"Anno immobile"}</p>
                <Input value={"1999"} onChange={null} />
              </div>
              <div className="flex flex-col">
                <p className={labelClass}>{"Condizioni"}</p>
                <Input value={"Buone"} onChange={null} />
              </div>
            </div>
          </div>
          <Button
            marginTop={20}
            label={"Invia"} />
        </Card>

      </div>
      <Footer />
    </>
  )
}

export default AssessBuilding
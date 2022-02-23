import React, { useState } from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import { Checkbox } from 'antd';
import { Steps, Divider } from 'antd';
import Button from '../../components/UI/Button/Button'
import CircleButton from '../../components/UI/CircleButton/CircleButton'
import './NewAdv.css'

const NewAdv = () => {
  const [current, setCurrent] = useState(0)
  const [number, setNumber] = useState(0)

  const handleSelectPropertyChange = (value) => {
    console.log(`selected ${value}`);
  }

  const increment = () => {
    setNumber(number + 1)
  }

  const decrement = () => {
    if (number > 1) {
      setNumber(number - 1)
    }
  }

  const handleElevatorChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  const handleBalconyChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  const handlePoolChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  const handleReceptionChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  const handleTerraceChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  const handleBasementChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  const handleStepChange = current => {
    console.log('onChange:', current);
    setCurrent(current)
  };
  const { Step } = Steps;
  const { Option } = Select;
  return (
    <>
      <div className='my-4'>
        <h1 className='uppercase font-primary font-light text-center text-4xl'>crea nuovo annuncio</h1>
      </div>

      <div className='new-adv-container '>
        <div className='md:flex justify-around gap-10'>
          <div style={{ marginTop: '26px', }} className='md:flex ml-4 mb-0 '>
            <Steps direction="vertical" current={current} onChange={handleStepChange} >
              <Step />
              <Step />
              <Step />
            </Steps>
          </div>
          <Divider type='vertical' />
          <form className='flex flex-col mx-4 mt-4 mb-0'>
            {current === 0 &&
              <div>
                <div className='mb-5'>
                  <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Tipo di immobile</label>
                  <Select defaultValue="casa" style={{ width: '100%' }} onChange={handleSelectPropertyChange}>
                    <Option value="casa">casa</Option>
                    <Option value="appartamento">appartamento</Option>
                    <Option value="altro">altro</Option>
                  </Select>
                </div>
                <div className='mb-5'>
                  <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Dimensioni</label>
                  <Input placeholder="Es. 100 m"
                  />
                </div>

                <div className='mb-5'>
                  <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Prezzo</label>
                  <Input placeholder="Prezzo"
                  />
                </div>

                <div className='mb-5'>
                  <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Spese condominiali mensili</label>
                  <Input placeholder="Es: 500$"
                  />
                </div>

                <div className="flex gap-3">
                  <div className='mb-5'>
                    <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Città</label>
                    <Input placeholder="Città"
                    />
                  </div>

                  <div className='mb-5'>
                    <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>CAP</label>
                    <Input placeholder="CAP"
                    />
                  </div>
                </div>

                <div className='mb-5'>
                  <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Indirizzo/via</label>
                  <Input placeholder="Es: Viale Genova 43"
                  />
                </div>
              </div>
            }
            {current === 1 &&
              <div>
                <div className='mb-5'>
                  <label className='uppercase font-primary color-secondary mr-1'>C'è il balcone?</label>
                  <Checkbox onChange={handleBalconyChange} />
                </div>

                <div className='mb-5'>
                  <label className='uppercase font-primary color-secondary mr-1'>C'è l'ascensore?</label>
                  <Checkbox onChange={handleElevatorChange} />
                </div>

                <div className='mb-5'>
                  <label className='uppercase font-primary color-secondary mr-1'>C'è la piscina?</label>
                  <Checkbox onChange={handlePoolChange} />
                </div>

                <div className='mb-5'>
                  <label className='uppercase font-primary color-secondary mr-1'>C'è la soffitta?</label>
                  <Checkbox onChange={handleElevatorChange} />
                </div>

                <div className='mb-5'>
                  <label className='uppercase font-primary color-secondary mr-1'>C'è la cantina?</label>
                  <Checkbox onChange={handleBasementChange} />
                </div>

                <div className='mb-5'>
                  <label className='uppercase font-primary color-secondary mr-1'>C'è il terrazzo?</label>
                  <Checkbox onChange={handleTerraceChange} />
                </div>

                <div className='mb-5'>
                  <label className='uppercase font-primary color-secondary mr-1'>C'è la portineria?</label>
                  <Checkbox onChange={handleReceptionChange} />
                </div>

                <div className='mb-5'>
                  <CircleButton label='+' onClickCallback={increment} />
                  <p>{number}</p>
                  <CircleButton label='-' onClickCallback={decrement} />
                </div>
              </div>
            }


            <Button label='Avanti' />

          </form>
        </div>
      </div>





    </>
  )
}

export default NewAdv
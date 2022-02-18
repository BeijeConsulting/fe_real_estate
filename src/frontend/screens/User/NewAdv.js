import React, { useState } from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import { Steps, Divider } from 'antd';
import Button from '../../components/UI/Button/Button'
import './NewAdv.css'

const NewAdv = () => {
  const [current, setCurrent] = useState(0)

  const handleInputChange = (value) => {
    console.log(`selected ${value}`);
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
            <div className='mb-5'>
              <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Tipo di immobile</label>
              <Select defaultValue="casa" style={{ width: '100%' }} onChange={handleInputChange}>
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


            <Button label='Avanti' />

          </form>
        </div>
      </div>





    </>
  )
}

export default NewAdv
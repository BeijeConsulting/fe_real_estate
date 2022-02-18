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
      <div className='flex justify-around gap-10'>
        <form style={{ marginTop: '16px', marginRight: '16px', marginLeft: '16px', marginBottom: '0' }} className='flex flex-col '>
          <div className='mb-5'>
            <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Tipo di immobile</label>
            <Select defaultValue="casa" style={{ width: 320 }} onChange={handleInputChange}>
              <Option value="casa">casa</Option>
              <Option value="appartamento">appartamento</Option>
              <Option value="altro">altro</Option>
            </Select>
          </div>

          <div className='mb-5'>
            <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Dimensioni</label>
            <Input placeholder="Es. 100 m" style={{ width: 320 }} />
          </div>

          <div className='mb-5'>
            <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Prezzo</label>
            <Input placeholder="Prezzo" style={{ width: 320 }} />
          </div>

          <div className='mb-5'>
            <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Spese condominiali mensili</label>
            <Input placeholder="Es: 500$" style={{ width: 320 }} />
          </div>

          <div className="flex gap-3">
            <div className='mb-5'>
              <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Città</label>
              <Input placeholder="Città" style={{ width: 155 }} />
            </div>

            <div className='mb-5'>
              <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>CAP</label>
              <Input placeholder="CAP" style={{ width: 153 }} />
            </div>
          </div>

          <div className='mb-5'>
            <label className='uppercase font-primary color-secondary' style={{ display: 'block' }}>Indirizzo/via</label>
            <Input placeholder="Es: Viale Genova 43" style={{ width: 320 }} />
          </div>

          <div>
            <Button label='Avanti' className='w-80' />
          </div>
        </form>
        <Divider type='vertical'/>
        <div style={{ marginTop: '26px', marginRight: '16px', marginLeft: '56px', marginBottom: '0' }} className='flex-col hidden md:flex'>
          <Steps direction="vertical" current={current} onChange={handleStepChange} >
            <Step  />
            <Step  />
            <Step  />
          </Steps>
        </div>
      </div>
    </>
  )
}

export default NewAdv
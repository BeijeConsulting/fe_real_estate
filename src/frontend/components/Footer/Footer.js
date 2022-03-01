import React from 'react'
import { Link } from 'react-router-dom'

//translation
import { useTranslation } from "react-i18next"

const Footer = () => {

  const { t } = useTranslation()
  return (
    <div className='bg-gray pt-7 font-primary relative'>
      <div className='lg:max-w-6xl mx-auto flex flex-row text-center'>
        <div className='flex-1'>
          <p className='font-semibold lg:text-3xl uppercase'>{t("Footer.Assistance")}</p>
          <Link to={'/FAQ'} className={'font-bold'}>
            <p className="font-bold text-black"> {t("Footer.FAQ")} </p>
          </Link>
          <p className="uppercase">{t("Footer.TollFreeNumber")}</p>
          <p className="uppercase">{t("Footer.WhatWeOffer")}</p>
          <p className="uppercase">{t("Footer.ReportAnIssue")}</p>
        </div>
        <div className='flex-1'>
          <p className='font-semibold lg:text-3xl uppercase'>{t("Footer.AboutUs")}</p>
          <p className="uppercase">{t("Footer.OurHistory")}</p>
          <p className="uppercase">{t("Footer.Team")}</p>
          <p className="uppercase">{t("Footer.Person")}</p>

        </div>
        <div className='flex-1'>
          <p className='font-semibold lg:text-3xl uppercase'>{t("Footer.Legal")}</p>
          <p className="uppercase">{t("Footer.Cookies")}</p>
          <p className="uppercase">{t("Footer.ConsentManagement")}</p>
          <p className="uppercase">{t("Footer.Security")}</p>
          <p className="uppercase">{t("Footer.Privacy")}</p>
        </div>
      </div>
      <div className='flex p-2 mt-6 bg-gray-300 justify-center items-center'>
        <p className='font-semibold'>DOMUS S.R.L © {new Date().getFullYear()} - P.IVA 03183450232</p>
      </div>
    </div>
  )
}

export default Footer
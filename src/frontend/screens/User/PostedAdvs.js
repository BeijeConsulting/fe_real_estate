import React, { useEffect } from 'react'
import { getUserMeAdvs } from '../../../services/frontend/usersApi'
//TRANSLATION
import { useTranslation } from "react-i18next"
const PostedAdvs = () => {
    const { t } = useTranslation();
    useEffect(() => {
      getUserMeAdvs().then(res => console.log(res))

    }, [])


    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <h1 className='text-3xl font-bold'>{t("Dashboard.OnlineAds")}</h1>
            <p>{t("Dashboard.PostedAds")}</p>
        </div>
    )
}

export default PostedAdvs
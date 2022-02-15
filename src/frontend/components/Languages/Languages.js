import React from 'react'
import { useTranslation } from 'react-i18next'

const Languages = () => {

    const { i18n } = useTranslation()

    const changeLanguage = (lang) => () => {
        i18n.changeLanguage(lang)
    }

    return (
        <div>
            <p onClick={changeLanguage("it")}>IT</p>
            <p onClick={changeLanguage("en")}>ENG</p>
        </div>
    )
}

export default Languages
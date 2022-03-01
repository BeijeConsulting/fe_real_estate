import React from 'react'
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Textarea from '../UI/Textarea/Textarea';
import { useTranslation } from "react-i18next";

const ContactSeller = () => {
    const { t } = useTranslation();
    return (
        <>
            <Card className="flex flex-col p-4 mb-2 mx-auto items-center">
                <h1 className="text-2xl font-bold">{t("ContactSeller.contact")}</h1>
                <Input
                    className="rounded border-2 border-slate-900 focus:outline-none w-80 bg-slate-200 mb-2 p-2 text-slate-900"
                    placeholder={t("ContactSeller.typeEmail")} />

                <Textarea
                    minHeight={"50px"}
                    maxHeight={"280px"}
                    placeholder={t("ContactSeller.addText")}
                />
                <Button
                    className="mt-2 p-2 w-36 "
                    label={t("ContactSeller.send")} />

            </Card>
        </>
    )
}

export default ContactSeller;

import React from 'react'
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Textarea from '../UI/Textarea/Textarea';

const ContactSeller = () => {
    return (
        <>
            <Card className="flex flex-col p-4 mb-2 mx-auto items-center">
                <h1 className="text-2xl font-bold">Contatta il venditore</h1>
                <Input
                    className="rounded border-2 border-slate-900 focus:outline-none w-80 bg-slate-200 mb-2 p-2 text-slate-900"
                    placeholder={"Inserisci la tua email"} />

                <Textarea
                    minHeight={"50px"}
                    maxHeight={"280px"}
                    placeholder="Inserisci qui il testo da inviare"
                />
                <Button
                    className="mt-2 p-2 w-36 "
                    label={"Invia"} />

            </Card>
        </>
    )
}

export default ContactSeller;

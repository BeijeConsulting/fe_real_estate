import React from 'react';

//COMPONENTS
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

//CSS
import './FAQ.css';

//Translation
import { useTranslation } from 'react-i18next';

//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

//IMAGES
import YellowWoman from "../../../assets/images/womanhelp1.jpg";

const FAQ = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navbar />

            <h1 className="font-bold text-3xl flex justify-center mt-4">F.A.Q.</h1>
            <div className='faq-container'>
                <div className='faq-questions'>

                    <div className="text-2xl bg-zinc-200 rounded-lg w-full h-16 mt-8 flex items-center p-2 justify-between hover:border hover:border-yellow-500 cursor-pointer">
                        {t("FAQ.CantAddAd")}

                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </div>
                    <div className="text-2xl bg-zinc-200 rounded-lg w-full h-16 mt-8 flex items-center p-2 justify-between hover:border hover:border-yellow-500 cursor-pointer">

                        {t("FAQ.HowToDownload")}
                        <div className='arrow-helper'>
                            <FontAwesomeIcon icon={faCircleArrowRight} />
                        </div>
                    </div>
                    <div className="text-2xl bg-zinc-200 rounded-lg w-full h-16 mt-8 flex items-center p-2 justify-between hover:border hover:border-yellow-500 cursor-pointer">

                        {t("FAQ.HowToBusiness")}
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </div>
                    <div className="text-2xl bg-zinc-200 rounded-lg w-full h-16 mt-8 flex items-center p-2 justify-between hover:border hover:border-yellow-500 cursor-pointer">

                        {t("FAQ.AssessmentProblems")}
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </div>
                    <h1 className='uppercase'> {t("FAQ.Help")} </h1>
                </div>

                <div className='faq-image'> </div>
            </div>
            <h2 className="text-4xl mt-8 font-bold ml-8 uppercase">{t("FAQ.NotFound")}</h2>
            <h3 className="ml-8 text-xl uppercase">{t("FAQ.Call")}</h3>
            <p className="ml-8 font-semibold text-xl">+39 0371 678965</p>
            <p className="ml-8 font-semibold text-xl">+39 0382 786912</p>

            <div className="flex items-end justify-end  max-h-96">
                <img src={YellowWoman} />
            </div>

            <div className="mt-8">
                <Footer />
            </div>



        </>
    )
}

export default FAQ
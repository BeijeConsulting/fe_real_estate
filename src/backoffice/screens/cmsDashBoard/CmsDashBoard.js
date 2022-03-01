import "./cmsDashBoard.css"
import React, { useState, useEffect } from "react";
/* react-router-dom*/
import { useNavigate, useParams, useLocation, Outlet } from "react-router-dom"

/* funcComponet */
import TagComp from "../../componets/funcComponets/tagComp/TagComp";

import { useTranslation } from "react-i18next";

const CmsDashBoard = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const { t } = useTranslation()

    /* ComponetsDidMount */
    useEffect(() => {
    }, [])

    /* method to navigate */
    const navigateToPath = (path) => () => {
        navigate(path)
    }
    return (
        <>
            <nav className="container-cms-dashboard" >
                <TagComp
                    key={Math.random()}
                    clickTag={navigateToPath(`/admin/dashBoard/users`)}
                    label={t("BoDashboard.CmsDashboard.Users")} refClass={location.pathname.includes("users") ? "selected" : "unselected"} />
                <TagComp
                    key={Math.random()}
                    clickTag={navigateToPath(`/admin/dashBoard/advertisements`)}
                    label={t("BoDashboard.CmsDashboard.Ads")} refClass={location.pathname.includes("advertisements") ? "selected" : "unselected"} />
                <TagComp
                    key={Math.random()}
                    clickTag={navigateToPath(`/admin/dashBoard/businesses`)}
                    label={t("BoDashboard.CmsDashboard.Businesses")} refClass={location.pathname.includes("business") ? "selected" : "unselected"} />
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default CmsDashBoard
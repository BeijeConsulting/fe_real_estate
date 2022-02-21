import "./cmsBusiness.css"
import React, { useState, useEffect } from "react";
/* react-router-dom*/
import { useNavigate, useParams, useLocation, Outlet } from "react-router-dom"

/* funcComponet */
import TagComp from "../../componets/funcComponets/tagComp/TagComp";


const CmsBusiness = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const params = useParams()
    const [state, setState] = useState({
    })

    /* ComponetsDidMount */
    useEffect(() => {
    }, [])

    /* method to navigate */
    const navigateToPath = (path) => () => {
        navigate(path)
    }


    return (
        <>
            <nav className="container-cms-business" >
                <TagComp
                    key={Math.random()}
                    clickTag={navigateToPath(`/admin/business/${params.id}/details`)}
                    label={"Details"} refClass={location.pathname.includes("details") ? "selected" : "unselected"} />
                <TagComp
                    key={Math.random()}
                    clickTag={navigateToPath(`/admin/business/${params.id}/advertisements`)}
                    label={"Advertisements"} refClass={location.pathname.includes("advertisements") ? "selected" : "unselected"} />
                <TagComp
                    key={Math.random()}
                    clickTag={navigateToPath(`/admin/business/${params.id}/users`)}
                    label={"Users"} refClass={location.pathname.includes("users") ? "selected" : "unselected"} />
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default CmsBusiness
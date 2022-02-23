//import React
import { useEffect, useState } from "react";

// Import Connect   
import { connect } from "react-redux";

/* funcComponet */
import TagComp from "../../componets/funcComponets/tagComp/TagComp";

/* react-router-dom*/
import { useNavigate, useParams, useLocation, Outlet } from "react-router-dom"

import "./cmsUser.css"

const CmsUser = (props) => {

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
            <nav className="container-cms-user" >
                <TagComp
                    key={Math.random()}
                    clickTag={navigateToPath(`/admin/user/${params.id}/details`)}
                    label={"Details"} refClass={location.pathname.includes("details") ? "selected" : "unselected"} />
                <TagComp
                    key={Math.random()}
                    clickTag={navigateToPath(`/admin/user/${params.id}/advertisements`)}
                    label={"Advertisements"} refClass={location.pathname.includes("advertisements") ? "selected" : "unselected"} />
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    admin: state.adminDuck.admin
})

export default connect(mapStateToProps) (CmsUser)
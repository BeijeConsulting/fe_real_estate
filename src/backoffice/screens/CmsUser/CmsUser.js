// Import Connect   
import { connect } from "react-redux";

/* funcComponent */
import TagComp from "../../componets/funcComponets/tagComp/TagComp";

/* react-router-dom*/
import { useNavigate, useParams, useLocation, Outlet } from "react-router-dom"

import "./cmsUser.css"
import { useTranslation } from "react-i18next";

const CmsUser = () => {

    const location = useLocation()
    const navigate = useNavigate();
    const {t} = useTranslation()
    const params = useParams()


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
                    label={t("BoUsers.CmsUser.Details")} refClass={location.pathname.includes("details") ? "selected" : "unselected"} />
                <TagComp
                    key={Math.random()}
                    clickTag={navigateToPath(`/admin/user/${params.id}/advertisements`)}
                    label={t("BoUsers.CmsUser.Ads")} refClass={location.pathname.includes("advertisements") ? "selected" : "unselected"} />
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
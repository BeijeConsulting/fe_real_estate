//import React
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import Connect   
import { connect } from "react-redux";

const UserProfile = (props) => {
    const params = useParams()

    return(
        <div className="user-background">
            <div className="user-container">
            io sono l'utente con id: {params.id} ed il token {props.admin.token}

            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    admin: state.adminDuck.admin
})

export default connect(mapStateToProps) (UserProfile)
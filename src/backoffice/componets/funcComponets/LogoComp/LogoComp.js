import "./logoComp.css"
import PropTypes from 'prop-types';

/* assets */
import logo from "../../../assets/images/logo_default.jpg"

const LogoComp = (props) => {
    return (
        <div className="container-logoComp"
            style={
                {
                    height: props.LogoCompHeight,
                    width: props.LogoCompWidth,
                }
            }
        >
            <img src={props.LogoCompPath} alt={props.LogoCompAlt}></img>
        </div >
    )
}
LogoComp.defaultProps = {
    LogoCompPath: logo,
    LogoCompAlt: 'logo',
    LogoCompHeight: "50px",
    LogoCompWidth: "50px"
}

LogoComp.propTypes = {
    LogoCompAlt: PropTypes.string,
    LogoCompHeight: PropTypes.string,
    LogoCompWidth: PropTypes.string,
    LogoCompPath: PropTypes.string,
};

export default LogoComp
import "./tagComp.css"
import PropTypes from 'prop-types';


const TagComp = (props) => {
    const headlerClick = () => {
        if (props.clickTag !== undefined) {
            props.clickTag();
        }
    }


    return (
        <div onClick={headlerClick} className={`container-TagComp ${props.refClass}`}>
            <span>
                {props.label}
            </span>
        </div>
    )

}
TagComp.propTypes = {
    label: PropTypes.string,
    clickTag: PropTypes.func,
    refClass: PropTypes.string,
};
TagComp.defaultProps = {
    label: 'Tag'
};

export default TagComp


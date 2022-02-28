import { useTranslation } from "react-i18next";
import { Select } from 'antd';
import { setLang } from "../../../../redux/ducks/translationDuck";
import { connect } from "react-redux";

const Language = (props) => {
    const { i18n } = useTranslation();
    const { Option } = Select;

    const changeLanguage = (e) => {
        i18n.changeLanguage(e);

        props.dispatch(setLang(e))
    };

    return (
        <>
            <div>
                <Select defaultValue="disabled" style={{ width: 120 }} onChange={changeLanguage}>
                    <Option value="disabled" disabled>Scegli lingua</Option>
                        <Option value="it">IT</Option>
                        <Option value="en">EN</Option>
                </Select>
            </div>
        </>
    )

}

export default connect()(Language)
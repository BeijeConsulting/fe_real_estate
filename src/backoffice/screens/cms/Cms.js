import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './cms.css';
import 'antd/dist/antd.css';
import { Outlet, useNavigate, useLocation, useParams } from "react-router-dom";


//utils
import storage from "../../../common/utils/storage"
// REDUX
import { connect } from "react-redux"
import { setHeaderTitle } from '../../../redux/ducks/cmsDuck';
import { setAdmin } from '../../../redux/ducks/adminDuck';
// ANT DESIGN
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faRectangleList, faUsers, faChartLine, faStamp } from "@fortawesome/free-solid-svg-icons"
// TRANSLATIONS
import Language from '../../componets/funcComponets/languages/Language';
import { useTranslation } from 'react-i18next';
// API
import authAdminApi from '../../../services/backoffice/authAdminApi';

const { Header, Content, Footer, Sider } = Layout;

const Cms = (props) => {
    let location = useLocation()
    let navigate = useNavigate();
    const { t } = useTranslation();

    /*componentDidMount*/
    useEffect(() => {
        console.log(location.pathname)
        setTitleNavigate(location.pathname)

        if (!props.admin.username) {
            remenberMe()
        }
    }, [])

    // meth to navigate
    const setTitleNavigate = (title) => {
        let x = undefined
        if (title.includes("/admin")) {
            x = title.split("/")
            props.dispatch(setHeaderTitle(x[2]))
            navigate(`${title}`);
        } else {
            x = title.split("/")
            props.dispatch(setHeaderTitle(x[0]))
            navigate(`${title}`);
        }
    }

    //retrieve Admin data
    const remenberMe = async () => {
        await authAdminApi.updateAuthToken(props.dispatch).catch(() => {
            navigate("/admin-auth")
        })
    }

    //LogOut
    const logOut = () => {
        localStorage.setItem(storage.LOCAL_STORAGE_KEYS.USER_REFRESH_TOKEN, " ")
        props.dispatch(setAdmin({}))
        navigate("/admin-auth")
    }

    return (
        <>
            <Layout style={{ width: '100%', height: '100vh' }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]} >
                        <Menu.Item key={`/admin/profile`} icon={<UserOutlined />} onClick={() => setTitleNavigate("profile")}>
                            {t("BoCms.Cms.Profile")}
                        </Menu.Item>
                        <Menu.Item key={`/admin/dashBoard/users`} icon={<FontAwesomeIcon icon={faChartLine} />} onClick={() => setTitleNavigate("dashBoard/users")}>
                            {t("BoCms.Cms.Dashboard")}
                        </Menu.Item>
                        <Menu.Item key={`/admin/advertisements`} icon={<FontAwesomeIcon icon={faRectangleList} />} onClick={() => setTitleNavigate("advertisements")}>
                            {t("BoCms.Cms.Ads")}
                        </Menu.Item>
                        <Menu.Item key={`/admin/users`} icon={<FontAwesomeIcon icon={faUsers} />} onClick={() => setTitleNavigate("users")}>
                            {t("BoCms.Cms.Users")}
                        </Menu.Item>
                        <Menu.Item key={`/admin/businesses`} icon={<HomeOutlined />} onClick={() => setTitleNavigate("businesses")}>
                            {t("BoCms.Cms.Business")}
                        </Menu.Item>
                        <Menu.Item key={`/admin/collaborators`} icon={<FontAwesomeIcon icon={faBriefcase} />} onClick={() => setTitleNavigate("collaborators")}>
                            {t("BoCms.Cms.Checkers")}
                        </Menu.Item>
                        <Menu.Item key={`/admin/verification-adv`} icon={<FontAwesomeIcon icon={faStamp} />} onClick={() => setTitleNavigate("verification-adv")}>
                            {t("BoCms.Cms.Verifications")}
                        </Menu.Item>
                    </Menu>

                    <div className='logout'>
                        <Button type="link" onClick={logOut} danger >{t("BoCms.Cms.Logout")}</Button>
                    </div>
                </Sider>
                {
                    props.admin.username && props.title &&
                    <Layout>
                        <Header className={"site-layout-sub-header-backgroun header-style"} style={{ padding: 0, backgroundColor: 'var(--gray)' }} >
                            <div>  <h2 className='nav-title'>{props.title}</h2> </div>
                            <div className='languages'>
                                <Language />
                            </div>
                        </Header>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div className="site-layout-background">
                                {/* style={{ padding: 24, minHeight: 360 }} */}

                                <Outlet />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Domus ©2022 Created by Beije Team</Footer>
                    </Layout>
                }
            </Layout>
        </>
    );
};

Cms.propTypes = {

};

const mapStateToProps = state => ({
    admin: state.adminDuck.admin,
    title: state.cmsDuck.title
})

export default connect(mapStateToProps)(Cms);

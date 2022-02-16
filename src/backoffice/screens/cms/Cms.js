import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './cms.css';
import 'antd/dist/antd.css';
import { Outlet, useNavigate, useLocation, useParams } from "react-router-dom";

// REDUX
import { connect } from "react-redux"
import { setHeaderTitle } from '../../../redux/ducks/cmsDuck';

// ANT DESIGN
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faRectangleList, faUsers, faChartLine, faStamp } from "@fortawesome/free-solid-svg-icons"


const { Header, Content, Footer, Sider } = Layout;

const Cms = (props) => {
    let navigate = useNavigate();

    const setTitleNavigate = (title) => () => {
        props.dispatch(setHeaderTitle(title))
        navigate(
            `${title}`);
    }

    useEffect(() => {
        props.dispatch(setHeaderTitle("dashboard"))
        if (!props.admin.username) {
            navigate("/admin-auth")
        }
    }, [])

    return (
        <>
            <Layout style={{ width: '100%', height: '100vh' }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1" icon={<UserOutlined />} onClick={setTitleNavigate("profile")}>
                            Profilo
                        </Menu.Item>
                        <Menu.Item key="2" icon={<FontAwesomeIcon icon={faChartLine} />} onClick={setTitleNavigate("dashboard")}>
                            DashBoard
                        </Menu.Item>
                        <Menu.Item key="3" icon={<FontAwesomeIcon icon={faRectangleList} />} onClick={setTitleNavigate("advertisements")}>
                            Annunci
                        </Menu.Item>
                        <Menu.Item key="4" icon={<FontAwesomeIcon icon={faUsers} />} onClick={setTitleNavigate("users")}>
                            Users
                        </Menu.Item>
                        <Menu.Item key="5" icon={<HomeOutlined />} onClick={setTitleNavigate("businesses")}>
                            Business
                        </Menu.Item>
                        <Menu.Item key="6" icon={<FontAwesomeIcon icon={faBriefcase} />} onClick={setTitleNavigate("collaborators")}>
                            Collaboratori
                        </Menu.Item>
                        <Menu.Item key="7" icon={<FontAwesomeIcon icon={faStamp} />} onClick={setTitleNavigate("verification-adv")}>
                            Autenticazioni
                        </Menu.Item>
                    </Menu>

                    <div className='logout'>
                        <Button type="link" danger >Logout</Button>
                    </div>
                </Sider>
                <Layout>
                    <Header className={"site-layout-sub-header-backgroun header-style"} style={{ padding: 0, backgroundColor: 'var(--gray)' }} >
                        <div>  <h2 className='nav-title'>{props.title}</h2> </div>
                        <div>
                            <ul className='languages'>
                                <li className="button_lang languages">It</li>
                                <li className="button_lang languages">En</li>
                            </ul>
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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './cms.css';
import 'antd/dist/antd.css';
import { Outlet, useNavigate } from "react-router-dom";

// ANT DESIGN
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faRectangleList, faUsers, faChartLine } from "@fortawesome/free-solid-svg-icons"

const { Header, Content, Footer, Sider } = Layout;
const Cms = (props) => {
    let navigate = useNavigate();
    const [title, setTitle] = useState("Dashboard");
    const setTitleNavigate = (title) => () => {
        navigate(
            `${title}`,
            {
                state: {
                    title: "pippo",
                }
            });
        setTitle(title)
    }

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
                        <Menu.Item key="2" icon={<FontAwesomeIcon icon={faChartLine} />} onClick={setTitleNavigate("")}>
                            DashBoard
                        </Menu.Item>
                        <Menu.Item key="3" icon={<FontAwesomeIcon icon={faRectangleList} />} onClick={setTitleNavigate("advertisements")}>
                            Annunci
                        </Menu.Item>
                        <Menu.Item key="4" icon={<FontAwesomeIcon icon={faUsers} />} onClick={setTitleNavigate("users")}>
                            Users
                        </Menu.Item>
                        <Menu.Item key="5" icon={<HomeOutlined />} onClick={setTitleNavigate("Business")}>
                            Business
                        </Menu.Item>
                        <Menu.Item key="6" icon={<FontAwesomeIcon icon={faBriefcase} />} onClick={setTitleNavigate("collaborators")}>
                            Collaboratori
                        </Menu.Item>
                    </Menu>

                    <div className='logout'>
                        <Button type="link" danger >Logout</Button>
                    </div>
                </Sider>
                <Layout>
                    <Header className={"site-layout-sub-header-backgroun header-style"} style={{ padding: 0, backgroundColor: 'var(--gray)' }} >
                        <div>  <h2 className='nav-title'>{title}</h2> </div>
                        <div>
                            <ul className='languages'>
                                <li className="button_lang languages">It</li>
                                <li className="button_lang languages">En</li>
                            </ul>
                        </div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background">

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
export default Cms;

import React from 'react'
import { Layout, Menu } from 'antd';
import Logo from './logo.png'
import {adminRoutes} from '../../routes'
import {withRouter} from 'react-router-dom'
const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route=>route.isShow)

function index(props) {
    return (
        <Layout>
    <Header className="header" style={{
      backgroundColor: 'pink'
    }}>
      <div className="logo" />
      <img src={Logo} width='150px' height='65px' alt='test'></img>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {routes.map(route=>{
            return (
              <Menu.Item 
                key={route.path}
                onClick={p=>props.history.push(p.key)}>
                <img src={Logo} alt='1' width='40px'/>
                {route.title}
              </Menu.Item>)
          })}
        </Menu>
      </Sider>
      <Layout style={{ padding: '16px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}

export default withRouter(index);

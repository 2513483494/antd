import index from "../pages/admin/dashboard";
import Edit from "../pages/admin/products/Edit";
import List from "../pages/admin/products/List";
import Login from "../pages/Login";
import PageNotfound from "../pages/PageNotfound";
import 'antd/dist/antd.css'
import {
    HomeOutlined,
    SettingFilled,
  } from '@ant-design/icons';

export const mainRoutes = [{
    path: '/login',
    component: Login,
}, {
    path: '/404',
    component: PageNotfound,
}];

export const adminRoutes = [{
    path: '/admin/dashboard',
    component: index,
    isShow: true,
    title: '看板',
    icon: HomeOutlined
},{
    path: '/admin/products',
    component: List,
    exact: true,
    isShow: true,
    title: '商品管理'
}, {
    path: '/admin/products/edit/:id',
    component: Edit,
    isShow: false,
    icon: SettingFilled
}
];
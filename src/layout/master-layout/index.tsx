import {
    PieChartOutlined,
    InsertRowBelowOutlined,
    RightCircleOutlined,
    PlaySquareOutlined,
    ToolOutlined,
    RobotOutlined,
} from '@ant-design/icons';
import type { MenuProps, DrawerProps } from 'antd';
import type { RadioChangeEvent } from 'antd/es/radio';
import { Layout, Menu, Button, Drawer, Radio, Space } from 'antd';
import React, { useState } from 'react';
import style from './style.module.scss';
import { Outlet } from 'react-router-dom';
import { faDownload, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MenuItemInterface } from './interface';


const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type
    } as MenuItem;
}

const data: MenuItemInterface[] = [
    {
        parentId: null,
        id: '1a',
        icon: <PieChartOutlined />,
        title: 'Store',
        children: [
            {
                parentId: '1a',
                id: '1ab',
                icon: '',
                title: 'Settings',
                children: [{
                    parentId: '1ab',
                    id: '1abc',
                    icon: '',
                    title: 'Settings',
                    children: []
                }]
            }
        ]
    },
    {
        parentId: null,
        id: '1b',
        icon: <PieChartOutlined />,
        title: 'Store',
        children: [
            // {
            //     parentId: '1a',
            //     id: '1ab',
            //     icon: '',
            //     title: 'Settings',
            //     children: [
            //         {
            //             parentId: '1ab',
            //             id: '1abc',
            //             icon: '',
            //             title: 'Settings',
            //             children: []
            //         }
            //     ]
            // }
        ]
    }
]



const Layouts: React.FC = () => {
    const dataLoop = (data: any) => {
        return data.map((item: any, i: any) => {
            if (item.children.length === 0) {
                return getItem(item.title, item.id, item.icon)
            } else {
                if (item.parentId === null) {
                    return getItem(<b>{item.title}</b>, item.id, item.icon, dataLoop(item.children))
                } else {
                    return getItem(<p>{item.title}</p>, item.id, item.icon, dataLoop(item.children), 'group')
                }

            }
        })
    }
    const items: MenuItem[] = [
        getItem(<b>STORE</b>, 'store1', <PieChartOutlined />, [
            getItem(<p style={{ fontWeight: '500' }}>Settings</p>, 'store2', null, [
                getItem('All Stores', 'store3')
            ], 'group')
        ]),
        getItem(<b>CATALOG</b>, 'catalog1', <InsertRowBelowOutlined />, [
            getItem(<p style={{ fontWeight: '500' }}>Products</p>, 'catalog2', null, [
                getItem('Catalog', 'catalog3'),
                getItem('Pricing Table', 'catalog4'),
                getItem('Catalog Site Mapping', 'catalog5'),
                getItem('Catalog Content', 'catalog6'),
                getItem('Meta Title', 'catalog7'),
                getItem('Vendor Title', 'catalog8')
            ], 'group'),
        ]),
        getItem(<b>LABELING</b>, 'labeling1', <RightCircleOutlined />, [
            getItem(<p style={{ fontWeight: '500' }}>Products</p>, 'labeling2', null, [
                getItem('Predict Categories', 'labeling3'),
                getItem('Custom Labels', 'labeling4'),
                getItem('Replace Characters', 'labeling5'),
                getItem('Pages Templates', 'labeling6'),
                getItem('Group & Keywords Manage', 'labeling7'),
            ], 'group'),
        ]),
        getItem(<b>ADVERTISE</b>, 'advertise1', <PlaySquareOutlined />, [
            getItem(<p style={{ fontWeight: '500' }}>Google</p>, 'advertise2', null, [
                getItem('Campaign Mapping', 'advertise3'),
            ], 'group'),
        ]),
        getItem(<b>TOOLS</b>, 'tools1', <ToolOutlined />, [
            getItem(<p style={{ fontWeight: '500' }}>DNS</p>, 'tools2', null, [
                getItem('Redirect Configuration', 'tools3'),
            ], 'group'),
        ]),
        getItem(<b>REPORT</b>, 'report1', <RobotOutlined />, [
            getItem(<p style={{ fontWeight: '500' }}>Report</p>, 'report2', null, [
                getItem('Report Product Labeling', 'report3'),
                getItem('Report Request Catalog', 'report4'),
                getItem('Report Similar Catalog', 'report5'),
            ], 'group'),
        ]),

    ];
    const [collapsed, setCollapsed] = useState(false);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

    const showDrawer = () => {
        setOpen(true);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    <div className={style.logo}>
                        <img src='https://stg.canawan.com/logos-canawan/CANAWAN-2000-2000.png' alt='Logo' />
                    </div>
                    {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={dataLoop(data)} /> */}
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <div className={style.header}>
                            <div className={style.group}>
                                <FontAwesomeIcon icon={faDownload} fontSize='20px' cursor='pointer' />
                                <div className={style.infor} onClick={showDrawer}>
                                    <span>minh.duong</span>
                                    <img src='https://image.thanhnien.vn/w1024/Uploaded/2022/abfluao/2022_09_01/6-5116.jpg' />
                                </div>
                            </div>
                        </div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>@Canawan - Catalog</Footer>
                </Layout>
            </Layout>
            <div>
                <Drawer
                    title={
                        <div className={style.drawer}>
                            <span>Hello world</span>
                            <FontAwesomeIcon icon={faXmark} fontSize='20px' cursor='pointer' onClick={onClose} />
                        </div>
                    }
                    closable={false}
                    placement={placement}
                    width={400}
                    onClose={onClose}
                    open={open}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        </>
    );
};

export default Layouts;
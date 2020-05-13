import React from 'react';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

import { Layout, Menu, Icon, Typography } from 'antd';
import OrgChartType from '../OrgChartType';

import styles from './styles.module.scss';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const Sidebar = () => {
    return (
        <aside className={styles['sidebar']}>
            <div className={styles['title']}>
                TẠO MỚI
            </div>
            <div className={styles['listType']}>
                <OrgChartType
                    icon={<WorkOutlineIcon style={{ fontSize: '20px' }} />}
                    label="Role"
                />
                <OrgChartType
                    icon={<WorkOutlineIcon style={{ fontSize: '20px' }} />}
                    label="Assistant"
                />
                <OrgChartType
                    icon={<WorkOutlineIcon style={{ fontSize: '20px' }} />}
                    label="Department"
                />
            </div>
        </aside>
    )
}

// class SiderDemo extends React.Component {
//     state = {
//         collapsed: false,
//     };

//     toggle = () => {
//         this.setState({
//             collapsed: !this.state.collapsed,
//         });
//     };

//     render() {
//         return (
//             <Layout>
//                 <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
//                     <div className="logo" />
//                     <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//                         <Menu.Item key="1">
//                             <Icon type="user" />
//                             <span>nav 1</span>
//                         </Menu.Item>
//                         <Menu.Item key="2">
//                             <Icon type="video-camera" />
//                             <span>nav 2</span>
//                         </Menu.Item>
//                         <Menu.Item key="3">
//                             <Icon type="upload" />
//                             <span>nav 3</span>
//                         </Menu.Item>
//                     </Menu>
//                 </Sider>
//                 <Layout>
//                     <Header style={{ background: '#fff', padding: 0 }}>
//                         <Icon
//                             className="trigger"
//                             type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
//                             onClick={this.toggle}
//                         />
//                     </Header>
//                     <Content
//                         style={{
//                             margin: '24px 16px',
//                             padding: 24,
//                             background: '#fff',
//                             minHeight: 280,
//                         }}
//                     >
//                         Content
//           </Content>
//                 </Layout>
//             </Layout>
//         );
//     }
// }

export default Sidebar;
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

export default Sidebar;
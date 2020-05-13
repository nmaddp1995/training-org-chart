import React from 'react';

import Sidebar from '../components/Sidebar';
import styles from './styles.module.scss';

const OrgChartContainer = () => {
    return (
        <div className={styles['container']}>
            <Sidebar />
        </div>
    )
};

export default OrgChartContainer;

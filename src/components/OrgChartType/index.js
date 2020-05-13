import React from 'react';

import styles from './styles.module.scss';

const OrgChartType = ({ icon, label }) => {
    return (
        <div className={styles['container']}>
            <div className={styles['icon']}>
                {icon}
            </div>
            <div className={styles['label']}>
                {label}
            </div>
        </div>
    )
};

export default OrgChartType;

import OrgTree from './Lib';
import React from 'react';
import { Card } from 'antd';

const horizontal = false; // true：横向  false：纵向
const collapsable = false; // true：可折叠 false：不可折叠 
const expandAll = true; // true: 全部展开 false：全部折叠 

const data = {
    id: 0,
    label: <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>,
    children: [{
        id: 1,
        label: '技术部',
        horizontal: true,
        children: [{
            id: 4,
            label: '后端工程师',
        }, {
            id: 5,
            label: '前端工程师',
        }, {
            id: 6,
            label: '运维工程师',
        }]
    }, {
        id: 2,
        label: '人事部'
    }, {
        id: 3,
        label: '销售部'
    }]
}

const ReactOrgTree = () => {
    return (
<OrgTree
    data={data}
    horizontal={false}
    collapsable={collapsable}
    expandAll={expandAll}
/>
    )
}

export default ReactOrgTree;
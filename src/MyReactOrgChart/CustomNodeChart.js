import React from "react";
import OrganizationChart from "./components/ChartContainer";
import MyNode from "./MyNode";

const CustomNodeChart = () => {
    const ds = {
        id: null,
        name: "Lao Lao",
        title: "general manager",
        children: [
            { id: "n2", name: "Bo Miao", title: "department manager" },
            {
                id: "n3",
                name: "Su Miao",
                title: "department manager",
                children: [
                    { id: "n4", name: "Tie Hua", title: "senior engineer" },
                    {
                        id: "n5",
                        name: "Hei Hei",
                        title: "senior engineer",
                        children: [
                            { id: "n6", name: "Dan Dan", title: "engineer", children:
                            [
                                { id: "n100", name: "Yue Yue", title: "senior engineer" },
                                { id: "n101", name: "Yue Yue", title: "senior engineer" },
                                { id: "n102", name: "Yue Yue", title: "senior engineer" },
                                { id: "n103", name: "Yue Yue", title: "senior engineer" }
                            ] },
                            { id: "n7", name: "Xiang Xiang", title: "engineer" }
                        ]
                    },
                    { id: "n8", name: "Pang Pang", title: "senior engineer" }
                ]
            },
            { id: "n9", name: "Hong Miao", title: "department manager" },
            {
                id: "n10",
                name: "Chun Miao",
                title: "department manager",
                children: [{
                    id: "n11",
                    name: "Yue Yue",
                    title: "senior engineer",
                    children:
                        [
                            { id: "n12", name: "Yue Yue", title: "senior engineer" },
                            { id: "n13", name: "Yue Yue", title: "senior engineer" },
                            { id: "n14", name: "Yue Yue", title: "senior engineer" }
                        ]
                    }]
            }
        ]
    };

    const ds2 = {
        id: null,
        children: [
            { id: "n2", name: "Bo Miao", title: "department manager" },
            {
                id: "n3",
                name: "Su Miao",
                title: "department manager",
                children: [
                    { id: "n4", name: "Tie Hua", title: "senior engineer" },
                    {
                        id: "n5",
                        name: "Hei Hei",
                        title: "senior engineer",
                        children: [
                            { id: "n6", name: "Dan Dan", title: "engineer" },
                            { id: "n7", name: "Xiang Xiang", title: "engineer" }
                        ]
                    },
                    { id: "n8", name: "Pang Pang", title: "senior engineer" }
                ]
            },
            { id: "n9", name: "Hong Miao", title: "department manager" },
            {
                id: "n10",
                name: "Chun Miao",
                title: "department manager",
                children: [{ id: "n11", name: "Yue Yue", title: "senior engineer" }]
            }
        ]
    }

    return (
        <>
            <OrganizationChart
                datasource={ds}
                chartClass="myChart"
                NodeTemplate={MyNode}
                collapsible={false}
                pan={true}
                zoom={true}
                zoominLimit={10}
                zoomoutLimit={0.5}
            />
        </>
    )
};

export default CustomNodeChart;

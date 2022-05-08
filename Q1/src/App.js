import "antd/dist/antd.css";
import { Button, Input, Slider, Table, Spin } from "antd";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { SearchOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";

export default function App() {
  const [allResData, setAllResData] = useState(null);
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    const fetchFunc = async () => {
      setIsFetched(true);
      const { data } = await (await fetch("/api/properties")).json();
      const reduceData = data.reduce((prev, curr) => {
        const { state, city, price } = curr;
        if (state === "Georgia") {
          if (city in prev) {
            prev[city].count++;
            prev[city].total += price;
          } else {
            prev[city] = {};
            prev[city].city = city;
            prev[city].state = "Georgia";
            prev[city].count = 1;
            prev[city].total = price;
          }
          prev[city].average = Math.floor(prev[city].total / prev[city].count);
        }
        return prev;
      }, {});
      setAllResData(Object.values(reduceData));
      return setIsFetched(false);
    };
    fetchFunc();
  }, []);

  const columns = [
    {
      title: "State",
      dataIndex: "state",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Houses",
      dataIndex: "count",
    },
    {
      title: "Avg. Price",
      dataIndex: "average",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Spin size="large" spinning={isFetched}>
          <Table
            style={{ display: "flex", flex: 1, margin: 10 }}
            columns={columns}
            dataSource={allResData}
            rowKey="id"
          ></Table>
        </Spin>
      </header>
    </div>
  );
}

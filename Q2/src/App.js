import "antd/dist/antd.css";
import { Button, Input, Slider, Table } from "antd";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { SearchOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";

export default function App() {
  const [allResData, setAllResData] = useState(null);
  useEffect(() => {
    const fetchFunc = async () => {
      const res = await (await fetch("/api/properties")).json();
      setAllResData(res.data);
    };
    fetchFunc();
  }, []);
  const sliderProps = {
    range: true,
    defaultValue: [0, 500000],
    min: 0,
    max: 500000,
    onChange: (values) => {
      // console.log(values,record);
    },
    tipFormatter: (value) => {
      return value;
    },
  };
  const slider = () => (
    <div
      className="custom-filter-dropdown ant-table-filter-dropdown"
      style={{ minWidth: "20rem", padding: "0.5rem 1rem" }}
    >
      <Row>
        <Col span={4}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <strong>Min:</strong>
            </div>
            <div>0</div>
          </div>
        </Col>
        <Col span={16}>
          <Slider {...sliderProps} />
        </Col>
        <Col span={4}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <strong>Max:</strong>
            </div>
            <div>500000</div>
          </div>
        </Col>
      </Row>
    </div>
  );

  const columns = [
    {
      title: "State",
      dataIndex: "state",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.state.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "City",
      dataIndex: "city",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.city.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Type",
      dataIndex: "type",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </div>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.type.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <div
            className="custom-filter-dropdown ant-table-filter-dropdown"
            style={{ minWidth: "20rem", padding: "0.5rem 1rem" }}
          >
            <Row>
              <Col span={4}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <strong>Min:</strong>
                  </div>
                  <div>0</div>
                </div>
              </Col>
              <Col span={16}>
                <Slider
                  range={true}
                  defaultValue={[0, 500000]}
                  min={0}
                  max={500000}
                  onChange={(values) => {
                    setSelectedKeys(values ? [values] : []);
                    confirm({ closeDropdown: false });
                    // console.log(values);
                  }}
                  tipFormatter={(value) => {
                    return value;
                  }}
                />
              </Col>
              <Col span={4}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <strong>Max:</strong>
                  </div>
                  <div>500000</div>
                </div>
              </Col>
            </Row>
          </div>
        );
      },
      onFilter: (value, record) => {
        return record.price >= value[0] && record.price <= value[1];
      },
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Table
          style={{ display: "flex", flex: 1, margin: 10 }}
          columns={columns}
          dataSource={allResData}
        ></Table>
      </header>
    </div>
  );
}

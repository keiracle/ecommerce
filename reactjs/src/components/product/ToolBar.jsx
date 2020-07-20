import React, { useState } from "react";
import styled from "styled-components";
import { Input, Row, Col, Select, Checkbox } from "antd";
import Button from "../commons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Option } = Select;
const { Search } = Input;

const plainOptions = ["Apple", "Pear", "Orange", "red", "blue", "pink"];
const defaultCheckedList = ["Apple", "Orange"];

const ToolBar = React.memo(props => {
  const {
    value,
    pageSize,
    sortType,
    onSort,
    onSearch,
    onPageSizeChange
  } = props;

  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  const [indeterminate, setIndeterminate] = useState(
    !!checkedList.length && checkedList.length < plainOptions.length
  );

  const [checkAll, setCheckAll] = useState(
    checkedList.length === plainOptions.length
  );

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const onCheckboxGroupChange = checkedList => {
    setCheckedList(checkedList);
    setIndeterminate(
      !!checkedList.length && checkedList.length < plainOptions.length
    );
    setCheckAll(checkedList.length === plainOptions.length);
  };

  return (
    <SToolBar>
      <Search
        placeholder="Input search text"
        onSearch={onSearch}
        style={{ width: 200 }}
      />
      <Select
        defaultValue={pageSize}
        style={{ width: 80 }}
        onChange={onPageSizeChange}
      >
        <Option value={8}>8</Option>
        <Option value={16}>16</Option>
        <Option value={32}>32</Option>
      </Select>
      <Button
        variant="text"
        color="secondary"
        endIcon={
          <FontAwesomeIcon
            icon={sortType.order === "asc" ? "angle-down" : "angle-up"}
          />
        }
        onClick={onSort}
      >
        Price
      </Button>
      {/* <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Checkbox.Group
        style={{ width: "100%" }}
        // options={plainOptions}
        value={checkedList}
        onChange={onCheckboxGroupChange}
      >
        <Row>
          <Col span={8}>
            <Checkbox value="Apple">Apple</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Pear">Pear</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Orange">Orange</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="red">red</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="blue">blue</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="pink">pink</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group> */}
    </SToolBar>
  );
});

const SToolBar = styled.div`
  width: 100%;
  min-height: 50px;
  max-height: 200px;
`;

export default ToolBar;

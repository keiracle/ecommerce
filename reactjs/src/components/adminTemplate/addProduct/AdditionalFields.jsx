import React from "react";
import { Checkbox, InputNumber, DatePicker, Row, Col } from "antd";
import MyInput from "../../commons/MyInput";
import moment from "moment";

const { RangePicker } = DatePicker;

const AdditionalFields = props => {
  const {
    isHotDeal,
    hotDealPrice,
    isPublished,
    quantityForDeal,
    hotDealExpired,
    handleHotDeal,
    handleDealPrice,
    handleQuantityForDeal,
    handleDateExpired,
    handleOk
  } = props;

  return (
    <div>
      <Row gutter={[0, 40]}>
        <Col>
          <Checkbox onChange={handleHotDeal} checked={isHotDeal}>
            Is Hot Sale
          </Checkbox>
        </Col>
      </Row>
      <Row gutter={[0, 40]}>
        <Col span={12}>
          <MyInput label="Hot deal price">
            <InputNumber
              min={0}
              value={hotDealPrice}
              formatter={value =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={value => value.replace(/\$\s?|([.,]*)/g, "")}
              step={1}
              size="default"
              disabled={!isPublished || !isHotDeal}
              onChange={handleDealPrice}
            />
          </MyInput>
        </Col>
        <Col span={12}>
          <MyInput label="Quantity for deal">
            <InputNumber
              min={0}
              value={quantityForDeal}
              parser={value => value.replace(/\$\s?|([.,]*)/g, "")}
              step={1}
              size="default"
              disabled={!isPublished || !isHotDeal}
              onChange={handleQuantityForDeal}
            />
          </MyInput>
        </Col>
      </Row>
      <Row gutter={[0, 40]}>
        <Col>
          {hotDealExpired.startDate && (
            <MyInput label="Date start - Date end">
              <RangePicker
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD HH:mm"
                // defaultValue={[moment(), moment()]}
                value={[
                  moment(hotDealExpired.startDate),
                  moment(hotDealExpired.endDate)
                ]}
                disabled={!isPublished || !isHotDeal}
                onChange={handleDateExpired}
                onOk={handleOk}
              />
            </MyInput>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AdditionalFields;

import React from "react";
import styled from "styled-components";
import ClockCounter from "./ClockCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TimeReminderDetail = React.memo(props => {
  const {
    setIsHotDeal,
    hotDealExpired,
    quantityForDeal,
    quantityDealSold
  } = props;

  const diffTime = Math.abs(Date.now() - new Date(hotDealExpired.endDate));
  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffSecs = Math.ceil(diffTime / 1000);

  const getPercentSoled = () => {
    return Math.round((quantityDealSold / quantityForDeal) * 100);
  };

  return (
    <STimeReminderDetail>
      <FontAwesomeIcon
        icon={["far", "clock"]}
        size="1x"
        style={{ marginRight: "5px" }}
      />
      Hot deal end in :
      <ClockCounter
        setIsSale={setIsHotDeal}
        timeInSecs={diffSecs}
        style={{ display: "inline-block", fontSize: "16px" }}
      />
      <SDealInfo className="deal-info">
        <SContent className="content">
          <p className="text">sold {quantityDealSold}</p>
        </SContent>
        <SBar className="bar">
          <SPercent className="percent" percent={getPercentSoled()} />
        </SBar>
      </SDealInfo>
    </STimeReminderDetail>
  );
});

const STimeReminderDetail = styled.div`
  display: block;
  width: 100%;
  margin-top: 5px;
  user-select: none;
`;

const SDealInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row nowrap;
  padding-top: 10px;
`;

const SBar = styled.div`
  position: relative;
  width: 85%;
  height: 8px;
  border-radius: 10px;
  background-color: rgb(255, 232, 239);
`;

const SPercent = styled(SBar)`
  position: absolute;
  width: ${({ percent }) => `${percent}%`};
  background-color: ${({ theme }) => theme.color.primaryRed};
`;

const SContent = styled.div`
  position: relative;
  flex: 1;
  text-align: start;

  & > p {
    margin: 0;
    text-transform: capitalize;
    font-size: 12px;
    color: ${({ theme }) => theme.color.primaryRed};
  }
`;

export default TimeReminderDetail;

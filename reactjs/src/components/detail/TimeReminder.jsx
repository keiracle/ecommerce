import React from "react";
import styled from "styled-components";
import ClockCounter from "./ClockCounter";
import TimeReminderDetail from "./TimeReminderDetail";

const TimeReminderSimple = React.memo(props => {
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
    <STimeReminderSimple>
      <SBar className="bar">
        <SPercent className="percent" percent={getPercentSoled()} />
        <SContent className="content">
          <p className="text">sold {quantityDealSold}</p>
        </SContent>
      </SBar>
      <ClockCounter setIsSale={setIsHotDeal} timeInSecs={diffSecs} />
    </STimeReminderSimple>
  );
});

const STimeReminderSimple = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  margin-top: 5px;
  justify-content: center;
  user-select: none;
`;

const SBar = styled.div`
  position: relative;
  flex: 1;
  height: 18px;
  border-radius: 10px;
  background-color: rgb(255, 190, 134);
`;

const SPercent = styled(SBar)`
  position: absolute;
  width: ${({ percent }) => `${percent}%`};
  background-color: rgb(234, 120, 0);
`;

const SContent = styled(SBar)`
  position: absolute;
  width: 100%;
  text-align: center;
  background-color: transparent;

  & > p {
    margin: 0;
    text-transform: capitalize;
    font-size: 12px;
    color: ${({ theme }) => theme.color.primaryLight};
  }
`;

// export default TimeReminderSimple;

const TimeReminder = {
  Simple: TimeReminderSimple,
  Detail: TimeReminderDetail
};

export default TimeReminder;

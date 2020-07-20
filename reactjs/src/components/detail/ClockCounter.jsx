import React, { useEffect, useState } from "react";
import styled from "styled-components";

function convertToSecond({ days, hours, mins, secs }) {
  let result = 0;
  result += days * 86400;
  result += hours * 3600;
  result += mins * 60;
  return result + secs;
}

function convertToTime(expiredTimeInSecond) {
  // bitwise | 0 same as Math.floor(), parseInt()
  const days = (expiredTimeInSecond / 86400) | 0;
  const hours = ((expiredTimeInSecond - days * 86400) / 3600) | 0;
  const mins = ((expiredTimeInSecond - days * 86400 - hours * 3600) / 60) | 0;
  const secs =
    (expiredTimeInSecond - days * 86400 - hours * 3600 - mins * 60) | 0;

  return { days, hours, mins, secs };
}

const ClockCounter = props => {
  const { children, setIsSale, style, ...rest } = props;

  let { timeInSecs } = props;

  const [timer, setTimer] = useState({
    days: "",
    hours: "",
    mins: "",
    secs: ""
  });

  useEffect(() => {
    setTimer(convertToTime(timeInSecs));

    const saleExpired = setInterval(() => {
      timeInSecs--;

      if (timeInSecs < 0) {
        setIsSale(false);
      } else setTimer(convertToTime(timeInSecs));
    }, 1000);

    return () => {
      clearInterval(saleExpired);
    };
  }, [setIsSale, timeInSecs]);

  useEffect(() => {}, [timer]);

  const getTime = () => {
    const days = timer.days < 10 ? `0${timer.days}` : timer.days;
    const hours = timer.hours < 10 ? `0${timer.hours}` : timer.hours;
    const mins = timer.mins < 10 ? `0${timer.mins}` : timer.mins;
    const secs = timer.secs < 10 ? `0${timer.secs}` : timer.secs;

    return (
      <SClockCounter
        style={style}
        {...rest}
      >{`${days} days ${hours}:${mins}:${secs}`}</SClockCounter>
    );
  };

  return getTime();
};

const SClockCounter = styled.p`
  font-size: 12px;
  font-weight: lighter;
  color: ${({ theme }) => theme.color.primaryDark};
  margin: 0 0 0 5px;
`;

export default ClockCounter;

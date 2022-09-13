import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
function Countdown({ eventDate }) {
  const [timeDays, setTimeDays] = useState();
  const [timeHour, setTimeHour] = useState();
  const [timeMinute, setTimeMinute] = useState();
  const [timeSecond, setTimeSecond] = useState();
  const [expireMessage, setExpireMessage] = useState(false);
  let intervalTime, distance;
  const startTimer = () => {
    const countDownDate = new Date(eventDate).getTime();

    intervalTime = setInterval(() => {
      const nowDate = new Date().getTime();
      distance = countDownDate - nowDate;
      const daysCount = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hourCount = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minuteCount = Math.floor(
        (distance % (60 * 60 * 1000)) / (1000 * 60)
      );
      const secondCount = Math.floor((distance % (60 * 1000)) / 1000);
      //Stop Timer
      if (distance < 0) {
        setExpireMessage(true);
        clearInterval(intervalTime.current);
      }
      //Update Timer
      else {
        setTimeDays(daysCount);
        setTimeHour(hourCount);
        setTimeMinute(minuteCount);
        setTimeSecond(secondCount);
      }
    });
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(intervalTime.current);
    };
  }, []);

  if (expireMessage) {
    return (
      <>
        <h5 className="expoire_msg">Sorry, the offer does't exit</h5>
      </>
    );
  } else {
    return (
      <div className="countdown_wrapper">
        <ul className="d-flex align-items-center flex-wrap-wrap g-sm">
          <li>{timeDays}D</li>
          <li>{timeHour}H</li>
          <li>{timeMinute}M</li>
          <li>{timeSecond}S</li>
        </ul>
      </div>
    );
  }
}

Countdown.propTypes = {
  eventDate: PropTypes.string,
};
Countdown.defaultProps = {
  eventDate: "Dec 31,2025",
};

export default Countdown;

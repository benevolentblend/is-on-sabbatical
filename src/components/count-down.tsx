"use client";

import useCountDown from "~/hooks/use-count-down";

interface CountDownProps {
  targetDate: string | Date;
}

const CountDown: React.FC<CountDownProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  if (days + hours + minutes + seconds < 0) {
    return "now!";
  }

  return (
    <>
      in {days} Days, {hours} hours, {minutes} Minutes, {seconds} Seconds
    </>
  );
};

export default CountDown;

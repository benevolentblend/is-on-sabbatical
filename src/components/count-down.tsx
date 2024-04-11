"use client";

import useCountDown from "~/hooks/use-count-down";
import Segment from "~/components/segment";

interface CountDownProps {
  targetDate: string | Date;
  size?: "small" | "large";
}

const CountDown: React.FC<CountDownProps> = ({
  targetDate,
  size = "small",
}) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  return (
    <div className="flex flex-row justify-center">
      <Segment unit="Days" value={days} size={size} />
      <Segment unit="Hours" value={hours} size={size} />
      <Segment unit="Minutes" value={minutes} size={size} />
      <Segment unit="Seconds" value={seconds} size={size} />
    </div>
  );
};

export default CountDown;

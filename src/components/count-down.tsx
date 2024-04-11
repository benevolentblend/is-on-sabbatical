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
  const flash = days < 15 && seconds % 2 == 0;

  return (
    <div className="flex flex-row justify-center">
      <Segment unit="Days" value={days} size={size} flash={flash} />
      <Segment unit="Hours" value={hours} size={size} flash={flash} />
      <Segment unit="Minutes" value={minutes} size={size} flash={flash} />
      <Segment unit="Seconds" value={seconds} size={size} flash={flash} />
    </div>
  );
};

export default CountDown;

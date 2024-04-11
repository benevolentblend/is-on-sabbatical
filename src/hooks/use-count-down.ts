"use client";

import { useEffect, useState } from "react";

const useCountDown = (targetDate: Date | string) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    });

    return () => clearInterval(interval);
  }, [countDownDate]);

  return caculateSegments(countDown);
};

const caculateSegments = (
  countDown: number,
): [number, number, number, number] => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [
    Math.max(days, 0),
    Math.max(hours, 0),
    Math.max(minutes, 0),
    Math.max(seconds, 0),
  ];
};

export default useCountDown;

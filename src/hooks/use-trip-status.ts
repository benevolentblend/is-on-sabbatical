"use client";

import { useEffect, useState } from "react";
import { isBefore } from "date-fns";
import { type TripStatus } from "~/types";

const useTripStatus = (
  start: string | Date,
  end: string | Date,
): TripStatus => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const currentDate = new Date();
  const isBeforeTrip = isBefore(currentDate, startDate);
  const isOnTrip = isBefore(currentDate, endDate);

  const [status, setStatus] = useState<TripStatus>(
    isBeforeTrip ? "before" : isOnTrip ? "active" : "after",
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(isBeforeTrip ? "before" : isOnTrip ? "active" : "after");
    });

    return () => clearInterval(interval);
  }, [isBeforeTrip, isOnTrip]);

  return status;
};

export default useTripStatus;

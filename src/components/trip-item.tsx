"use client";

import useTripStatus from "~/hooks/use-trip-status";
import { type Trip } from "~/types";
import CountDown from "~/components/count-down";
import Link from "next/link";
import formatStatusMessage from "~/components/format-trip-status";

interface TripItemProps {
  trip: Trip;
}

const TripItem: React.FC<TripItemProps> = ({ trip }) => {
  const status = useTripStatus(trip.start, trip.end);
  const [answer, description] = formatStatusMessage(status, trip);

  const countdownDate = status === "before" ? trip.start : trip.end;

  return (
    <div className="grid grid-cols-1 items-center gap-x-16 p-4 text-center text-2xl xl:grid-cols-3">
      <div className="pb-4 xl:text-start">
        <Link
          href={`/${trip.person.toLowerCase()}`}
          className="text-2xl text-blue-600 underline hover:text-blue-800"
        >
          Is {trip.person} on {trip.type}?
        </Link>
      </div>
      <div className="pb-4 xl:text-end">
        {answer}, {description}
      </div>
      <div>
        <CountDown targetDate={countdownDate} />
      </div>
    </div>
  );
};

export default TripItem;

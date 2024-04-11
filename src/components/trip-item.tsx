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

  return (
    <div className="flex justify-between p-4 text-2xl">
      <div>
        <Link
          href={`/${trip.person.toLowerCase()}`}
          className="text-2xl text-blue-600 underline hover:text-blue-800"
        >
          Is {trip.person} on {trip.type}?
        </Link>
      </div>
      <div>
        {answer}, {description}
        {status !== "after" && <CountDown targetDate={trip.start} />}
      </div>
    </div>
  );
};

export default TripItem;

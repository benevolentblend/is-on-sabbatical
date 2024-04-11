"use client";

import useTripStatus from "~/hooks/use-trip-status";
import { type Trip } from "~/types";
import CountDown from "~/components/count-down";
import formatStatusMessage from "~/components/format-trip-status";

interface TripItemProps {
  trip: Trip;
}

const TripHero: React.FC<TripItemProps> = ({ trip }) => {
  const status = useTripStatus(trip.start, trip.end);
  const [answer, description] = formatStatusMessage(status, trip);
  const countdownDate = status === "before" ? trip.start : trip.end;

  return (
    <div className="p-2 text-center text-2xl">
      <div>
        Is {trip.person} on {trip.type}?
      </div>
      <div className="p-4 text-8xl">{answer}</div>
      <div className="p-4">{description}</div>
      <div>
        <CountDown targetDate={countdownDate} size="large" />
      </div>
    </div>
  );
};

export default TripHero;

import { format, isBefore, parseISO } from "date-fns";
import { cn } from "~/lib/utils";

import { type Itinerary } from "~/types";

type TimelineProps = {
  itinerary: Itinerary[];
};

const Timeline: React.FC<TimelineProps> = ({ itinerary }) => (
  <div className="m-auto w-60">
    {itinerary.map((stop) => {
      const start = parseISO(stop.start);
      const end = parseISO(stop.end);
      const currentDate = parseISO(new Date().toISOString());

      const isAtStop =
        isBefore(start, currentDate) && isBefore(currentDate, end);

      return (
        <div
          className={cn(
            "flex space-x-4",
            isAtStop ? "text-3xl" : "text-xl opacity-75",
          )}
          key={stop.location}
        >
          <div className="w-20 text-right">{format(start, "M/dd")}</div>
          <div className="flex-auto">{stop.location}</div>
        </div>
      );
    })}
  </div>
);

export default Timeline;

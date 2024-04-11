"use client";

import { cn } from "~/lib/utils";

interface SegmentProps {
  value: number;
  unit: string;
  size?: "small" | "large";
  flash?: boolean;
}

const Segment: React.FC<SegmentProps> = ({
  value,
  unit,
  size = "small",
  flash = false,
}) => {
  return (
    <div className={cn("p-2 text-center", size === "small" ? "w-28" : "w-48")}>
      <div className="rounded bg-white p-2 text-black">
        <div
          className={cn(
            size === "small" ? "text-2xl" : "text-3xl lg:text-8xl",
            flash ? "text-red-600" : "text-black",
          )}
        >
          {value}
        </div>
        <div
          className={cn(size === "small" ? "text-lg" : "text-lg lg:text-3xl")}
        >
          {unit}
        </div>
      </div>
    </div>
  );
};

export default Segment;

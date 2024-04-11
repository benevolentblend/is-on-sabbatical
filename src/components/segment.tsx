"use client";

import { cn } from "~/lib/utils";

interface SegmentProps {
  value: number;
  unit: string;
  size?: "small" | "large";
}

const Segment: React.FC<SegmentProps> = ({ value, unit, size = "small" }) => {
  return (
    <div className={cn("p-2 text-center", size === "small" ? "w-28" : "w-48")}>
      <div className="rounded bg-white p-2 text-black">
        <div className={cn(size === "small" ? "text-2xl" : "text-8xl")}>
          {value}
        </div>
        <div className={cn(size === "small" ? "text-lg" : "text-3xl")}>
          {unit}
        </div>
      </div>
    </div>
  );
};

export default Segment;

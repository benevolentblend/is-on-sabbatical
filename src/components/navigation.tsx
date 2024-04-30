"use client";

import { cn } from "~/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Trip } from "~/types";

type Props = {
  trip: Trip;
};

const Navigation: React.FC<Props> = ({ trip }: Props) => {
  const pathname = usePathname();
  const basePersonLink = `/${trip.person.toLowerCase()}`;

  return (
    <div className="md:absolute">
      <ul className="flex justify-between px-2 pb-4 uppercase md:flex-col md:py-1">
        <li
          className={cn(
            cn("hover:font-bold", pathname === "/" ? "font-bold" : ""),
          )}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={cn(
            "hover:font-bold",
            pathname === basePersonLink ? "font-bold" : "",
          )}
        >
          <Link href={basePersonLink}>Status</Link>
        </li>
        <li
          className={cn(
            "hover:font-bold",
            pathname === `${basePersonLink}/itinerary` ? "font-bold" : "",
          )}
        >
          <Link href={`${basePersonLink}/itinerary`}>Itinerary</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

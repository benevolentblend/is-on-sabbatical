import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type Trip } from "~/types";

const trips: Trip[] = [
  {
    person: "Andrew",
    type: "sabbatical",
    itinerary: [
      {
        start: "2024-05-04",
        end: "2024-05-08",
        location: "Singapore",
      },
      {
        start: "2024-05-09",
        end: "2024-05-11",
        location: "Taiwan",
      },
      {
        start: "2024-05-12",
        end: "2024-05-14",
        location: "Sapporo",
      },
      {
        start: "2024-05-15",
        end: "2024-05-21",
        location: "Tokyo",
      },
      {
        start: "2024-05-22",
        end: "2024-05-25",
        location: "Kanazawa",
      },
      {
        start: "2024-05-26",
        end: "2024-05-26",
        location: "Kyoto",
      },
      {
        start: "2024-05-27",
        end: "2024-05-30",
        location: "Osaka",
      },
      {
        start: "2024-05-31",
        end: "2024-05-1",
        location: "Tokyo",
      },
    ],
    start: "2024-05-04",
    end: "2024-06-01",
  },
  {
    person: "Dan",
    type: "sabbatical",
    start: "2024-05-03",
    end: "2024-06-01",
  },
  {
    person: "Ben",
    type: "vacation",
    start: "2024-05-18",
    end: "2024-06-04",
  },
  {
    person: "Liam",
    type: "vacation",
    start: "2024-05-18",
    end: "2024-06-04",
  },
];

const tripIndex = new Map(
  trips.map((sabbatical) => [sabbatical.person.toLowerCase(), sabbatical]),
);

export const tripRouter = createTRPCRouter({
  getTrip: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => tripIndex.get(input.name)),
  getTrips: publicProcedure.query(() => trips),
});

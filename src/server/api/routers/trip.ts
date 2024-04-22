import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type Trip } from "~/types";

const trips: Trip[] = [
  {
    person: "Andrew",
    type: "sabbatical",
    start: "2024-05-03",
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

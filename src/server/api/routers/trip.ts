import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type Trip } from "~/types";

const trips: Trip[] = [
  {
    person: "Andrew",
    type: "sabbatical",
    start: "2024-5-3",
    end: "2024-6-3",
  },
  {
    person: "Dan",
    type: "sabbatical",
    start: "2024-5-4",
    end: "2024-6-4",
  },
  {
    person: "Ben",
    type: "vacation",
    start: "2024-5-18",
    end: "2024-6-4",
  },
  {
    person: "Liam",
    type: "vacation",
    start: "2024-5-18",
    end: "2024-6-4",
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

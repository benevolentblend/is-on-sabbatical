import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

type Trip = {
  type: "sabbatical" | "vacation";
  person: string;
  start: Date;
  end: Date;
};

const trips: Trip[] = [
  {
    person: "Andrew",
    type: "sabbatical",
    start: new Date(2024, 4, 4),
    end: new Date(2024, 5, 4),
  },
  {
    person: "Dan",
    type: "sabbatical",
    start: new Date(2024, 4, 4),
    end: new Date(2024, 5, 4),
  },
  {
    person: "Ben",
    type: "vacation",
    start: new Date(2024, 4, 18),
    end: new Date(2024, 5, 4),
  },
  {
    person: "Liam",
    type: "vacation",
    start: new Date(2024, 4, 18),
    end: new Date(2024, 5, 4),
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

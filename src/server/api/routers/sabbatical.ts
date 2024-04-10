import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

type Sabbatical = {
  person: string;
  start: Date;
  end: Date;
};

const sabbaticals: Sabbatical[] = [
  { person: "Andrew", start: new Date(2024, 4, 4), end: new Date(2024, 5, 4) },
  { person: "Dan", start: new Date(2024, 4, 4), end: new Date(2024, 5, 4) },
];

const sabbaticalIndex = new Map(
  sabbaticals.map((sabbatical) => [
    sabbatical.person.toLowerCase(),
    sabbatical,
  ]),
);

export const sabbaticalRouter = createTRPCRouter({
  getSabbatical: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => sabbaticalIndex.get(input.name)),
  getSabbaticals: publicProcedure.query(() => sabbaticals),
});

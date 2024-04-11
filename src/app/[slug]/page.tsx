import { type Metadata } from "next";
import { redirect } from "next/navigation";
import TripHero from "~/components/trip-hero";
import { api } from "~/trpc/server";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const person = params.slug;

  const sabbatical = person
    ? await api.trip.getTrip({ name: person })
    : undefined;

  const name = sabbatical?.person ?? "";

  return {
    title: `Is ${name} on sabbatical?`,
  };
}

export default async function Page({ params }: Props) {
  const person = params.slug;

  const trip = person ? await api.trip.getTrip({ name: person }) : undefined;

  if (!trip) {
    redirect("/");
  }

  return (
    <main className="container mx-auto max-w-screen-xl p-4">
      <TripHero trip={trip} />
    </main>
  );
}

import { redirect } from "next/navigation";
import Navigation from "~/components/navigation";
import Timeline from "~/components/timeline";
import { api } from "~/trpc/server";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const person = params.slug;

  const trip = person ? await api.trip.getTrip({ name: person }) : undefined;

  if (!trip) {
    redirect("/");
  }

  return (
    <main className="container mx-auto max-w-screen-xl p-4">
      <Navigation trip={trip} />
      <div className="p-2">
        <div className="text-center text-2xl">Where is {trip.person}?</div>
        {!trip.itinerary && (
          <div className="pt-10 text-center text-xl">
            {trip.person} has not providied their itinerary.
          </div>
        )}
        {trip.itinerary && <Timeline itinerary={trip.itinerary} />}
      </div>
    </main>
  );
}

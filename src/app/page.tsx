import TripItem from "~/components/trip-item";

import { api } from "~/trpc/server";

export default async function Home() {
  const trips = await api.trip.getTrips();

  return (
    <main className="container mx-auto max-w-screen-xl p-4">
      <div className="flex flex-col">
        {trips.map((trip) => (
          <TripItem key={trip.person} trip={trip} />
        ))}
      </div>
    </main>
  );
}

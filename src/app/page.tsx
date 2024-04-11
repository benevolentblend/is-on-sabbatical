import Link from "next/link";

import { api } from "~/trpc/server";

export default async function Home() {
  const trips = await api.trip.getTrips();

  return (
    <main className="container mx-auto max-w-screen-xl p-4">
      <div className="flex flex-col">
        {trips.map((trip) => (
          <div key={trip.person} className="">
            <Link
              href={`/${trip.person.toLowerCase()}`}
              className="text-2xl text-blue-600 underline hover:text-blue-800"
            >
              Is {trip.person} on {trip.type}?
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

import { type Metadata } from "next";
import { redirect } from "next/navigation";
import CountDown from "~/components/count-down";
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
    title: `Is ${name} on Sabbatical?`,
  };
}

export default async function Page({ params }: Props) {
  const person = params.slug;

  const trip = person ? await api.trip.getTrip({ name: person }) : undefined;

  if (!trip) {
    redirect("/");
  }

  const serializedDate = trip.start.toDateString();

  return (
    <main className="container mx-auto max-w-screen-xl p-4">
      <div className="text-3xl">
        {trip.person}&apos;s {trip.type} is{" "}
        <CountDown targetDate={serializedDate} />
      </div>
    </main>
  );
}

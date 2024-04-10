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
    ? await api.sabbatical.getSabbatical({ name: person })
    : undefined;

  const name = sabbatical?.person ?? "";

  return {
    title: `Is ${name} on Sabbatical?`,
  };
}

export default async function Page({ params }: Props) {
  const person = params.slug;

  const sabbatical = person
    ? await api.sabbatical.getSabbatical({ name: person })
    : undefined;

  if (!sabbatical) {
    redirect("/");
  }

  const serializedDate = sabbatical.start.toDateString();

  return (
    <main className="container mx-auto max-w-screen-xl p-4">
      <div className="text-3xl">
        {sabbatical.person}&apos;s Sabbatical is{" "}
        <CountDown targetDate={serializedDate} />
      </div>
    </main>
  );
}

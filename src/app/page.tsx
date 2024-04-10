import Link from "next/link";

import { api } from "~/trpc/server";

export default async function Home() {
  const sabbaticals = await api.sabbatical.getSabbaticals();

  return (
    <main className="container mx-auto max-w-screen-xl p-4">
      <div className="flex flex-col">
        {sabbaticals.map((sabbatical) => (
          <div key={sabbatical.person} className="">
            <Link
              href={`/${sabbatical.person.toLowerCase()}`}
              className="text-2xl text-blue-600 underline hover:text-blue-800"
            >
              Is {sabbatical.person} on Sabbatical?
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

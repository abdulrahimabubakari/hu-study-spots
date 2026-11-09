import spotsData from "@/data/spots.json";
import type { Spot } from "@/types/spot";
import SpotCard from "@/components/SpotCard";

const spots = spotsData as Spot[];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-4 sm:p-8">
      <h1 className="text-3xl font-bold">HU Study Spots</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        {spots.length} places to study on campus
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {spots.map((spot) => (
          <SpotCard key={spot.id} spot={spot} />
        ))}
      </div>
    </main>
  );
}
import type { Spot } from "@/types/spot";

export default function SpotCard({ spot }: { spot: Spot }) {
    return (
        <article className="rounded-lg border border-neutral-300 p-4 shadow-sm dark:border-neutral-700">
            <h2 className="text-lg font-semibold">{spot.name}</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {spot.building}
            </p>

            <ul className="mt-3 space-y-1 text-sm">
                <li>Noise: {spot.noise}</li>
                <li>Outlets: {spot.hasOutlets ? "Yes" : "No"}</li>
                <li>
                    Hours: {spot.opensAt} to {spot.closesAt}
                </li>
            </ul>

            {spot.notes && (
                <p className="mt-3 text-sm italic text-neutral-600 dark:text-neutral-400">
                    {spot.notes}
                </p>
            )}
        </article>
    );
}
export type NoiseLevel = "silent" | "quiet" | "moderate" | "lively";

export interface Spot {
    id: string;
    name: string;
    building: string;
    noise: NoiseLevel;
    hasOutlets: boolean;
    opensAt: string;   // "08:00"
    closesAt: string;  // "22:00"
    notes?: string;
}
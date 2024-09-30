import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateWords(text: string, numWords: number): string {
  const words = text.split(" ");
  return (
    words.slice(0, numWords).join(" ") + (words.length > numWords ? "..." : "")
  );
}

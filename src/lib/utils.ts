import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readingTime(markdown: string): number {
  // Count words
  const words: string[] = markdown.trim().split(/\s+/);
  const wordCount: number = words.length;

  // Average reading speed is about 200 words per minute
  const averageReadingSpeedWPM: number = 200;
  const readingTimeMinutes: number = wordCount / averageReadingSpeedWPM;

  return readingTimeMinutes;
}

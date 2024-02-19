export function calculateReadingTime(
  articleText: string,
  averageReadingSpeed: number = 225,
): number {
  const wordCount: number = articleText.split(/\s+/).length;
  const estimatedTime: number = Math.round(wordCount / averageReadingSpeed);
  return estimatedTime;
}

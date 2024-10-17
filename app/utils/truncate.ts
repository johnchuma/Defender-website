export function truncateWords(text: string, numWords: number): string {
  const words = text.split(" ");
  return (
    words.slice(0, numWords).join(" ") + (words.length > numWords ? "..." : "")
  );
}
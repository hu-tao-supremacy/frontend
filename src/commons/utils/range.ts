export default function makeRange(range: number) {
  const result = Array(range)
    .fill(0)
    .map((_, index) => index);
  return result;
}

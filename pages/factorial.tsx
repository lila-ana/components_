export default function Factorial(n: number) {
  if (n === 0 || n === 1) return "1";

  let result = "";
  for (let i = n; i >= 1; i--) {
    result += i === n ? `${i}` : ` x ${i}`;
  }
  return result;
}

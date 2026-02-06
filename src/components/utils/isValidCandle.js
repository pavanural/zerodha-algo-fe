export function isValidCandle(c) {
  return (
    c &&
    typeof c.time === "number" &&
    typeof c.open === "number" &&
    typeof c.high === "number" &&
    typeof c.low === "number" &&
    typeof c.close === "number"
  );
}

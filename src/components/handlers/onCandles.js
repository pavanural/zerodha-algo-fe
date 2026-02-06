import { isValidCandle } from "../utils/isValidCandle";

export function onCandlesHandler({ interval, series }) {
  return (data) => {
    const candle = data?.[interval];
    if (!isValidCandle(candle)) return;

    series.update(candle);
  };
}

import { isValidCandle } from "../utils/isValidCandle";

export function onHistoryHandler({
  interval,
  series,
  smaSeries,
  emaSeries,
  markersApi,
  markersRef
}) {
  return ({ interval: i, candles, signals, sma21, ema21 }) => {
    if (i !== interval || !Array.isArray(candles)) return;

    const clean = candles.filter(isValidCandle);
    if (!clean.length) return;

    series.setData(clean);

    if (Array.isArray(sma21)) smaSeries.setData(sma21);
    if (Array.isArray(ema21)) emaSeries.setData(ema21);

    if (Array.isArray(signals)) {
      markersRef.current = signals
        .filter(s => clean.some(c => c.time === s.time))
        .map(s => ({
          time: s.time,
          position: s.signal === "BUY" ? "belowBar" : "aboveBar",
          color: s.signal === "BUY" ? "#26a69a" : "#ef5350",
          shape: s.signal === "BUY" ? "arrowUp" : "arrowDown",
          text: s.signal
        }));

      markersApi.setMarkers(markersRef.current);
    }
  };
}

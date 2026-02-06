export function onMacdSignalHandler({
  interval,
  markersApi,
  markersRef
}) {
  return ({ interval: i, time, signal }) => {
    if (i !== interval) return;

    markersRef.current.push({
      time,
      position: signal === "BUY" ? "aboveBar" : "belowBar", // ✅ FIXED
      color: signal === "BUY" ? "#26a69a" : "#ef5350",
      shape: signal === "BUY" ? "arrowUp" : "arrowDown",
      text: signal
    });

    markersApi.setMarkers(markersRef.current);
  };
}

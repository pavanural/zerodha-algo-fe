export function onAOHandler({ interval, aoSeries, aoDataRef }) {
  return ({ interval: i, time, value }) => {
    if (i !== interval) return;

    aoDataRef.current.push({
      time,
      value,
      color: value >= 0 ? "#26a69a" : "#ef5350"
    });

    aoSeries.setData(aoDataRef.current);
  };
}

export function onEMAHandler({ interval, emaSeries, emaDataRef }) {
  return ({ interval: i, time, value }) => {
    if (i !== interval) return;

    emaDataRef.current.push({ time, value });
    emaSeries.setData(emaDataRef.current);
  };
}

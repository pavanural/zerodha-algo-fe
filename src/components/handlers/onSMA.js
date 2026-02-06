export function onSMAHandler({ interval, smaSeries, smaDataRef }) {
  return ({ interval: i, time, value }) => {
    if (i !== interval) return;

    smaDataRef.current.push({ time, value });
    smaSeries.setData(smaDataRef.current);
  };
}

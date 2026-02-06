import { useEffect, useRef } from "react";
import { createTradingChart } from "./createChart";

import { onHistoryHandler } from "./handlers/onHistory";
import { onCandlesHandler } from "./handlers/onCandles";
import { onMacdSignalHandler } from "./handlers/onMacdSignal";
import { onAOHandler } from "./handlers/onAO";
// import { onSMAHandler } from "./handlers/onSMA";
// import { onEMAHandler } from "./handlers/onEMA";

export default function Chart({ socket, interval }) {
  const chartRef = useRef(null);

  const markersRef = useRef([]);
  const smaDataRef = useRef([]);
  const emaDataRef = useRef([]);
  const aoDataRef = useRef([]);

  useEffect(() => {
    socket.emit("load-history", interval);

    const {
      chart,
      candleSeries,
      smaSeries,
      emaSeries,
      aoSeries,
      markersApi
    } = createTradingChart(chartRef.current);

    const onHistory = onHistoryHandler({
      interval,
      series: candleSeries,
      smaSeries,
      emaSeries,
      markersApi,
      markersRef
    });

    const onCandles = onCandlesHandler({
      interval,
      series: candleSeries
    });

    const onMacdSignal = onMacdSignalHandler({
      interval,
      markersApi,
      markersRef
    });

    const onAO = onAOHandler({
      interval,
      aoSeries,
      aoDataRef
    });

    socket.on("history", onHistory);
    socket.on("candles", onCandles);
    socket.on("macd-signal", onMacdSignal);
    socket.on("ao", onAO);

    return () => {
      socket.off("history", onHistory);
      socket.off("candles", onCandles);
      socket.off("macd-signal", onMacdSignal);
      socket.off("ao", onAO);
      chart.remove();
    };
  }, [interval, socket]);

  return <div ref={chartRef} />;
}

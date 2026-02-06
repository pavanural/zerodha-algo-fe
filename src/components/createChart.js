import {
  createChart,
  CandlestickSeries,
  LineSeries,
  HistogramSeries,
  createSeriesMarkers
} from "lightweight-charts";

export function createTradingChart(container) {
  const chart = createChart(container, {
    width: 1200,
    height: 550,
    layout: {
      background: { color: "#0b0e11" },
      textColor: "#d1d4dc"
    },
    grid: {
      vertLines: { color: "#1e222d" },
      horzLines: { color: "#1e222d" }
    },
    crosshair: { mode: 1 },
    rightPriceScale: {
      scaleMargins: { top: 0.15, bottom: 0.15 }
    },
    timeScale: {
      timeVisible: true,
      barSpacing: 12,
      rightOffset: 5
    }
  });

  const candleSeries = chart.addSeries(CandlestickSeries, {
    upColor: "#26a69a",
    downColor: "#ef5350",
    wickUpColor: "#26a69a",
    wickDownColor: "#ef5350",
    borderVisible: false
  });

  const smaSeries = chart.addSeries(LineSeries, {
    color: "#ffd54f",
    lineWidth: 2,
    title: "SMA 21"
  });

  const emaSeries = chart.addSeries(LineSeries, {
    color: "#4fc3f7",
    lineWidth: 2,
    title: "EMA 21"
  });

  const aoSeries = chart.addSeries(HistogramSeries, {
    priceScaleId: "",
    base: 0
  });

  const markersApi = createSeriesMarkers(candleSeries);

  return {
    chart,
    candleSeries,
    smaSeries,
    emaSeries,
    aoSeries,
    markersApi
  };
}

export default function TimeframeSelector({ active, onChange }) {
  return (
    <div className="timeframe">
      {["3m", "15m", "30m"].map(tf => (
        <button
          key={tf}
          className={active === tf ? "active" : ""}
          onClick={() => onChange(tf)}
        >
          {tf}
        </button>
      ))}
    </div>
  );
}

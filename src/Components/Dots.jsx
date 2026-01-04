export default function Dots({ className = "" }) {
  const rows = Array.from({ length: 6 });
  const cols = Array.from({ length: 6 });

  return (
    <div className={`container ${className}`}>
      <div className="d-flex flex-column gap-2">
        {rows.map((_, rowIndex) => (
          <div key={rowIndex} className="d-flex gap-2">
            {cols.map((_, colIndex) => (
              <div key={colIndex} className="dot"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

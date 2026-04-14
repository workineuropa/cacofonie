'use client';

const items = [
  'Glasfaser',
  'Netzausbau',
  'Hochbau',
  'Tiefbau',
  'Stromtrassen',
  'Straßenbau',
  'Brückenbau',
  'Hallenbau',
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-sep"> · </span>
          </span>
        ))}
      </div>
    </div>
  );
}

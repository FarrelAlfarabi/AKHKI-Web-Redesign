export default function Chips({ label, items, value, onChange }) {
  return (
    <div className="chips" role="group" aria-label={label}>
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className="chip"
          aria-pressed={item === value}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

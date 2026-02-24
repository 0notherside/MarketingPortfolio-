export default function BackButton({ onBack }) {
  
  return (
    <button type="button" className="back-btn" onClick={onBack} aria-label="Go back">
      <span aria-hidden>←</span> Back
    </button>
  )
}

export default function TrophyToast({ title = 'Fashion Junkie' }) {
  return (
    <div className="trophy-toast" role="status">
      <span>★</span>
      <span>You have earned a trophy. {title}</span>
    </div>
  )
}

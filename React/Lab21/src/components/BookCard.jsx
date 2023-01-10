import { useState } from 'react'
import './BookCard.css'

const BookCard = ({ title, author }) => {
  const [isVisible, setIsVisible] = useState(false)

  const classToggle = isVisible ? 'isVisible' : ''

  return (
    <div
      className={`Book card mb ${classToggle}`}
      onClick={() => setIsVisible(previous => !previous)}
    >
      <h2> {title} </h2>
      <h3> {author} </h3>
    </div>
  )
}

export default BookCard

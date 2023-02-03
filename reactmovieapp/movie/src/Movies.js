import React from "react"
import "./index.css"
const MovieCard = ({name, rating, dateReleased}) => (
  <div className="movie-card">
    <ul>
      <li>{name}</li>
      <li>Rating: {rating}</li>
      <li>Date released: {dateReleased}</li>
    </ul>
  </div>
)

export default MovieCard

import React from "react"
import "./index.css"
const MovieCard = ({name, rating, dateReleased}) => (
  <div className="movie-card">
    <h2>{name}</h2>
    <p>Rating: {rating}</p>
    <p>Date released: {dateReleased}</p>
  </div>
)

export default MovieCard

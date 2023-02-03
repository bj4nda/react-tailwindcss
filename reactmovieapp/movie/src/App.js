import React, {useState, useEffect} from "react"
import MovieCard from "./Movies"
import axios from "axios"
import Header from "./Header"
function App() {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000", {withCredentials: false})
      .then(res => setMovieData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Header />
      <div className="App">
        <section className="movies">
          {movieData.map(movie => (
            <MovieCard
              key={movie.name}
              name={movie.name}
              rating={movie.rating}
              dateReleased={movie.dateReleased}
            />
          ))}
        </section>
      </div>
    </>
  )
}

export default App

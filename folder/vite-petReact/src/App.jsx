import "./App.css"
import Animal from "./User"
import useCustom from "./Custom"
import React, {useEffect, useState} from "react"

const App = () => {
  const {animals, search} = useCustom()
  /* const [animals, setAnimals] = useState([])
  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery")
    search(lastQuery)
  }, [])
  const search = async q => {
    const res = await fetch(`http://localhost:8080?${new URLSearchParams({q})}`)
    const data = await res.json()
    setAnimals(data)
    localStorage.setItem("lastQuery", q)
  } */

  return (
    <div className="App">
      <h1>Animal Farm</h1>
      <input
        type="text"
        placeholder="search"
        onChange={e => search(e.target.value)}
      />
      <ul>
        {animals.map(animal => (
          <Animal key={animal.id} {...animal} />
        ))}
        {animals.length === 0 && "animals not found"}
      </ul>
    </div>
  )
}

export default App

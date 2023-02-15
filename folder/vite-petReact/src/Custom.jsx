import React, {useEffect, useState} from "react"

const useCustom = () => {
  const [animals, setAnimals] = useState([])
  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery")
    search(lastQuery)
  }, [])
  const search = async q => {
    const res = await fetch(`http://localhost:8080?${new URLSearchParams({q})}`)
    const data = await res.json()
    setAnimals(data)
    localStorage.setItem("lastQuery", q)
  }
  return {search, animals}
}

export default useCustom

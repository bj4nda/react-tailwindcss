import React, {useState, useEffect} from "react"
function Animal({age, name, type}) {
  return (
    <>
      <li>
        <strong>{name}</strong>
        {age} {type}
      </li>
    </>
  )
}

export default Animal

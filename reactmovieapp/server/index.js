const express = require("express")
const app = express()
let cors = require("cors")

const port = 3000
app.use(cors())

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/movies.json")
})

app.listen(port, () => {
  console.log(`server running on ${port}`)
})

const express = require("express")
const bodyParser = require("body-parser")
const {check, validationResult} = require("express-validator")
const app = express()
const PORT = 3000
app.use(bodyParser.json())
app.get("/", (req, res) => {
  res.json("make a get request")
})

app.post(
  "/user",
  [check("username").isEmail(), check("password").isLength({min: 5})],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }
    res.json(req.body)
  }
)

app.listen(PORT, () => {
  console.log("listening on port " + PORT)
})

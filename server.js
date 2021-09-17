const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

// Permite que a API seja usada por uma porta diferente
app.use(cors())

app.get("/", async(_req, res) => {
    try {
      // response é a resposta do axios, MAS eu desestruturo (tiro de dentro) o data do response assim: { data }
      const { data } = await axios("https://jsonplaceholder.typicode.com/users")
      //console.log(data)

      return res.json(data)
      
    } catch (error) {
      console.error(error)
    }
  })




app.listen('4566')
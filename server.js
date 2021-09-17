const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

// Permite que a API seja usada por uma porta diferente
app.use(cors())




app.get('/', (_req, res) => {
    return res.json([
        { name: 'Ana'},
        { name: 'Menici'}
    ])
})




app.listen('4566')
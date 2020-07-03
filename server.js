const express = require('express')
const axios = require('axios')
const config = require("./config.js")
const bp = require("body-parser")
const http = require("http")
const app = express()
const port = 3000
app.use(bp.urlencoded({extended : true}));
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render("index")
})

post('/', (req,res) => {
    res.render('index')
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${config.config.MY_KEY}`)
        .then(response => {
            console.log(response.data.main.temp)
        })
        .catch(error => {
            console.log(error)
        })
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
})

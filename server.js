const express = require('express')
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

app.post('/', (req, res) => {
    res.render("index") 
    
    let link = `http://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${config.config.MY_KEY}`
    http.get(link, (resp) => {
        let data = ''
        resp.on('data', (chunk) =>{
            data += chunk
        })
        resp.on('end', () => {
            console.log(JSON.parse(data).main.temp)
        })
    })
})


app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
})

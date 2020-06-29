const express = require('express')
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
    console.log(req.body.city);
    let link = `http://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=f1f0372cfb624d7efa68dd0085a220d4`
    
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

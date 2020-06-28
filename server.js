const express = require('express')
const bp = require("body-parser")
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
})


app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
})

`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f1f0372cfb624d7efa68dd0085a220d4`
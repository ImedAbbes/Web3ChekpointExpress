const express = require('express')
const app = express()
const AuthTime=(req,res,next)=>{
    const today=new Date()
    const day=today.getDay()
    const hour=today.getHours()

    console.log(day)
    console.log(hour)

    if(day >= 1 && day <= 5 && hour >= 9 && hour <= 17){
        next()
    } else {
        res.send(
            "<center><h1>Sorry, working hours are Monday to Friday, from 9 to 17</h1></center>"
        )
    }
}

app.use(AuthTime)
app.get("/",(req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname + "/Pages/Home_Page.html")
})
app.get('/Contact_Us', (req, res) => {
    res.sendFile(__dirname + "/Pages/Contact_Us.html")
})
app.get("/Our_Services",(req,res)=>{
    res.sendFile(__dirname + "/Pages/Our_Services.html")
})
app.listen(3000)

const express=require("express")
const path=require("path")
require("dotenv").config({ path: path.join(__dirname, '../../.env') });
const app=express();
const hbs = require("hbs")

const weatherInfo = require("../../utils/service")

const viewsPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,"../templates/partials")
const publicDir=path.join(__dirname,"../public")

app.set("view engine", "hbs")
app.set("views",viewsPath)

hbs.registerPartials(partialPath)

app.use(express.static(publicDir))

app.get("/",(req,res)=>{
    res.render("index",{
        title:"WeatherApp",
        name:"Koray"
    })
})
app.get("/about",(req,res)=>{
    res.render("about",{
        title:"WeatherApp",
        name:"Koray"
    })
})

app.get("/help",(req,res)=>{
   
    res.render("help",{
        title:"WeatherApp",
        name:"Koray"
    })
})

app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"Adres sorgusu yapılması zorunludur"
        })
    }
    
    weatherInfo(req.query.address, (error, data) => {
        if (error) {
            return res.send({ error })
        }

        res.send({
            forecast: data.forecast,
            location: data.location,
            
        })
    })
})

app.get("/product",(req,res)=>{
    if(!req.query.search)
    {
        return res.send({
            error:"Search ile arama yapmalısın"}
        )
    }
  
    res.send({
        products:[]
    })
})


app.get("/help/*splat",(req,res)=>{
    res.render("404", {
        title: "404",
        name: "Koray",
        errorMessage: "Help 404  sayfa bulunamadı."
    })
})

app.get("/*splat", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Koray",
        errorMessage: "Aradığınız sayfa bulunamadı."
    })
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(port + " portu dinleniyor")
})

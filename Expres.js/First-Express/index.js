const express = require("express");
const app = express();
app.use(express.json())

const mongoose = require("mongoose")

const Article=require("./models/Article")


mongoose.connect("mongodb+srv://qasem:Speed-123@qasem.lsutte3.mongodb.net/?appName=Qasem").then(() => {
    console.log("connection sucsessfully");
}).catch(() => {
    console.log("error with database");
})

app.get("/hello", (req, res) => {
    res.send("hello")
})


app.get("/findSummation/:number1/:number2", (req, res) => {
    const num1 = req.params.number1
    const num2 = req.params.number2
    res.render("qasem.ejs", {
        "name": "qasem"
    })
})


app.get("/findSummation2", (req, res) => {
    console.log(req.body);
    res.json({
        name: req.body.name,
        age: req.body.age
    })
})

// Articals endpoints

app.post("/articles",async (req,res)=>{

    const newArticle=new Article()

    const title=req.body.title
    const body=req.body.body

    newArticle.title=title
    newArticle.body=body
    newArticle.numberLikes=0
    await newArticle.save()

    res.json(newArticle)
})


app.get("/articles",async (req,res)=>{
    const articles= await Article.find()
    res.json(articles)
})


app.listen(3000, () => {
    console.log("iam in port 3000");
})
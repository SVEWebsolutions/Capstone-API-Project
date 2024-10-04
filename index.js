import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke";

const config = {
  };

app.use(express.static("public"));

app.get("/", (req, res)=>{

    res.render("index.ejs", {randomJoke : "Klik the random joke button", randomAnswer:""});

});

app.post("/get-joke", async (req, res)=>{
    try{
        const result = await axios.get(API_URL + "/Any",config)
    res.render("index.ejs", {randomJoke : result.data.setup, randomAnswer : result.data.delivery});
    }catch(error){
        res.render("index.ejs",{randomJoke : error.respons.data, randomAnswer : "Error"});
    }
    
});

app.listen(port, ()=>{
    console.log("Server is listening on port: " + port);
});
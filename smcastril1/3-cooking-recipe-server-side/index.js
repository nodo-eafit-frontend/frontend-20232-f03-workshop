require("dotenv").config();
const express =  require("express");
const router = require("./router")


// Create my app
const app = express();
const { PORT } = process.env; 

// const router = express.Router()

// // app.use((req, res, next) => {
// //     console.log("Middleware 1");

// //     next(); // Paasar a la siguiente ejecución       
// // })

// router.get("/recipe", (req,res) =>{
//     res.send("I am a recipe");
// })

// router.post("/recipe", (req,res) =>{
//     res.send("Recipe added");
// })

// router.put("/recipe", (req,res) =>{
//     res.send("Recipe created");
// })

// router.delete("/recipe", (req,res) =>{
//     res.send("Recipe deleted");
// })


app.use(router); //Midleware

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
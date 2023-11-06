require("dotenv").config();
const express =  require("express")

// Create my app
const app = express();
const { PORT } = process.env || 8080; 


recipe = {
    title: "Kiwi Jam"
}

//midleware
const callback = (req, res) => {
    res.send(recipe);
}

app.get("/", callback)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
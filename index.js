const express =  require("express");
const router = require("./app");

const PORT = 8000;

const app = express();

app.listen(PORT, async() => {
    console.log(`Server up on port ${PORT}`)
})

app.use(router);

const express = require("express");
const fs = require('fs');
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.get("/",(req,res)=>{
    
fs.readFile('./movies.json', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    data = JSON.parse(data)
  res.status(200).json(data)
});

    
});


const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
})
//framework
const express = require('express');
//configure paths
const path = require("path");
const app = express();

//getting our posts routes
const posts = require("./server/routes/posts");


app.use(express.static(path.join(__dirname,"dist")));

//using middleware
app.use("/getfile",posts);

//catch all other routes request and return it to index
app.get("*", (req,res)=>{

    res.sendFile(path.join(__dirname,"dist/index.html"));
});

const port = 8000 || 4600;

app.listen(port, (req,res)=>{
    console.log('running on port ' + port);
});
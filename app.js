const express = require('express');
const app = express();

const fs = require('fs');


app.get('/',(req,res)=>{
    res.writeHead(200,{"Content-Type": "video/mp4"});
    const rs = fs.createReadStream('videoplayback.mp4');
    rs.pipe(res);
});

app.listen(3000,()=>{
    console.log("Running on 3000");
});
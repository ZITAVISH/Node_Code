const db2con=require('./db2test');
const express=require("express");
//const Promise=require("bluebird");
const fs=require("fs");
//const fileread=Promise.promisify(fs.readFile);
//const filename=__dirname+"/Json_files/file1.json";
let data={};
const app=new express();
app.get('/',(req,res)=>{
    fileread(filename).then((chunk)=>{
        data=JSON.parse(chunk);
        res.send(data);
        })
})
app.get('/:username',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    let dbresult=db2con.connect(req.params.username);
    console.log(dbresult);
    res.send(dbresult);
})
app.listen(3000);
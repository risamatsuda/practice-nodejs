const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    console.log("hello express");
})

//expressを使ってローカルサーバを立ち上げる
app.listen(PORT,()=>{
    console.log("サーバが起動しました");
})
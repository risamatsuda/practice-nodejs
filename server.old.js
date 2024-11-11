const http = require("http");
const html = require("fs").readFileSync("./index.html");
const PORT = 8000;

//webサーバを作る
const server = http.createServer((req,res)=>{
    //ブラウザからアクセスが来た時の処理
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(html);
    res.end();
});

server.listen(PORT,()=>{
    console.log("server running!");
});
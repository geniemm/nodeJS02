
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
const router = require("./src/routers/router")(app);
// router.js에서 함수 사용했기 때문에 함수형식으로 불러옴

app.use("/", router);


app.set("views", "./src/views");
app.set("view engine", "ejs");

app.listen(3000, ()=>{console.log("3000 서버 실행")});
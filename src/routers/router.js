
module.exports = (app) =>{ // 함수화 해서 내보내고 app.js에서 () 함수 방식으로 받아온다
    
    //const bodyParser = require("body-parser");
    //app.use(bodyParser.urlencoded({extended:true}));
    /* 
    app.js 에서 순서변경 혹은 라우터에서 위의 코드를 넣으면 
    register 값 넘겨주는것이 가능해진다.
    */
   
    const memberRouter = require("./member/member_router");
    app.use("/member",memberRouter);

    const router = require("express").Router();

    router.get("/",(req,res)=>{
        //res.send("기본 경로 연동111");
        res.render("index");
})
    return router; // 동기방식
};
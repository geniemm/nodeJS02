const express = require("express");
const app = express();
let con;
app.get("/",(req,res)=>{ 
    console.log("1.연동전"); //1
    con = connect(); 
    con.then((msg)=>{
        console.log("3. 연동 완료 후 특정 기능 사용");  //2
        res.send("con =>"+msg); 
    }); // con을 이용해서 결과값을 받아올때 then을 사용
    
});
app.get("/async",async(req,res)=>{  //async:비동기
    console.log("1.연동전"); //1
    con =  await connect(); //이 함수는 비동기방식으로 작동할건데 결과값받아올때까지 기다린다.
    console.log("3. 연동 완료 후 특정 기능 사용");  //2
    res.send("con =>"+con); 
    }); // con을 이용해서 결과값을 받아올때 then을 사용
    

const connect = ()=>{  
    let msg;
    return new Promise((resolve)=> setTimeout(()=>{
        msg = "DB연동 되었습니다!"; //3 >>  비동기 방식
        console.log("2. DB연동하는 중...");
        resolve(msg);
    },1000)); // 약속된 결과값을 return 으로 돌려주겠다.

    //return msg; 

} 
app.listen(3000,()=>{console.log("3000 서버 실행");});

const oracledb = require("oracledb");
const dbConfig = require("../../../config/database/db_config");
//oracledb.initOracleClient({libDir:"C:/instantclient_11_2"})
oracledb.autoCommit = true;
// 데이터베이스 연동

const ser = require("../../service/member/member_service");


const list = async (req,res)=>{
    const list = await ser.getList();
    console.log("controller list: ",list);
   /* console.log(dbConfig);
    let con = await oracledb.getConnection(dbConfig);
     // 오라클은 비동기방식으로 처리되기때문에 값을 받아오는 async, await를 붙여줘서 동기방식으로 만들어준다.
    console.log("con: ",con);
    oracledb.outFormat = oracledb.OBJECT; // 형식만들기
    let result = await con.execute("select * from members02");
    console.log("result: ",result);
    await con.close(); */

    //res.send(list);       
    res.render("member/member_index",{list});
}
const registerForm = (req,res)=>{
    res.render("member/register_form");
}
const register = async (req, res)=> {
    console.log("register: ", req.body );

    let msg = await ser.insert( req.body );

    res.send(msg);
}
const memberView = async (req,res)=>{
    console.log("memberView ctrl: ",req.params);
    const member=await ser.getMember(req.params);
    console.log("controller memberView: ",member);
   // res.send("memberView")
    res.render("member/member_view",{member});
}
const modifyForm = async(req,res) => {
    console.log("ctrl modify: ", req.query);
    console.log("ctrl modify: ", req.params);

    const member = await ser.getMember(req.query);
    console.log("ctrl modify: ", member);

    res.render("member/modify_form",{member});
}
const modify = async (req,res) =>{
    console.log("ctrl modify: ", req.body);
    const msg = await ser.modify(req.body);
    res.send(msg);
}
const deleteMember= async (req,res)=>{
    const msg = await ser.deleteMember(req.params);
    res.send(msg);
}
module.exports ={deleteMember, modify, list, registerForm, register, memberView, modifyForm};
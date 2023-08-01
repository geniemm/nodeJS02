const router = require("express").Router();
const memberCtrl = require("../../controller/member/member_ctrl")

router.get("/",(req,res)=>{ 
    console.log("/member연동");
    res.send("/member연동");
})

router.get("/list",memberCtrl.list);
router.get("/register_form",memberCtrl.registerForm);
router.post("/register",memberCtrl.register); 
//form method에서 post로 받아주니까 post로 넘겨줘야함
router.get("/member_view/:id",memberCtrl.memberView); // /로 처리할때만 :id붙여
router.get("/modify_form",memberCtrl.modifyForm);
router.post("/modify",memberCtrl.modify);
router.get("/delete/:id",memberCtrl.deleteMember);
module.exports = router;
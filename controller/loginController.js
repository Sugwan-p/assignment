const asyncHandler = require("express-async-handler");
const Member = require("../model/memberModel");
const bcrypt = require("bcrypt");

const loginPage = asyncHandler(async (req, res)=>{
    return res.render("memberLogin");
});


const login = asyncHandler(async (req, res)=>{
    const member = req.body;
    let loginMember;

    try {
        const{memberid, password} = member;
        if(!memberid || !password){
            return res.status(200).render("memberLoginResult", {result:false});
        }

        const query = {memberid: member.memberid};
        loginMember = await Member.findOne(query);
        console.log(loginMember);

        if(!loginMember){
            const model = {result:false, reason:"DB 조회 에러"}
            return res.status(200).render("memberLoginResult",model);
        }

        const cmpResult = await bcrypt.compare(password, loginMember.password);

        if(cmpResult == false){
            const model = {result:false, reason:"비밀번호가 맞지 않습니다."};
            return res.status(200).render("memberLoginResult",model);
        }
    } catch (error) {
        const model = {result:false, reason:error.message};
        return res.status(200).render("memberLoginResult",model);
    }

    // 세션에 값 업데이트
    req.session.loginMember = loginMember;
    const model = {result:true, loginMember};
    return res.status(200).render("memberLoginResult",model);
});


const logout = asyncHandler(async (req, res)=>{
    req.session.destroy((err)=>{
        console.log(err);
    })
    // 302
    return res.redirect("/"); // redirect: 페이지이동
});


module.exports = { loginPage, login, logout };
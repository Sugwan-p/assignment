

// 회원가입에 대한 핸들러를 모으는 장소

const asyncHandler = require('express-async-handler');
const Member = require('../model/memberModel.js');
const bcrypt = require('bcrypt');
const dayjs = require('dayjs');

const registerMemberPage = asyncHandler(async (req, res) => {
    res.status(200).render('memberRegister');
});

const registerMember = asyncHandler(async (req, res) => {
    let member = req.body;
    console.log(member);

    // 파라미터 체크 및 insert 코드
    try {
        //파라미터 체크방법
        const { memberid, password, membername } = member;
        if (
            !memberid ||
            memberid.length < 4 ||
            !password ||
            password.length < 4 ||
            !membername
        ) {
            // 파라미터 체크가 실패한 할때
            const model = { result: false, reason: '입력값이 잘못되었습니다.' };
            return res.status(200).render('memberRegisterResult', model);
        }

        // password 암호
        const hashedPassword = await bcrypt.hash(member.password, 10);
        member.password = hashedPassword;

        const newMember = await Member.create(member);
        console.log(newMember);
        member = newMember;
        if (newMember == null) {
            const model = { result: false, reason: 'DB insert 에러 발생!' };
            return res.status(200).render('memberRegisterResult', model);
        }
    } catch (error) {
        console.log(error);
        const model = { result: false, reason: error.message };
        return res.status(200).render('memberRegisterResult', model);
    }

    // 회원가입 성공
    const model = { result: true, member };
    res.status(200).render('memberRegisterResult', model);
});

const getAllMemberList = asyncHandler(async (req, res) => {
    const memberList = await Member.find();
    console.log(memberList);
    res.status(200).render('memberList', { memberList, dayjs });
});

module.exports = {
    registerMemberPage,
    registerMember,
    getAllMemberList,
};

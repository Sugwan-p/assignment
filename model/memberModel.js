const mongoose = require("mongoose");

// mongoose 스키마 가져오기
const Schema = mongoose.Schema;

// 사용자 스키마
const MemberSchema = new Schema({
    memberid: {
        type: String, // type인 String만 허용
        require: true, // 필수 여부
        unique: true, // id 중복 여부 확인
    },
    password: {
        type: String,
        require: true,
    },
    membername: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: false, // 필수값이 아님!!
        min: 0,
    },
    phone: {
        type: String,
        require: false,
    },
    // address:{
    //     type:String,
    //     require:false,
    // },
    address: String,
    createdAt: {
        type: Date,
        require: false,
        default: Date.now, // default값, 현재시간
    },
});

// Member 모델을 만들고 내보냄
module.exports = mongoose.model("Member", MemberSchema);

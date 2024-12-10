// 외부 json load하기
const list = require('./99_Practice.json');
function practice1() {
    for (const obj of list) {
        {
            console.log(obj);
        }
    }
}
// practice1();
// 실습 문제 1

function practice2() {
    for (let obj of list) {
        if (obj.address.includes('삼성') == true) {
            console.log(`이름 : ${obj.name} 주소 : ${obj.address} `);
        }
    }
}
practice2();
console.log('------------------');
// 실습 문제2
console.log('문제 2');
function practice3(eId, pw) {
    if(!eId || eId.includes('@') == false || !eId.includes('.')){
        console.log('이메일을 다시 입력해주세요');
        return false
    }else if(!pw || pw.length < 5){
        console.log('비밀번호를 다시 입력하세요');
        return false
    }else{
        console.log('로그인 성공');
        return true
    }
    
}
practice3('user1@test.com', '373852'); // 로그인 성공
practice3("", "373852"); // 이메일을 다시 입력하세요.
practice3("test1", "373852"); // 이메일을 다시 입력하세요.
practice3("test@email.com", "123"); // 비밀번호를 다시 입력하세요.
console.log('-----------------------------------');

console.log('문제 3번');

// 실습문제 3
function practice4() {
    list.forEach(person => {
        person.annualSalary = person.salary * 12 + (person.bonus || 0); 
    });

    let sortedList = list.sort((a, b) => b.annualSalary - a.annualSalary);

    let top5 = sortedList.slice(0, 5);
console.log('출력문');
    top5.forEach((person, index) => {
        console.log(`이름 : ${person.name}, 월급 : ${person.salary}, 보너스 : ${person.bonus} 연봉: ${person.annualSalary} `);
    });
}

practice4();

console.log('문제 4번');


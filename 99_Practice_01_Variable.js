// 실습문제1 
let name = '홍길동';
let age = 21;
let gender = '남';
let height = 182.34;
let address = '서울시 강남구 역삼동';
let mailing = true;

console.log(`이름 : ${name}`);
console.log(`나이 : ${age}살`);
console.log(`성별 : ${gender}`);
console.log(`키 : ${height}cm`);
console.log(`주소지 : ${address}`);
console.log(`메일 수신: ${mailing}`);
console.log('-----------------------------------------');

// 실습문제2
let num1 = 23;
let num2 = 7;

console.log(`첫 번째 숫자 : ${num1}`);
console.log(`두 번째 숫자 : ${num2}\n`);

console.log(`더하기 결과 : ${num1 + num2}`);
console.log(`빼기 결과 : ${num1 - num2}`);
console.log(`곱하기 결과 : ${num1 * num2}`);
console.log(`나누기 몫 결과 : ${num1 / num2}`);
console.log('-----------------------------------------');

// 실습문제3
let width = 13.7;
let height2 = 41.7;
let area = width * height2;
let perimeter = (width + height2) * 2;

console.log(`가로 : ${width}`);
console.log(`세로 : ${height2}\n`);

console.log(`면적 : ${area.toFixed(2)}`);
console.log(`둘레 : ${perimeter.toFixed(2)}`);
console.log('---------------------------------------------------------');

// 실습문제4
let str = 'apple';

console.log(`첫 번째 문자 : ${str.charAt(0)}, ${str.charAt(0).toUpperCase()}, ${str.charCodeAt(0)}` );
console.log(`두 번째 문자 : ${str[1]}, ${str[1].toUpperCase()}, ${str[1].charCodeAt(0)}` );
console.log(`세 번째 문자 : ${str[2]}, ${str[2].toUpperCase()}, ${str.charCodeAt(2)}` );
console.log('---------------------------------------------------------');

// 실습문제5
const text = 'Lorem ipsum dolor sit amet ipsum consectetur adipisicing elit.';

console.log('Lorem 포함 여부 :', text.includes('Lorem'));
console.log('첫번째 ipsum의 시작 index :', text.indexOf('ipsum'));
console.log('마지막 ipsum의 시작 index :', text.lastIndexOf('ipsum'));
console.log('---------------------------------------------------------');

// 실습문제6
let korean = 75.5;
let english = 80.6;
let math = 90.3;
let sum = korean + english + math;
let print = `국어 : ${korean}\n영어 : ${english}\n수학 : ${math}\n\n`
            + `총점 : ${Number.parseInt(sum)}\n`
            + `평균 : ${Number.parseInt(sum / 3)}`;
console.log(print);
console.log('-----------------------------------------');


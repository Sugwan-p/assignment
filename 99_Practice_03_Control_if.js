// 실습 문제 1

function practice1(num1) {
  if (num1 > 0) {
    console.log('양수다');
  } else {
    console.log('양수가 아니다');
  }
}
practice1(-9);
console.log('-------------------------------');

// 실습 문제2

function practice2(num2) {
  if (num2 > 0) {
    console.log('양수다');
  } else if (num2 < 0) {
    console.log('음수다');
  } else {
    console.log('0이다');
  }
}
practice2(-9);
console.log('-------------------------------');

// 실습 문제3

function practice3(num3) {
  if (num3 % 2 == 0) {
    console.log('짝수다');
  } else {
    console.log('홀수다');
  }
}
practice3(5);
console.log('-------------------------------');

// 실습 문제 4

function practice4(num4) {
  if (num4 < 0) {
    console.log('양수만 입력하세요');
  } else if (num4 % 2 == 0) {
    console.log('짝수');
  } else if (num4 % 2 != 0) {
    console.log('홀수');
  }
}
practice4(-8);
console.log('-------------------------------');

// 실습 문제 5

function practice5(num5) {
  if (num5[9] === '1' || num5[9] === '3') {
    console.log('남자');
  } else if (num5[9] === '2' || num5[9] === '4') {
    console.log('여자');
  } else {
    console.log('잘못된 주민번호 입니다');
  }
}
practice5('981212 - 2123456');
console.log('-------------------------------');

// 실습 문제 6

function practice6(num6) {
  if (num6 > 19) {
    console.log('성인');
  } else if (num6 > 13 && num6 <= 19) {
    console.log('청소년');
  } else {
    console.log('어린이');
  }
}
practice6(19);
console.log('-------------------------------');

// 실습 문제 7

function practice7(userID, userPW) {
  const id = 'test';
  const pw = '1212';
  if (id === userID && pw === userPW) {
    console.log('로그인성공');
  } else if (id !== userID) {
    console.log('아이디가 틀렸습니다');
  } else if (pw !== userPW) {
    console.log('비밀번호가 틀렸습니다');
  }
}
practice7('test', '1212');
console.log('-------------------------------');

// 실습 문제 8

function practice8(pnum1, pnum2, p) {
  if (pnum1 > 0 && pnum2 > 0) {
    switch (p) {
      case '+':
        console.log(`${pnum1} + ${pnum2} = ${pnum1 + pnum2}`);
        break;
      case '-':
        console.log(`${pnum1} - ${pnum2} = ${pnum1 - pnum2}`);
        break;
      case '/':
        console.log(`${pnum1} / ${pnum2} = ${pnum1 / pnum2}`);
        break;
      case '*':
        console.log(`${pnum1} * ${pnum2} = ${pnum1 * pnum2}`);
        break;
      default:
        console.log('잘못 입력하셨습니다. 프로그램을 종료합니다.');
    }
  } else {
    console.log('1부터 입력 해주세요.');
  }
}
practice8(15, 4, '/');

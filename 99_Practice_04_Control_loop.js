// 실습 문제 1

function practice1(num1){
  if(num1 > 0){
    for(let i = 1; i <= num1; i++){
      console.log(i);
    }
  }else{
    console.log('1 이상의 숫자를 입력해주세요.');
  }
}
practice1(4);
console.log('-------------------------------------\n');

// 실습 문제 2

function practice2(num2) {
  if (num2 > 0) {
    for (let i = num2; i > 0; i--) {
      console.log(i);
    }
  } else {
    console.log('1이상의 숫자를 입력해주세요.');
  }
}
practice2(4);
practice2(0);
console.log('------------------------------\n');

// 실습 문제 3
function practice3(num3) {
  let count = 0;
  if (num3 > 1) {
    for (let i = 1; i <= num3; i++) {
      count += i;
    }
  } else {
    console.log('1 이상 입력');
  }
  console.log(count);
}
practice3(8);
console.log('------------------------------\n');

// 실습 문제 4
function practice4(num4, num45) {
  if (num4 > 1 && num45 > 1) {
    if (num4 < num45) {
      for (let i = num4; i <= num45; i++) {
        console.log(i);
      }
    } else {
      for (let j = num45; j <= num4; j++) {
        console.log(j);
      }
    }
  } else {
    console.log('1이상을 출력 하시오');
  }
}
practice4(4, 8);
console.log('------------------------------');

// 실습 문제 5

function practice5(num5) {
  for (let i = 1; i < 10; i++) {
    console.log(`${num5} x ${i} = ${num5 * i}`);
  }
}
practice5(4);
console.log('--------------------------\n');
// 실습 문제 6

function practice6(num6) {
  if (num6 > 9) {
    console.log('9이하만 입력해주세요');
  }
  for (let i = num6; i < 10; i++) {
    console.log(`====${i}단=====`);
    for (let j = 1; j < 10; j++) {
      console.log(`${i} X ${j} = ${i * j}`);
    }
  }
}
practice6(10);
console.log('--------------------');

// 실습 문제 7
function practice7(num1, num2) {
  for (let i = 0; i < 10; i++) {
    console.log(num1 + i * num2);
  }
}
practice7(4, 3);
console.log('------------------------------------\n');
// 실습 문제 8
console.log('문제 8');
function practice8(num8) {
  for (let i = 1; i <= num8; i++) {
    console.log('*'.repeat(i));
  }
}
practice8(4);
console.log('---------------------------------\n');

// 실습 문제9
console.log('문제 9');
function practice9(num9) {
  for (let i = num9; i > 0; i--) console.log('*'.repeat(i));
}
practice9(4);
console.log('---------------------------------\n');

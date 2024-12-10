// 실습 문제 1

function test1(people, candys) {
  let a = Math.floor(candys / people);
  let b = candys % people;
  console.log(`1인당 사탕 개수 : ${a}`);
  console.log(`남는 사탕 개수 : ${b}`);
}

test1(29, 100);

console.log('---------------------------\n');

// 실습 문제 2

function test2(num2) {
  let numb1 = num2 >= 0 ? 'nub1 : 양수다' : '양수가 아니다';
  console.log(numb1);
}
test2(-9);

console.log('-------------------------\n');

// 실습 문제 3

function test3(num3) {
  let numb1 = num3 == 0 ? '0이다' : num3 >= 1 ? '양수다' : '음수다';
  console.log(numb1);
}
test3(-9);
console.log('-------------------------\n');

// 실습 문제 4

function test4(num4) {
  let numb1 = num4 % 2 == 0 ? '짝수다' : '홀수다';
  console.log(numb1);
}
test4(5);

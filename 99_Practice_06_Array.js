// 실습 문제 1

function practice1(){
    let count = []
    for(let i = 1; i <= 10; i++){
        count[i - 1] = i
    }
    console.log(count.join('\t'));

}
practice1()
console.log('---------------');
// 실습 문제 2

function practice2(){
    let count = []
    for(let i = 1; i <= 10; i++){
        count[i - 1] = i
    }
    console.log(count.reverse().join('\t'));
}
practice2()
console.log('---------------');
// 실습문제 3

console.log('문제 3');
// 사과 / 바나나 / 딸기 / 복숭아 / 포도
// 3 : 복숭아

function practice3(){
    let arr =['사과', '바나나', '딸기', '복숭아','포도']
    console.log(arr.join(' / '));
    let index = arr.indexOf('딸기')
    console.log(`${index} : ${arr[index]} `); 
}
practice3()
console.log('---------------');
// 실습 문제 4

console.log('문제 4 ');
function practice4(){
    let count = 0
    let arr = ['application']
    console.log(`문자열 : ${arr}`);
    let arr2 = 'i'
    console.log(`문자 : ${arr2}`);
    for(let v of arr[0]){
        if (v === arr2){
            count++;
        }
    }
    console.log(`i 개수 ${count}`);
    let ii = []
    for(let v of arr){
        ii += v
    }
    console.log(`${ii}에 i가 존재하는 인덱스 : ${ii.indexOf('i')} ${ii.lastIndexOf('i')}`)
 }
practice4()
console.log('---------------');


// 실습 문제 5
console.log('문제 5');
function practice5(){
    let arr = []
    for(let i = 1; i < 11; i ++){
        let random = Math.floor(Math.random() * 10+1)
        arr.push(random)
        
    }
    console.log(arr.join(` `));
}
practice5()


// 실습 문제 6
console.log('문제 6');
function practice6(){
    let arr = []
    for(let i = 1; i < 11; i ++){
        let random = Math.floor(Math.random() * 10+1)
        arr.push(random)
        
    }
    console.log(arr.join(` `));
    console.log(`최대값 : ${Math.max(...arr)}`);
    console.log(`최소값 : ${Math.min(...arr)}`);
}
practice6()


// 실습 문제 7
console.log('문제 7');
function practice7(){
    let arr = []
    for(let i = 1; arr.length < 11 ; i ++){
        let random = Math.floor(Math.random() * 20+1)
        if(!arr.includes(random)){
        arr.push(random)
        };
    }
    console.log(arr.join(` `));
}
practice7()

// 실습 문제 8
console.log('문제 8');
function practice8(){
    let arr = []
    for(let i = 1; arr.length < 7 ; i ++){
        let random = Math.floor(Math.random() * 45+1)
        if(!arr.includes(random)){
        arr.push(random)
        };
    }
    console.log(arr.sort((x, y)=> x - y).join(` `));
}
practice8()
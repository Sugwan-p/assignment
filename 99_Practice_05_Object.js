// 실습 문제 1
const Employee = {
    empNo: 100,
    empName: '홍길동',
    dept: '영업부',
    job: '과장',
    age: 35,
    gender: '남',
    salary: 4000000,
    bonusRate: 0.05,
    phone: '010-1234-5678',
    address: '서울시 강남구',
    employed: true,
};
function practice1() {
    for (const key in Employee) {
        console.log(`${key} : ${Employee[key]}`);
    }
}

practice1();
console.log('----------------------------------\n');

// 실습 문제 2
console.log('문제 2번 ');
function practice2(
    empNo,
    empName,
    dept,
    job,
    age,
    gender,
    salary,
    bonusRate,
    phone,
    address,
    employed
) {
    this.empNo = empNo;
    this.empName = empName;
    this.dept = dept;
    this.job = job;
    this.age = age;
    this.gender = gender;
    this.salary = salary;
    this.bonusRate = bonusRate;
    this.phone = phone;
    this.address = address;
    this.employed = employed;
}
practice2.prototype.print = function () {
    for (const key in this) {
        if (typeof this[key] !== 'function') {
            console.log(`${key} : ${this[key]}`);
        }
    }
};
// 급여
practice2.prototype.calcSalary = function () {
    return this.salary + this.salary * this.bonusRate;
};

let test1 = new practice2(
    '100',
    '홍길동',
    '영업부',
    '과장',
    '35',
    '남',
    4000000,
    0.05,
    '010-1234-5678',
    '서울시 강남구',
    'true'
);
let test2 = new practice2(
    '101',
    '사임당',
    '개발부',
    '대리',
    '27',
    '여',
    2900000,
    0.1,
    '010-4321-1234',
    '서울시 송파구',
    'true'
);
test1.print();
test2.print();
console.log(`총 급여 : ${test1.calcSalary()}`);
console.log(`총 급여 : ${test2.calcSalary()}`);

console.log('------------------------------------\n');
// 실습 문제 3
console.log('3번 문제');

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printinfo = function () {
    console.log(` 이름 : ${this.name} \n 나이 : ${this.age}`);
};
let test3 = new Person('최길동', 25);
test3.printinfo();
console.log('--------------');
function Student(name, age, grade, score) {
    Person.call(this, name, age);
    this.grade = grade;
    this.score = score;
}
Student.prototype = Object.create(Person.prototype);
Student.prototypeconstructor = Student;
Student.prototype.printAddinfo = function () {
    Person.prototype.printinfo.call(this);
    console.log(`학년 : ${this.grade}\n 점수 : ${this.score}`);
};

let student1 = new Student('김길동', 17, '3학년', 80);
student1.printinfo();
student1.printAddinfo();
console.log('--------------');
function Employeee(name, age, dept, salary) {
    Person.call(this, name, age);
    this.dept = dept;
    this.salary = salary;
}
Employeee.prototype = Object.create(Person.prototype);
Employeee.prototype.printinfo = function () {
    Person.prototype.printinfo.call(this);
    console.log(`부서 : ${this.dept} \n 월급 : ${this.salary}`);
};
let tes5 = new Employeee('홍길동', 35, '영업부', 400000);
tes5.printinfo();

console.log('--------------------------------------------');
console.log('문제 4 번');
// 실습 문제 4
function practice4() {
 
    class Shape {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        print() {
            console.log(`width: ${this.width}, height: ${this.height}`);
        }
    }

    class Rectangle extends Shape {
        constructor(width, height) {
            super(width, height); 
        }
        getArea() {
            return this.width * this.height / 2;  
        }
    }
    let rectangle = new Rectangle(10, 20);
    rectangle.print(); 
    console.log(`Area: ${rectangle.getArea()}`); 
}

practice4();


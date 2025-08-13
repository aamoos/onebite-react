// 1. 상수 객체
const aninal = {
    type : "고양이",
    name : "나비",
    color: "black"
}

animal.age = 2;
animal.name = "까밍이";
delete animal.color;

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: "이정환"
    //메서드 선언
    ,sayHi: function(){
        console.log("안녕!");
    }
};

person.sayHi();
person["sayHi"]();
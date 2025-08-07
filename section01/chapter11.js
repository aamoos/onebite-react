// 함수선언
// 호이스팅 -> 끌어올리다 뜻
function getArea(width, height){
    
    //중첩함수
    function another(){
        console.log("another");
    }

    another();
    let area = width * height;

   return area;
}

function greeting(){
    console.log("안녕하세요!");
}

console.log("호출 전");
greeting();
console.log("호출 후");

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);
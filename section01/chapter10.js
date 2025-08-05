for (let idx=1; idx<=10; idx++){
    if(idx % 2 === 0){
        continue;   //다음반복회차로 아래코드 실행 x
    }
    console.log(idx);

    if (idx >= 5){
        break;
    }
}
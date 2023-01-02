let 출석부 = ["흥민", "영희", "철수", "재석"];

function 이름찾기(name) {
 for(let i = 0; i < 출석부.length; i++){
     if(출석부[i] == name) {
     console.log("있어요")
     } else {
         console.log("없어요");
     }
    }
}
이름찾기("철수");




for (let i = 2; i < 10; i++){
    for (let j = 1; j <10; j++){
        console.log(j * i);
        
    }
}
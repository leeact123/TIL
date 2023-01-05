var human = {
    name : '손흥민',
//     sayHi : function(){
//     console.log(`안녕 나는 ${this.name}`);
// }
}
human.sayHi = function(){
    console.log(`안녕 나는 ${this.name}`);
}
human.sayHi = () => {
    console.log(`안녕 나는 ${this.name}`);
    //arrow function 사용시 this값이 외부값 window가 된다.
}

human.sayHi();




var 자료 = {
    data : [1,2,3,4,5]
}

자료.전부더하기 = function(){
    let sum = 0;
    this.data.forEach(function(a){
        sum = sum + a;
    })
       console.log(sum); 
    
}
자료.전부더하기();

var 자료 = {
    data : [1,2,3,4,5]
}

자료.전부더하기 = () => {
    let sum = 0;
    this.data.forEach(function(a){
        sum = sum + a; //arrow function 사용하면 this값이 window가 되서 쓸수 없다.
    })
       console.log(sum); 
    
}
자료.전부더하기();



   
        document.getElementById('버튼').addEventListener('click', function(){
        setTimeout(() => {console.log(this.innerHTML)}, 1000);
        })
    
  




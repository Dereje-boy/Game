// let x = document.querySelector(".x-input");
let x_id = document.getElementById("x-id");

// let y = document.querySelector(".y-input");
let y_id = document.getElementById("y-id");
let p_id = document.getElementById("p-id");

// let z = document.querySelector(".z-sum");
let z_id = document.getElementById("z-id");


let x;
let y;
let sum;
var z;

z_id.oninput=function(){
    if(z_id.value == (x+y)){
        console.log("you got it");
    }else{
        console.log("wooo....");
        console.log(x);
        console.log(y);
        console.log(x+y);
    }

}

x_id.onchange = function(){
    x = x_id.value;
}

y_id.onchange = function(){
    y = y_id.value;
}


//the game with while loop
var asked =0;
var got = 0;
var lost = 0;

var answer = 0;
while(!(answer==-1) || null){
        let x = Math.floor(Math.random()*11);
        let y = Math.floor(Math.random()*11);
        let sum = x+y;
        answer = prompt(x+ " + "+y + " please enter their sum")
        asked+=1;

    if(answer == null || answer==-1){
        console.log("answer is null");
        break;
    }else{
        if(answer == sum){
                // alert("you got it");
                got+=1;
            }else{
                // alert("you have lost")
                lost+=1;
            }
        }
    }


console.log("Questions asked : " + asked);
console.log("you got : " + got +" questions");
console.log("your accuracy : " + got*100/asked);
console.log("you lost : " + lost +" questions");

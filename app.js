const x_id = document.querySelector("#x-iid");
const y_id = document.querySelector("#y-iid");
const z_id = document.querySelector("#z-id");

let x_factor = 11,y_factor = 11;
let x_addon = 0,y_addon = 0;

x_id.value = (Math.floor(Math.random()*x_factor)+x_addon);
y_id.value = (Math.floor(Math.random()*y_factor))+y_addon;

var asked = 0;
var got = 0, lost = 0, acc = 0;

let paused = false;

z_id.oninput = function(){

    let sum = parseInt(x_id.value) + parseInt(y_id.value);
    let no_length = String(sum).trim().length;

    switch(no_length){
        case 2:
            if(String(z_id.value).length==2){
                if(z_id.value == sum){
                    you_got();
                    
                }else{
                    you_lost();
                }
            }else if ((z_id.value.toString().length != 0) && (z_id.value.toString()[0] != String(sum)[0])){
                console.log(`z  = ${z_id.value.toString()[0]} length = ${
                    String(sum)[0]}`);
                you_lost();
            }
            break;
        case 1:
            if(String(z_id.value).length==1){
                if(z_id.value == sum){
                    you_got();                    
                }else{
                    you_lost();
                }
            }
            break;
        default:
            console.log("There is a problem with the question \
                        please try refreshing the page");
    }

    if (asked>=35 && acc>=90){
        x_factor = 30;
        y_factor = 30;
        y_addon = 20;
        maximum_chance=2;
        document.querySelector(".level").innerHTML = "Level : 5"
    }else if (asked>=25 && acc>=80){
        x_factor = 20;
        y_factor = 30;
        document.querySelector(".level").innerHTML = "Level : 4"
        y_addon = 10;
    }else if (asked>=20 && acc>=70){
        x_factor = 20;
        y_factor = 20;
        document.querySelector(".level").innerHTML = "Level : 3"
        y_addon = 10;
        maximum_chance=3;
    }else if(asked >=15 && parseInt(acc)>=80){
        x_factor = 15;
        document.querySelector(".level").innerHTML = "Level : 2"
        x_addon=10;
        maximum_chance=4;
    }

}

function you_lost(){
    document.getElementById("error").style.backgroundColor = "red";
    x_id.value = (Math.floor(Math.random()*x_factor)+x_addon);
    y_id.value = (Math.floor(Math.random()*y_factor))+y_addon;
    asked+=1;
    acc = got*100/asked;
    z_id.value = "";
    lost+=1;
    q_second = 0;
    
    document.querySelector(".question").innerHTML = `Questions ${asked}`;
    document.querySelector(".got").innerHTML = `Got : ${got}`;
    document.querySelector(".lost").innerHTML = `Lost : ${lost}`;
    document.querySelector(".accuracy").innerHTML = `Acc : ${parseInt(acc)}`;
}
function you_got(){
    document.getElementById("error").style.backgroundColor = "green";
    x_id.value = (Math.floor(Math.random()*x_factor)+x_addon);
    y_id.value = (Math.floor(Math.random()*y_factor))+y_addon;
    asked+=1;
    got+=1;
    acc = got*100/asked;
    z_id.value = "";
    q_second = 0;
    
    document.querySelector(".question").innerHTML = `Questions ${asked}`;
    document.querySelector(".got").innerHTML = `Got : ${got}`;
    document.querySelector(".lost").innerHTML = `Lost : ${lost}`;
    document.querySelector(".accuracy").innerHTML = `Acc : ${parseInt(acc)}`;
}
let date = new Date();
let second=0,minute = 0;
const all_time = document.getElementById("all-time");

let clear_interval = setInterval(SetInterval, 1000);

function SetInterval(){
    second+=1;
    minute = parseInt(second/60);
    all_time.innerHTML = `${minute<10?String(`0${minute}`):minute} : 
    ${second%60<10?String(`0${second%60}`):second%60}`;

}

const this_time =  document.querySelector("#this-time");
let box_loading =  document.querySelector("#box1");
box_loading.style.transitionProperty = "width";

let maximum_chance = 5;
let chance_indicator_width = 300;
let q_second = 0;

setInterval(()=>{//chance indicator or loading indicator
    this_time.innerHTML = q_second;
    switch(q_second){
        case 0:
            box_loading.style.transitionDuration = "0s";
            box_loading.style.display = "block";
            box_loading.style.width = String(`${compute_width(maximum_chance,0)}px`);
            break;
        case 1:
            box_loading.style.transitionDuration = "1s";
            box_loading.style.display = "block";
            box_loading.style.width = String(`${compute_width(maximum_chance,1)}px`);
            break;
        case 2:
            box_loading.style.transitionDuration = "1s";
            box_loading.style.display = "block";
            box_loading.style.width = String(`${compute_width(maximum_chance,2)}px`);
            break;
        case 3:
            box_loading.style.transitionDuration = "1s";
            box_loading.style.display = "block";
            box_loading.style.width = String(`${compute_width(maximum_chance,3)}px`);
            break;
        case 4:
            box_loading.style.transitionDuration = "1s";
            box_loading.style.display = "block";
            box_loading.style.width = String(`${compute_width(maximum_chance,4)}px`);
            break;
        case 5:
            box_loading.style.transitionDuration = "1s";
            box_loading.style.width = String(`${compute_width(maximum_chance,5)}px`);
            break;
    }
    if(q_second>maximum_chance){
        you_lost();
        q_second = 0;
        box_loading.style.width = "300px";
    }
    q_second += 1;
},1000);

function compute_width(maximum_chance,current_value){
    return chance_indicator_width-((current_value)*chance_indicator_width/maximum_chance);
}


/*const min=50;
const max=100;

let num=Math.random()*(max-min)+min;
console.log(Math.trunc(num));*/

document.getElementById("button").onclick=function() {
let number=Math.random()*6+1
document.getElementById("number").textContent=Math.trunc(number);

}
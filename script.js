import {kSolver} from "./knapsol.js";
let n = prompt("Enter No. of items.");
let limit = prompt("Enter Knapsack Limit.");
// return html collection in array formatl
document.title = "Knapsack 01 Solver";
let container = document.getElementsByClassName("container")[0];
for (let index = 0; index < n; index++) {
    let section = document.createElement("div");
    section.className = "section";
    let text = document.createElement("div");
    text.className = "itemsname";
    text.innerText = `Item ${String.fromCharCode(index + 65)}`;
    let inputboxvalue = document.createElement("input");
    let inputboxweight = document.createElement("input");
    inputboxvalue.type = "number";
    inputboxweight.type = "number";
    inputboxvalue.id = `ibv${index}`;
    inputboxweight.id = `ibw${index}`;
    inputboxvalue.placeholder = `Enter Value Of Item ${String.fromCharCode(index + 65)}`;
    inputboxweight.placeholder = `Enter Weight of Item ${String.fromCharCode(index + 65)}`;
    section.append(text, inputboxvalue, inputboxweight);
    container.append(section);
}
let value = [];
let weight = [];
let res;
function store() {
    for (let j = 0; j < n; j++) {
        value[j] = Number(document.getElementById(`ibv${j}`).value);
        weight[j] = Number(document.getElementById(`ibw${j}`).value);
    }
}


let result = document.createElement("div");
result.id = "b1";
result.innerHTML = "<result>Result IS Appear Here..</result>";
let but = document.createElement("button");
but.className = "but";
but.addEventListener("click",Solver);
but.textContent = "Calculate..";
function Solver(){
    store();
    result.innerText = kSolver(value , weight, limit);
}
container.append(but,result);

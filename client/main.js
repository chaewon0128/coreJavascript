import { getNode, getInputValue, getRandom,insertLast } from "./lib/index.js";
import { jujeobData } from "./data/data.js";


const submit = getNode('#submit')
const result = getNode('.result')



function submitHandler(e) {
  e.preventDefault();
let name = getInputValue('#nameField')
let list = jujeobData(name)


let pick = list[getRandom(list.length-1)]; //!이거 다시 보쟈

console.log(pick);

result.textContent = ''
insertLast(result,pick)

}


submit.addEventListener('click',submitHandler)
import { getNode, getInputValue, getRandom,insertLast, clearContents, syntaxError, isNumericString } from "./lib/index.js";
import { jujeobData } from "./data/data.js";



const submit = getNode('#submit')
const result = getNode('.result')

function submitHandler(e) {
  e.preventDefault();
let name = getInputValue('#nameField')
let list = jujeobData(name)
let pick = list[getRandom(list.length-1)]; //!이거 다시 보쟈

if(!name) {
  alert('이름을 입력해주세요')
  return // 오류니까 리턴 써서 종료
}
if(isNumericString(name)) {
  alert('제대로된 이름을 입력 하세요');
  return // 오류니까 리턴 써서 종료
}


clearContents(result)
insertLast(result,pick)

}

submit.addEventListener('click',submitHandler)
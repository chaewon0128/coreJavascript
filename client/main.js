import { getNode, getInputValue, getRandom,insertLast, clearContents, syntaxError, isNumericString,showAlert } from "./lib/index.js";
import { jujeobData } from "./data/data.js";

const submit = getNode('#submit')
const result = getNode('.result')

function submitHandler(e) {
  e.preventDefault();
let name = getInputValue('#nameField')
let list = jujeobData(name)
let pick = list[getRandom(list.length-1)]; //!이거 다시 보쟈

if ((!name) || (isNumericString(name))) {
  showAlert('.alert','제대로된 값을 입력하세요',2000)
   return // 오류니까 리턴 써서 함수 실행 안되게 종료 시킴
}


clearContents(result)
insertLast(result,pick)

}

submit.addEventListener('click',submitHandler)
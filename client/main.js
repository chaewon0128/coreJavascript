import { getNode, getInputValue, getRandom,insertLast, clearContents, syntaxError, isNumericString,showAlert, copy, addClass, removeClass } from "./lib/index.js";
import { jujeobData } from "./data/data.js";

const submit = getNode('#submit')
const result = getNode('.result')

function submitHandler(e) {
  e.preventDefault();
let name = getInputValue('#nameField')
let list = jujeobData(name)
let pick = list[getRandom(list.length-1)]; //!이거 다시 보쟈

if (!name) {
  showAlert('.alert','제대로된 값을 입력하세요',2000)

  gsap.fromTo(result, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
{/*  addClass(result,'shake') // 한번 쓰고 나면 쉐이크가 안된다. 해결 어떻게?
  setTimeout(() => { // 센타임아웃으로 클래스를 지워줌, gsap 이용하면 애니메이션이 확실하게 끝난 후에 지워줌
    removeClass(result,'shake')
  }, 1000); */}
   return // 오류니까 리턴 써서 함수 실행 안되게 종료 시킴
}
if (isNumericString(name)) {
  showAlert('.alert','제대로된 값을 입력하세요',2000)
   return // 오류니까 리턴 써서 함수 실행 안되게 종료 시킴
}


clearContents(result)
insertLast(result,pick)

}



function clickCopyHandler(e) {
  let text = result.textContent
  copy(text).then (( )=> {

    showAlert('.alert-success','클립보드 복사가 완료되었습니다',2000)

  }) // 약속구문
}

submit.addEventListener('click',submitHandler)
result.addEventListener('click',clickCopyHandler)
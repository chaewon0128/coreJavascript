
function xhrData(method,url) {
  const xhr = new XMLHttpRequest();
  xhr.open(method,url)

//console.log(xhr.readyState); 0
  xhr.open('GET','https://jsonplaceholder.typicode.com/users')
//console.log(xhr.readyState); 1

  xhr.addEventListener('readystatechange', () => {
  if(xhr.status >= 200 && xhr.status < 400) { // 제대로 통신된 상태
  if(xhr.readyState === 4) { // 컴플릿 된 상태만 
    console.log('통신 성공');
    console.log(xhr.response)
   }
   }else {
   console.error('통신 실패');
   }
  }
  )
    xhr.send()//서버에 요청
}
xhrData('POST','https://jsonplaceholder.typicode.com/users')
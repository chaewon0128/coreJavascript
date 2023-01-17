
export function xhrData({
  url, // 2.매개변수로 받을때 아예 구조분해해서 받은거
  method ='GET', // 이렇게 하면 초기값 설정이 가능하다.
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type':'application/json', // 헤더에 꼭 컨텐트타입은 명시 해줘야함
    'Access-Control-Allow-Origin' : '*' // 서버에서 막아두면 접근이 불가능 지금은 전체허용 상태
}
}){

  //const{method,url,body} = options //1.객체구조분해할당
  const xhr = new XMLHttpRequest();

  xhr.open(method, url)
{/*
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });
*/}
//console.log(xhr.readyState); 0
//xhr.open('GET','https://jsonplaceholder.typicode.com/users')
//console.log(xhr.readyState); 1


  xhr.addEventListener('readystatechange', () => {
    const{status,readyState,response} = xhr; //객체 구조 분해 할당

  if(status >= 200 && status < 400) { // 제대로 통신된 상태
  if(readyState === 4) { // 컴플릿 된 상태만 
    console.log('통신 성공');
    onSuccess(JSON.parse(response));
   }
   }else {
   //console.error('통신 실패');
   onFail('통신실패');
   }
  }
  )
    xhr.send(JSON.stringify(body))//서버에 요청 , post 할때 여기다 담아 보냄
}

xhrData({

  url: 'https://jsonplaceholder.typicode.com/users',
  onSuccess: (result) => {
    console.log(result);
  },
  onFail: (error) => {
    console.log(error);
  }
 
 // method:'GET',
  //body: null,
  //headers: {
  //    'Content-Type': 'application/json'
  //}
})

xhrData.get = (url,onSuccess,onFail) => {
  xhrData({
  url,
  onSuccess,
  onFail
})
}

xhrData.post = (url,body,onSuccess,onFail) => {
  xhrData({
  method:'POST',
  url,
  body,
  onSuccess,
  onFail
})
}


xhrData.put = (url,body,onSuccess,onFail) => {
  xhrData({
  method:'PUT',
  url,
  body,
  onSuccess,
  onFail
})
}

xhrData.delete = (url,body,onSuccess,onFail) => {
  xhrData({
  method:'DELETE',
  url,
  onSuccess,
  onFail
})
}




//console.dir(xhrData)












{/*xhrData('POST','https://jsonplaceholder.typicode.com/users',{
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
)*/}


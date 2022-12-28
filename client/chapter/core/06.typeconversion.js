/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */
//String() 함수 
// 자료형 + "" 빈문자열 더하면 변경

// number
const YEAR = 2022;
console.log(typeof String(YEAR));


// undefined, null
console.log(String(undefined));

let days = null;
console.log(String(days));
// boolean
let isKind = true;
console.log(isKind + "" );


/* 데이터 → 숫자 ----------------------------------------------------------- */
//Number() 함수
// *1 /1 해주면 숫자됨 (암시적형변환)
// + 앞에 써줘도 숫자됨(암시적형변환)

// undeinfed
console.log(Number(undefined));
// null
let money = null;
console.log(Number(money));
// boolean
console.log(Number(true));
console.log(Number(false));
let isGood = true;
console.log(isGood * 1);


// string
let num = '  123   ';
console.log(num *1)
let user = "채원"
console.log(parseInt(user));
// numeric string
let width = '320px';

console.log(parseInt(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(" "));
console.log(Boolean(!" "));


// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 


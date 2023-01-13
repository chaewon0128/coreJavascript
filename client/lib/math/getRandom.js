import { typeError } from '../error/typeError.js'

export function getRandom (n) {
  if(!n) typeError('한 개 이상의 매개변수를 받아야합니다.')
  if (typeof n !== 'number') typeError('매개변수는 숫자 타입이어야 합니다.')
  return Math.round(Math.random()*n)
}
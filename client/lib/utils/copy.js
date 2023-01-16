export function copy (text) {
 
 return navigator.clipboard.writeText(text) // promise 리턴
}
## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let counter=0
function increment(){
counter++
console.log("Counter:"+counter)
setTimeOut(increment,1000)
}
increment()

(Hint: setTimeout)

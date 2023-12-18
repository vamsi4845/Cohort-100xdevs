Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock(){
let date = new Date()
let hour = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
console.log(hour+"::"+minutes+"::"+seconds+" PM")
if(hour > 12){
console.log(hour+"::"+minutes+"::"+seconds)
}
else{
console.log(hour+"::"+minutes+"::"+seconds+" AM")
}
}
setInterval(clock,1000)

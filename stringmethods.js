let name = "Itajan"
console.log(name.toUpperCase());
console.log(name.toLowerCase());
//slice
console.log(name.slice(2,5));
console.log(name.slice(2));
console.log(name.replace("jan", "man"));

let friend = "Naman"

console.log(name.concat(" is a friend of ", friend, " Ok. "))


//trim:
let friend2 = "      Meena      "
console.log(friend2.trim())

console.log(name[name.length - 1])

if(name.includes('jan')){
    console.log('jan found!')
}
else{
    console.log('jan not found!')
}
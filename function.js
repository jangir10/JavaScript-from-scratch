function aveRage(x,y){
    return Math.round((x+y)/2)
}

let a = 10;
let b =12;
console.log(aveRage(a,b))

//arrow fun:
const sum=(a,b)=>{
    return a+b;
}
console.log(sum(4,7))

const hello=()=>{
    console.log("hello")
}
hello()

const hi=()=>{
    return "hi"
}
let v = hi()
console.log(v)
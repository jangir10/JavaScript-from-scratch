let num = [1,2,3,4.5];

//forEach loop
num.forEach(element => {
    console.log(element * element)
})

//Array.from  : HTML Collection to array
let mystr = "Niranjan"
let myarr = Array.from(mystr)
console.log(myarr)

//for....of:
for(let i of num){
    console.log(i)
}

//for......in
for (let item in num){
    console.log(item)
}
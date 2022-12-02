const arr1 = [1,2,3,4]
console.log(arr1[0])

console.log(arr1.length)

arr1[2]= 8
console.log(arr1)

console.log(typeof arr1)

console.log(arr1.toString())

console.log(arr1.join("-"))

let poppedElement = arr1.pop() //last element removal.changes the array.
console.log(arr1, poppedElement)

arr1.push(9) //changes the array.
console.log(arr1)

let shiftedElement = arr1.shift() //removes the first element from the array. changes the array 
let addedElement = arr1.unshift(7) //adds a new element to the beginning of the array. changes the array.

const arr2 = [12,234,3223,23,323,32]

let arr3 = arr1.concat(arr2) //does not change the original array.
console.log(arr3)

//sorting the array:
arr2.sort() //alphabetically sort karta h.
console.log(arr2)

let compare = (a,b)=>{
    return b-a;
}

arr2.sort(compare)
console.log(arr2)            

//slice and splice:
// arr2.splice(2,2,1021, 1022, 1024, 1043) //index, number of items to be deleted, new adds. Changes the source array.
let deletedItems = arr2.splice(2,2,1021, 1022, 1024, 1043) //index, number of items to be deleted, new adds. Changes the source array.
// console.log(arr2)
console.log(deletedItems) //an array.

let slicedArray = arr2.slice(2,4) //does not modifies the source array.
console.log(slicedArray)

console.log(arr2)
console.log(arr2.reverse()) //modifies the source array.




let elemClass = document.getElementsByClassName("container");
console.log(elemClass); //html collection.
elemClass[0].classList.add("new-class"); //also try remove.

//appending a child:
tag = document.getElementsByTagName('div');
createdEle = document.createElement('p');
createdEle.innerText = "This is a created para";
tag[0].appendChild(createdEle);
//replacing:
createdEle2 = document.createElement('b');
createdEle2.innerText = "This is a created bold";
tag[0].replaceChild(createdEle2, createdEle);
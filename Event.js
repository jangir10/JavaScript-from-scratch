{/* <button class="button" onclick ="clicked()"> */}
clicked = ()=>{
    console.log("The button was clicked");
}

window.onload = () =>{
    console.log("the document was loaded");
}
{/* <div id="firstcontainer"> <button >click me</button> </div> */}
firstcontainer.addEventListener('click', function(){
    console.log("clicked on container");})

firstcontainer.addEventListener('mouseover', function(){
        console.log("mouse on container");})

firstcontainer.addEventListener('mouseout', function(){
            console.log("mouse out of container");})
            
firstcontainer.addEventListener('click', function(){
    document.querySelectorAll('#container').innerHTML="We have clicked.";})
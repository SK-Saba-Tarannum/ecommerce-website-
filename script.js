const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const close=document.getElementById("close");


if(bar){
    bar.addEventListener("click",()=>{
        console.log("clicked")
        nav.style.display="flex"
    })
}

if(close){
    close.addEventListener("click",()=>{
        console.log("clicked")
        nav.style.display="none"
    })
}
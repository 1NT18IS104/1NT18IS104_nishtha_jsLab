let a=document.getElementById("div1");
if(a){
    a.addEventListener("click", () => {
        console.log("Welcome!");
        alert("You are in the Castle!");
    });
}


let b=document.getElementById("div2");
if(b){
    b.addEventListener("click", () => {
        console.log("Welcome!");
        alert("You are in the Court!");
    });
}


let c=document.getElementById("div3");
if(c){
    c.addEventListener("click", () => {
        console.log("Welcome!");
        alert("You are in Danger!");
    });
}


let d=document.getElementById("div4");
if(d){
    d.addEventListener("click", () => {
        console.log("Welcome!");
        alert("You escaped!");
    });
}
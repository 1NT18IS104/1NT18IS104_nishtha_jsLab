var num=[]
document.getElementById("calc").addEventListener("click", (e) => {
    if(e.target.classList.contains("num")){
        num.push(e.target.value);
        number=parseInt(num.join(''));
        document.getElementById("result").innerHTML=number;
    }

    else if(e.target.classList.contains("symbol")){
        symbol=e.target.value;
        num1=number;
        num.length=0;
    }

    else if(e.target.classList.contains("ans")){
        num2=number;
        num.length=0;
        calculation(num1, num2, symbol);
        console.log('ans'+num);
        console.log('ans'+num1);
        console.log('ans'+num2);
    }

    else if(e.target.classList.contains("cancel")){
        document.getElementById("result").innerHTML=0;
        num.length=0;
        num1=0;
        num2=0;
        console.log(num);
        console.log(num1);
        console.log(num2);
    }
    
});


function calculation (num1, num2, symbol){
    if(symbol==="+")
    document.getElementById("result").innerHTML=num1+num2;

    else if(symbol=="-")
    document.getElementById("result").innerHTML=num1-num2;

    else if(symbol=="*")
    document.getElementById("result").innerHTML=num1*num2;

    else if(symbol=="/")
    document.getElementById("result").innerHTML=num1/num2;
}





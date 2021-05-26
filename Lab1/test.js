const readData=document.getElementById("submit");
if(readData){
    readData.addEventListener('click', () => { 
        let getName=document.getElementById('name').value;
        let getDesig=document.getElementById('designation').value;
        alert(getName+' is a '+getDesig);
        console.log("Hi "+getName);
    });
}

let i=0;
//let j=12;

let newTask= document.getElementById("add");//Add button
const user=document.getElementById("name");//name input
const tasks=document.getElementById("buttonInside");//task space
let getData=document.getElementById("getData"); //to print the list
let getName=document.getElementById("getName"); //fetch the list based on this value
let formData=document.getElementById("formData");
let list = document.getElementById("List");
const storage = window.localStorage
const Todo = storage.getItem('todo') ?  JSON.parse(storage.getItem('todo')) : []
// let inputBox=document.createElement("input")//new input box
// inputBox.setAttribute("type", "text");
// inputBox.setAttribute("name", "NextTask");
// inputBox.setAttribute("placeholder", "Next task");
const inputBox = document.getElementsByClassName("task")[0];

//add upto 5 tasks 
if(newTask){
    newTask.addEventListener("click", (e) => {
        e.preventDefault();
        if(i++ < 5){
            tasks.appendChild(inputBox.cloneNode())
        }
        else{
            alert("Dream big, start small: Limit Reached");
        }  
    });
}

//print list
// fetch.addEventListener("click", () => {
//     window.open("fetch.html", "_self");
// });
function clearForm () {
    user.value = '';
    for (i = 0; i < tasks.children.length; i ++ ) {
        tasks.children[i].value = ''
        if(tasks.children[i].type !== button && i != 0 )
            tasks.removeChild(i)

    }
}

//get values for the to-do list
 onsubmit = (e) => {
    if(!user.value){
        alert("Don't be shy, tell us your name");
        return;
    }
    
    e.preventDefault();
    let userdata = { user: user.value, tasks: []};
    let arr=document.getElementsByClassName("task");

    for(i=0; i<arr.length;i++){
        userdata.tasks.push(arr[i].value);
    }

    Todo.push(userdata)
    // clearForm()
    storage.setItem("todo",JSON.stringify(Todo));
    location.reload();
    
};

//print page 
if(getData){
    getData.addEventListener("click", ()=> {
        let index=Todo.findIndex(x => x.user===getName.value);
        if(index==-1) {
            alert("Sorry you are not registered with us");
            getName.value='';
            return;
        }
        formData.style.display="none";
        Todo[index].tasks.forEach((item)=>{
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        });

        
    });
}

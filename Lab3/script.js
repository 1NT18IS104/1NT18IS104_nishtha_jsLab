let log=[];
log.push("Box 1");
document.getElementById("text").onclick = function () {
    var ok = true;

     if (ok === true) {
          var div = document.createElement('div');
            div.style.backgroundColor = "black";
            div.style.height = "100px";
            div.style.width = "20%";

       document.getElementsByTagName('body')[0].appendChild(div);
    }
    var count=document.getElementsByTagName("div").length;
    var box=count.toString();
    log.push("Box "+box);
    console.log("A new div was created");
};


// function logging() {
//     console.log("Creating a new div");
//     var count=document.getElementsByTagName("div").length;
//     console.log(count);
//     var box=count.toString();
//     log.push("Box "+box);
// }
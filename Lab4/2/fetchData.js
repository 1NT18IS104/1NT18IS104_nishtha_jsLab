const sendRequest= document.getElementById('sendReq');
const fetchData= () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(json => {
        document.getElementById("front").innerHTML = json.setup;
        document.getElementById("back").innerHTML = json.punchline;
    })
    .catch(e => console.log(e))
}

sendRequest.addEventListener('click', fetchData);

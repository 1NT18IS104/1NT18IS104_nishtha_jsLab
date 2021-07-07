var yes=document.getElementById("yes");
var no=document.getElementById("no");
var vaccine=document.getElementById("vaccine");
var shot=document.getElementsByClassName("shot")
var shotType=document.getElementById("shotType")
var form=document.getElementById('vaccinationdata');
var notVaccinated=document.getElementById("notVaccinated");
var shottwo=document.getElementById('shottwo');
var shotone=document.getElementById('shotone');
var covi=document.getElementById('covi');
var covax=document.getElementById('covax');
var sput=document.getElementById('sput');
var covidose=document.getElementById('covidose');
var covaxdose=document.getElementById('covaxdose')
var formtwo=document.getElementById('doseoneform');
var yestwo=document.getElementById('yestwo');
var vaccinated_two=document.getElementById('vaccinated_two');

yes.addEventListener('click', (e) => {
    vaccine.style.display = 'block';
})  

no.addEventListener('click', (e) => {
    vaccine.style.display = 'none'; 
})

vaccine.addEventListener('click', (e) => {
    shotType.style.display = 'block';
})

form.addEventListener('submit', (e) => {

    if (no.checked) {
        form.style.display='none';
        notVaccinated.style.display='block'
        e.preventDefault();
    }
    else if(shottwo.checked){
        form.style.display='none';
        vaccinated.style.display='block'
        e.preventDefault();
    }
    // else if(shotone.checked){
    //     form.style.display='none';
    //     notVaccinated.style.display='block'
    //     e.preventDefault();
    // }
    else if (shotone.checked){
        form.style.display='none';
        formtwo.style.display='block';
        if(covi.checked){
            covidose.style.display='block';
        }
        else{
            covaxdose.style.display='block';
        }
        e.preventDefault();
    }
    
});

formtwo.addEventListener('submit', (e) => {
    if (yestwo.checked) {
        form.style.display='none';
        formtwo.style.display='none';
        notVaccinated.style.display='block'
        vaccinated_two.style.display='none'
        e.preventDefault();
    }
    else{
        form.style.display='none';
        formtwo.style.display='none';
        vaccinated_two.style.display='block'
        e.preventDefault();
    }
});
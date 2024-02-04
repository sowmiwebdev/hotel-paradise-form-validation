const form = document.getElementById("form");
const username = document.getElementById("username");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const codeno = document.getElementById("codeno");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const indate = document.getElementById("indate");
const intime = document.getElementById("intime");
const outdate = document.getElementById("outdate");
const outtime = document.getElementById("outtime");
const rooms = document.getElementById("rooms");
const noofadults = document.getElementById("noofadults");

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernameValue = username.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();
    const stateValue = state.value.trim();
    const codenoValue = codeno.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const indateValue = indate.value.trim();
    const intimeValue = intime.value.trim();
    const outdateValue = outdate.value.trim();
    const outtimeValue = outtime.value.trim();
    const roomsValue = rooms.value.trim();
    const noofadultsValue= noofadults.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username Cannot Be Blank');
    }
    else{
        setSuccess(username);
    }

    if(addressValue === ''){
        setError(address, 'Address Cannot Be Blank');
    }
    else{
        setSuccess(address);
    } 
    
    if(cityValue === ''){
        setError(city, 'Please Fill');
    }
    else{
        setSuccess(city);
    }

    if(stateValue === ''){
        setError(state, 'Please Fill');
    }
    else{
        setSuccess(state);
    }

    if(codenoValue === ''){
        setError(codeno, 'Please Fill');
    }
    else{
        setSuccess(codeno);
    }

    if(phoneValue === ''){
        setError(phone, 'Please Fill');
    }
    else{
        setSuccess(phone);
    }

    if(emailValue === ''){
        setError(email, 'Please Fill');
    }
    else if(!isEmail(emailValue))
    {
        setError(email,'Not a valid Email');
    }
    else{
        setSuccess(email);
    }

    if(indateValue === ''){
        setError(indate, 'Please Fill');
    }
    else{
        setSuccess(indate);
    }

    
    if(intimeValue === ''){
        setError(intime, 'Please Fill');
    }
    else{
        setSuccess(intime);
    }

    
    if(outdateValue === ''){
        setError(outdate, 'Please Fill');
    }
    else{
        setSuccess(outdate);
    }

    if(outtimeValue === ''){
        setError(outtime, 'Please Fill');
    }
    else{
        setSuccess(outtime);
    }

    if(roomsValue === ''){
        setError(rooms, 'Please Select the Option');
    }
    else{
        setSuccess(rooms);
    }
    
    if(noofadultsValue === ''){
        setError(noofadults, 'Please Select the Option');
    }
    else{
        setSuccess(noofadults);
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-Control error';
    small.innerText = message;
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-Control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email); 
}


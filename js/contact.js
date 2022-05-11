const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementById('submit');
const inputs = document.querySelectorAll('input');
const formAlert = document.querySelector('.alert_form');

const specChar = "&'()=+^$*!\":;,?§%£¨£µ~#[|`^]}{><²";


function alert(msg) {
    formAlert.classList.add('pd');
    formAlert.textContent =msg;
}
function resetAlert() {
    formAlert.classList.remove('pd');
    formAlert.classList.remove('form_success');
    formAlert.classList.remove('form_fail');
    formAlert.textContent = '';
}

function checkField(field, arr=[true]) {
    let uniSpecChar = specChar.split('');
    uniSpecChar.push('@');
    uniSpecChar.forEach(char=> {
        if(field.value.includes(char)) {
            arr.push(false);
        }
    })
    return arr.length == 1 ? true : false;
}
function checkMail(field, arr=[true]) {
    let uniSpecChar = specChar.split('');
    uniSpecChar.forEach(char=> {
        if(field.value.includes(char)) {
            arr.push(false);
        }
    })
    return arr.length == 1 ? true : false;
}

function checkName(Name) {
    if(Name.value.length>=3 && Name.value.length<=20) {
        if(checkField(Name) === true) {
            return true;
        }else {
            Name.classList.add('fail_input');
            return false;
        }
    }else {
        Name.classList.add('fail_input');
        return false;
    }
}
function checkEmail() {
    if(email.value.length>=3 && email.value.length<=320) {
        if(checkMail(email) === true && email.value.includes("@")) {
            return true;
        }else {
            email.classList.add('fail_input');
            return false;
        }
    }else {
        email.classList.add('fail_input');
        return false;
    }
}
function checkMessage() {
    if(message.value.length>=60 && message.value.length<=800) {
        return true;
    }else {
        message.classList.add('fail_input');
        return false;
    }
}
inputs.forEach(input=> {
    input.onfocus = function(){this.classList.remove('fail_input');}
})
message.onfocus = function() {this.classList.remove('fail_input');}

submit.onclick = function(e) {
    e.preventDefault();
    checkName(fName);
    checkName(lName);
    checkEmail();
    checkMessage();
    if(checkName(fName)&&checkName(lName)&&checkEmail()&&checkMessage()) {
        formAlert.classList.add('form_success');
        alert('thanks for contacting!');
    }else {
        formAlert.classList.add('form_fail');
        alert('please enter valid info!');
    }
    setTimeout(()=>{
        resetAlert();   
    }, 4000)
}
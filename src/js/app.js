const form = document.getElementById('form');
const username = document.getElementById('username');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const checkbox = document.getElementById('checkbox');

form.addEventListener('submit', e =>{
    e.preventDefault();

    checkInputs();
});

// функция проверки инпута на введенное значение
function checkInputs(){
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const telValue = tel.value.trim();
    const emailValue = email.value.trim();
    const checkboxValue = checkbox.value;

    // проверка заполнено ли поле username
    if(usernameValue === ''){
        setErrorFor(username, 'Поле "Имя" не заполнено');
    }else{
        setSuccessFor(username);
    }

    // проверка заполнено ли поле tel
    if(telValue === ''){
        setErrorFor(tel, 'Поле "Телефон" не заполнено');
    }else if(!isTel(telValue)){
        setErrorFor(tel, 'Поле должно иметь вид 8 (999) 123-45-64')
    }else{
        setSuccessFor(tel);
    }

    // проверка заполнено ли поле email
    if(emailValue === ''){
        setErrorFor(email, 'Поле "email" не заполнено');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Некорректный email');
    }else{
        setSuccessFor(email);
    }

    // проверка на свойство checked
    if(checkbox.checked){
        setSuccessFor(checkbox);
    }else{
        setErrorFor(checkbox, 'Вы должны согласиться с политикой конфедециальности');
    }
}

// функция вывода ошибки
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = 'form-control error';
    small.innerText = message;
}

// функция одобрения
function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

// проверка на валидность телефонного номера
function isTel(tel){
    return /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/.test(tel);
}

// проверка на валидность email адреса
function isEmail(email){
    return /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/.test(email);
}
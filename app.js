const form = document.getElementById('form');
const username = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const number = document.getElementById('number');
const email = document.getElementById('email');
const toogle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const head=document.getElementById("main-head");
const element1 = document.getElementById('a');
const element2 = document.getElementById('w');
const element3 = document.getElementById('c');
const menu = document.getElementById('menu');



if(form!=null){
form.addEventListener('submit', e => {
	e.preventDefault();
	
	validateInputs();
});
}



function validateInputs() {
	const  usernameValue = username.value.trim();
	const lnameValue = lname.value.trim();
	const numberValue = number.value.trim();
	const  emailValue = email.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'İsim Boş Bırakılamaz');
	} else {
		setSuccessFor(username);
	}


    if(lnameValue === '') {
		setErrorFor(lname, 'Soyİsim Boş Bırakılamaz');
	} else {
		setSuccessFor(lname);
	}

    if(numberValue === '') {
		setErrorFor(number, 'Telefon Numarası Boş Bırakılamaz ');
	} else {
		setSuccessFor(number);
	}

    if(emailValue === '') {
		setErrorFor(email, 'Email  Boş Bırakılamaz');
	} else if(!isEmail(emailValue)){
		setErrorFor(email,"Email  Geçersiz");
	}
    else{
        setSuccessFor(email);
    }
	
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}







toogle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        menu.style.background="white";
        element1.style.color="black";
        element2.style.color="black";
        element3.style.color="black";
        
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        // head.style.color="black";
        // username.style.color="black";
        // lname.style.color="black";
        // number.style.color="black";
        // email.style.color="black";
        menu.style.background="black";
        element1.style.color="white";
        element2.style.color="white";
        element3.style.color="white";
       
    }
});

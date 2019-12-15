var signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signupForm['validationCustom01'].value;
    const email = signupForm['validationCustomUsername'].value;
    const password = signupForm['exampleInputPassword1'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log("Hi "+name+" your account has been successfully created. Please sign-in.");
        signupForm.reset();
        
        alert("Hi "+name+" your account has been successfully created. Please sign-in.");
    })
})

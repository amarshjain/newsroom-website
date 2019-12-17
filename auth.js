var signupForm = document.querySelector('#signup-Form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signupForm['validationCustom01'].value;
    const email = signupForm['validationCustomUsername'].value;
    const password = signupForm['exampleInputPassword1'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        console.log("Hi "+name+" your account has been successfully created. Please sign-in.");
        signupForm.reset();
        
        alert("Hi "+name+" your account has been successfully created. Please sign-in.");
    })
})

var loginForm = document.querySelector('#signin-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['exampleInputEmail1'].value;
    const password = loginForm['exampleInputPassword1'].value;
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        alert("Hi User, Welcome to Hermes.");
    })
})


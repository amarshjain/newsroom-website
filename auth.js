auth.onAuthStateChanged(user =>{
    if(user){
        console.log("USER LOGGED IN");
        setupUI(user);
    }
    else{
        console.log("USER LOGGED OUT");
        setupUI();
    }
})




var signupForm = document.querySelector('#signup-Form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signupForm['validationCustom01'].value;
    const email = signupForm['validationCustomUsername'].value;
    const password = signupForm['exampleInputPassword1'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {



        console.log(cred);
        console.log("Hi "+name+" your account has been successfully created. Please sign-in.");
        
        alert("Hi "+name+" your account has been successfully created. Please sign-in.");

        
        signupForm.reset();
    })
})

var loginForm = document.querySelector('#signin-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['exampleInputEmail1'].value;
    const password = loginForm['exampleInputPassword1'].value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        alert("Hi User, Welcome to Hermes.");
    })
})

var logout = document.querySelector('#loggedIn');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() =>{
        console.log("USER LOGGED OUT!")
    })
})
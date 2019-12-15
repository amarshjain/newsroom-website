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

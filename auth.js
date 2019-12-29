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
        $('#su').modal('hide');
        
        $('#exampleModalCenter').modal('show');

        
        signupForm.reset();

       
    })
})

var loginForm = document.querySelector('#signin-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['exampleInputEmail1'].value;
    const password = loginForm['exampleInputPassword1'].value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
        location.href = "firstp.html";
        $('#exampleModal').modal('hide');
        console.log(cred);
        loginForm.reset();
    })
})

var logout = document.querySelector('#loggedIn');
logout.addEventListener('click', (e) => {
    location.href = "firstp.html";
    e.preventDefault();
    auth.signOut().then(() =>{
        console.log("USER LOGGED OUT!")
    })
})

$("#signupbtn").click(function(){
    var messagesRef = firebase.database().ref('messages');

    var fname = $("#validationCustom01").val();
    var lname = $("#validationCustom02").val();
    var admno = $("#validationCustom03").val();
    var branch = $("#validationCustom04").val();

    function saveMessage(fname, lname, admno, branch){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            fname: fname,
            lname: lname,
            admno: admno,
            branch: branch
            
        });
      }


      saveMessage(fname, lname, admno, branch);


    })

    
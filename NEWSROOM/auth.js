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

var fname, lname, admno, branch;



var signupForm = document.querySelector('#signup-Form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signupForm['validationCustom01'].value;
    const email = signupForm['validationCustomUsername'].value;
    const password = signupForm['exampleInputPassword1'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {



        fname = $("#validationCustom01").val();
        lname = $("#validationCustom02").val();
        admno = $("#validationCustom03").val();
        branch = $("#validationCustom04").val();

        var currentUser = firebase.auth().currentUser;
        firebase.database().ref("-messages/"+currentUser.uid).set({
            fname: fname,
            lname: lname,
            admno: admno,
            branch: branch            
            
            })

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
        location.href = "index.html";
        $('#exampleModal').modal('hide');
        console.log(cred);
        loginForm.reset();
    })
})

var logout = document.querySelector('#loggedIn');
logout.addEventListener('click', (e) => {
    location.href = "index.html";
    e.preventDefault();
    auth.signOut().then(() =>{
        console.log("USER LOGGED OUT!")
    })
})
  
var messagesRef;

    var profileem = document.querySelector('#profilem');


    $("#savech").click(function(){   
 
        fname = $("#asvalidationCustom01").val();
        lname = $("#asvalidationCustom02").val();
        admno = $("#asvalidationCustom03").val();
        branch = $("#asvalidationCustom04").val();

        var currentUser = firebase.auth().currentUser;
        firebase.database().ref("-messages/"+currentUser.uid).update({
            fname: fname,
            lname: lname,
            admno: admno,
            branch: branch            
            
            }).then(() => {
                location.href = "index.html";
            })

        })
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
            branch: branch,
            subs: {
                clab: false,
                rism: false,
                litc: false,
                adc: false,
                artf: false,
                ecel: false,
                lci: false,
                foto: false,
                litm: false,
                wtc: false,
                mant: false,
                arka: false,
                ffi: false,
                kart: false,
                udan: false,
                acm: false,
                fipi: false,
                sese: false,
                siam: false,
                mism: false
            }
            
            })

        console.log(cred);
        console.log("Hi "+name+" your account has been successfully created. Please sign-in.");
        
        $('#subs').modal('show');

        
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
                $('#profilem').modal('hide');            })

        })



        $("#savesubs").click(function(){
            var currentUser = firebase.auth().currentUser;
            firebase.database().ref("-messages/"+currentUser.uid).update({
                subs: {
                    clab: document.getElementById("customControlInline").checked,
                    rism: document.getElementById("customControlInline2").checked,
                    litc: document.getElementById("customControlInline3").checked,
                    adc: document.getElementById("customControlInline4").checked,
                    artf: document.getElementById("customControlInline5").checked,
                    ecel: document.getElementById("customControlInline6").checked,
                    lci: document.getElementById("customControlInline7").checked,
                    foto: document.getElementById("customControlInline8").checked,
                    litm: document.getElementById("customControlInline9").checked,
                    wtc: document.getElementById("customControlInline10").checked,
                    mant: document.getElementById("customControlInline11").checked,
                    arka: document.getElementById("customControlInline12").checked,
                    ffi: document.getElementById("customControlInline13").checked,
                    kart: document.getElementById("customControlInline14").checked,
                    udan: document.getElementById("customControlInline15").checked,
                    acm: document.getElementById("customControlInline16").checked,
                    fipi: document.getElementById("customControlInline17").checked,
                    sese: document.getElementById("customControlInline18").checked,
                    siam: document.getElementById("customControlInline19").checked,
                    mism: document.getElementById("customControlInline20").checked,
                }            
                
                }).then(() => {
                    $('#subs').modal('hide');
                    $('#su').modal('hide');
                    location.href = "index.html";
                })

        })
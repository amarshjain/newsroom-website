const loggedoutlinks = document.querySelectorAll('#loggedout');
const loggedinlinks = document.querySelectorAll('#loggedIn');




const setupUI = (user) => {
    if(user){

        $("#seedhaSignIn").click(function(){
            $("#profilem").modal()
        })

        $("#seedhaSignIn2").click(function(){
            $("#subs").modal()
        })

        $("#profilesubs").click(function(){
            $("#subs").modal()
        })
        $("#seedhaSignIn3").click(function(){
            $("#profilem").modal()

        })
        var currentUser = firebase.auth().currentUser;
                    firebase.database().ref('-messages/' + currentUser.uid + '/subs').once('value').then(function(snapshot) {
                    if(snapshot.val().clab){
                    clabpost = document.getElementById("clabpost");
                    clabpost.style.display = 'block';
                    }
                    if(snapshot.val().rism){
                        clabpost = document.getElementById("robopost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().litc){
                        clabpost = document.getElementById("litcpost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().adc){
                        clabpost = document.getElementById("adcpost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().artf){
                        clabpost = document.getElementById("artfpost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().ecel){
                        clabpost = document.getElementById("ecelpost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().lci){
                        clabpost = document.getElementById("lcipost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().foto){
                        clabpost = document.getElementById("fotopost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().litm){
                        clabpost = document.getElementById("litmpost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().wtc){
                        clabpost = document.getElementById("wtcpost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().mant){
                        clabpost = document.getElementById("mantpost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().arka){
                        clabpost = document.getElementById("arkapost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().ffi){
                        clabpost = document.getElementById("ffipost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().kart){
                        clabpost = document.getElementById("kartpost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().udan){
                        clabpost = document.getElementById("udanpost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().acm){
                        clabpost = document.getElementById("acmpost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().fipi){
                        clabpost = document.getElementById("fipipost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().sese){
                        clabpost = document.getElementById("sesepost");
                        clabpost.style.display = 'block';
                    }
                    if(snapshot.val().siam){
                        clabpost = document.getElementById("siampost");
                        clabpost.style.display = 'block';
                    }
            firebase.database().ref('-messages/' + currentUser.uid).once('value').then(function(snapshot) {
                $("#asvalidationCustom01").val(snapshot.val().fname);
                $("#asvalidationCustom02").val(snapshot.val().lname);
                $("#asvalidationCustom03").val(snapshot.val().admno);
                $("#asvalidationCustom04").val(snapshot.val().branch);
        
            });
    
        });
        loggedoutlinks.forEach(item => item.style.display = 'none')
        loggedinlinks.forEach(item => item.style.display = 'block')
        
    }
    else{
        $("#seedhaSignIn").click(function(){
            $("#exampleModal").modal()
        })

      
        $("#seedhaSignIn2").click(function(){
            $("#exampleModal").modal()

        })
        $("#seedhaSignIn3").click(function(){
            $("#exampleModal").modal()

        })
        loggedoutlinks.forEach(item => item.style.display = 'block')
        loggedinlinks.forEach(item => item.style.display = 'none')
    }
}

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

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


$("#scard").click(function(){
            document.querySelector("#scard").classList.toggle("subscard");
        })

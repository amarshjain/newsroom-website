const loggedoutlinks = document.querySelectorAll('#loggedout');
const loggedinlinks = document.querySelectorAll('#loggedIn');


const setupUI = (user) => {
    if(user){
        loggedoutlinks.forEach(item => item.style.display = 'none')
        loggedinlinks.forEach(item => item.style.display = 'block')
    }
    else{
        loggedoutlinks.forEach(item => item.style.display = 'block')
        loggedinlinks.forEach(item => item.style.display = 'none')
    }
}
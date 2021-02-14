// <!--start contact form-->
//CONTACT FORM
var user = document.getElementById('user'),
    mail = document.getElementById('mail'),
    form = document.querySelector('form'),
    userEror =true,
    emailerrour =true;
function checkErours(){
    if(userEror === true || emailerrour == true ){
    }
}
//PREVENTdEFAULT FORM
form.addEventListener("click", function(event){
    if(userEror === true || emailerrour == true ){
        event.preventDefault()
    }
});
checkErours();
//VALAIDET USER
user.addEventListener('blur',function(){
    if(this.value.length < 4){
        this.nextElementSibling.classList.remove('alert');
        userEror =true;
    }else{
        this.nextElementSibling.classList.add('alert');
        userEror =false;
    }
    checkErours();
})
//VALAIDET EMAIL
mail.addEventListener('blur',function(){
    if(this.value.length < 4){
        this.nextElementSibling.classList.remove('alert');
        emailerrour =true;
    }else{
        this.nextElementSibling.classList.add('alert');
        emailerrour =false;
    }
    checkErours();
})

// <!--end contact form-->
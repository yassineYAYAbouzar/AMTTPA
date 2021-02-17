//search form
var search = document.getElementsByClassName('search')[0];
function fade(){
    search.classList.toggle("displayNOn");
}
//search form
// start slide
var SlideIdx = 1;
showSlides(SlideIdx);

function nextSlidePR(n) {
    showSlides(SlideIdx += n);
}

function buleSlide(n) {
    showSlides(SlideIdx = n);
}

function showSlides(n) {
    var i;
    var slidess = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("BOLLET");
    if (n > slidess.length) {SlideIdx = 1}    
    if (n < 1) {SlideIdx = slidess.length}
    for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slidess[SlideIdx-1].style.display = "block";  
    dots[SlideIdx-1].className += " active";
}
// start slide
//start humborg
var navbar = document.getElementById('navbar');
function toggleNav(){
    navbar.classList.toggle("shownavbar");
}
//end humborg
// // <!--start contact form-->
// //CONTACT FORM
// var user = document.getElementById('user'),
//     mail = document.getElementById('mail'),
//     form = document.querySelector('form'),
//     userEror =true,
//     emailerrour =true;
// function checkErours(){
//     if(userEror === true || emailerrour == true ){
//     }
// }
// //PREVENTdEFAULT FORM
// form.addEventListener("click", function(event){
//     if(userEror === true || emailerrour == true ){
//         event.preventDefault()
//     }
// });
// checkErours();
// //VALAIDET USER
// user.addEventListener('blur',function(){
//     if(this.value.length < 4){
//         this.nextElementSibling.classList.remove('alert');
//         userEror =true;
//     }else{
//         this.nextElementSibling.classList.add('alert');
//         userEror =false;
//     }
//     checkErours();
// })
// //VALAIDET EMAIL
// mail.addEventListener('blur',function(){
//     if(this.value.length < 4){
//         this.nextElementSibling.classList.remove('alert');
//         emailerrour =true;
//     }else{
//         this.nextElementSibling.classList.add('alert');
//         emailerrour =false;
//     }
//     checkErours();
// })

// // <!--end contact form-->

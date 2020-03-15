"use strict"



function onClick(element) {
document.getElementById("img01").src = element.src;
document.getElementById("modal01").style.display = "block";
var captionText = document.getElementById("caption");
captionText.innerHTML = element.alt;
}

window.onscroll = function () { myFunction() };
function myFunction() {
var navbar = document.getElementById("myNavbar");
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
} else {
    navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
}
}

function toggleFunction() {
var x = document.getElementById("navDemo");
if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
} else {
    x.className = x.className.replace(" w3-show", "");
}
}


function notice() {

var name= document.getElementById("name");
var email= document.getElementById("email");
var message= document.getElementById("message");

if(name.value.length==0||email.value.length==0||message.value.length==0){
alert("Please fill in required fields");
}
else{
alert("Thank you for sending your message! We'll email you after sending back the letter.");
document.getElementById("hehe").reset();

}
}

// Get the modal
var modal = document.getElementById("reserveModal");
var loginModal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.getElementById("reserveBtn");
var loginBtn = document.getElementById("loginBtn")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var exit = document.getElementsByClassName("exit")[0];
var exitlogin = document.getElementsByClassName("exitLogin")[0];
var closeLogin = document.getElementsByClassName("closeLogin")[0];


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

loginBtn.onclick = function() {
    loginModal.style.display = "block";
  }
  



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

exit.onclick = function() {
    modal.style.display = "none";
  }

closeLogin.onclick = function() {
    loginModal.style.display = "none";
  }

exitlogin.onclick = function() {
    loginModal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if(event.target ==loginModal){
      loginModal.style.display = "none";
  }
}
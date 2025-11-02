function validateSignIn(event){
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-pass").value;
  const check = document.querySelector('input[type="checkbox"]').checked;
  
  if(!email || !password){
    alert("Please Fill The Details");
  }
  else if(!check){
    alert("Please Check 'Rememeber Me' box");
  }
  else if(email.length<=6){
    alert("size of email should be min 6 letters")
  }
  else{
    redirectToWebsite();
  }
}

function position(id){
  var card = document.getElementsByClassName('card')[id];
  card.style.transform = 'scale(1.5)';
  console.log(id)
}


function redirectToWebsite(){
  window.location.href="Home.html";
}

function Dev(){
  window.location.href="Dev_Home.html";
}
function Itachi(){
  window.location.href="Home.html";
}
function Luffy(){
  window.location.href="Luffy_Home.html";
}
function signout(){
  con=confirm("Are You Sure To Sign Out?")
  if(con==1){
    window.location.href="index.html";
  }
}
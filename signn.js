
 const firebaseConfig = {
  apiKey: "AIzaSyBIhB_g0qDYqjE5AGP4IwqIbiSz-wn3v8I",
  authDomain: "hhhhja-7dc78.firebaseapp.com",
  projectId: "hhhhja-7dc78",
  storageBucket: "hhhhja-7dc78.appspot.com",
  messagingSenderId: "373746471250",
  appId: "1:373746471250:web:d6b4cd36b5a0cee6992a8b"
};
const app= initializeApp(firebaseConfig);
const auth = firebase.auth();

function Sign() {

  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  if((email.value.length>0) && (password.value.length>0))
  {
    
    alert("Signed Up");
  location.href="login.html"
  return true;
  }
  else{
    alert("Input !!!!!!!!")
  }
  
}

function login(){
  var email = document.getElementById("emaill");
  var password = document.getElementById("passwordd");

  if((email.value.length>0) && (password.value.length>0))
  {
  location.href="contach.html"
}}


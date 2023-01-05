// dom events
//form
const btn = document.querySelector('#btn');
const Form = document.querySelector(".signup-form");
const Firstname = document.querySelector("#firstName");
const Lastname = document.querySelector("#lastName");
const Email = document.querySelector("#email");
const Password = document.querySelector("#password");
const Confirm  = document.querySelector("#Cpassword");
const Msg = document.querySelector("#msg");

// Validation button
btn.addEventListener("click", function(e){
  e.preventDefault();

  if(Firstname.value.length === 0 ||
    Lastname.value.length === 0 || 
    Email.value.length === 0 || 
    Password.value.length === 0 || 
    Confirm.value.length === 0){

      console.log("False");
      Msg.innerHTML = "<h4 class='error'>Please complete details</h4>";

      setTimeout(() => document.querySelector(".error").remove(), 3000);
    } else {
      console.log("True");
      Form.submit();
    }
});
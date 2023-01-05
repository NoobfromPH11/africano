// dom events
//form
const btn = document.querySelector('#btn');
const Form = document.querySelector(".login-form");
const Email = document.querySelector("#email");
const Password = document.querySelector("#password");;
const Msg = document.querySelector("#msg");

// Validation button
btn.addEventListener("click", function(e){
  e.preventDefault();

  if(Email.value.length === 0 ||
    Password.value.length === 0
    ){

      console.log("False");
      Msg.innerHTML = "<h4 class='error'>Please complete details</h4>";

      setTimeout(() => document.querySelector(".error").remove(), 10000);
    } else {
      console.log("True");
      Form.submit();
    }
});
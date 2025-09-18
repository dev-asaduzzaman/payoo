document.getElementById("login-btn").addEventListener("click", function () {
  const mobileNumber = 18832324433;
  const password = 1234;
  const mobileNumberValue = document.getElementById("number").value;
  const mobileNumberValueConversion = parseInt(mobileNumberValue);
  const passwordValue = document.getElementById("password").value;
  const passwordValueConversion = parseInt(passwordValue);

  if(mobileNumberValueConversion === mobileNumber && passwordValueConversion === password){
        window.location.href = "./home.html";
  }
    else{
        alert("Invalid Credentials");
    }
});
 
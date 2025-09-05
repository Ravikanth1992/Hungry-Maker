function enter() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    let emailStatus = (passwordStatus = false);
    const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numExp = /^[0-9]+$/;
  
    //Name Validation
    if (email === "") {
        emailError.innerHTML = "EMail is Mandatory";
    } else {
      if (email.match(emailExp)) {
        emailError.innerHTML = "";
        emailStatus = true;
      } else {
        emailError.innerHTML = "Only Charactors";
      }
    }
  
    //Password Status
    if (password === "") {
      passwordError.innerHTML = "Password is Mandatory";
    } else {
      if (password.match(numExp)) {
        if (password.length === 5) {
            passwordError.innerHTML = "";
            passwordStatus = true;
        } else {
            passwordError.innerHTML = "Password With Charecters & Numbers";
        }
      } else {
        passwordError.innerHTML = "Charecters & Numbers";
      }
    }
  
    //Return Validation
    if (emailStatus && passwordStatus) {
      return true;
    } else {
      return false;
    }
  }
  
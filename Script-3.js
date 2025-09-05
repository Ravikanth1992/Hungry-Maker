function sign() {
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const mobileError = document.getElementById("mobileError");
    const passwordError = document.getElementById("passwordError");
    let emailStatus = (mobileStatus = false);
    let passwordStatus = false;
    const emailExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const numExp = /^[0-9]+$/;
    const passwordExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    //Name Validation
    if (email === "") {
      emailError.innerHTML = "Please Enter Your GMail Address";
    } else {
      if (email.match(emailExp)) {
        emailError.innerHTML = "";
        emailStatus = true;
      } else {
        emailError.innerHTML = "Only Charactors";
      }
    }
  
    //Mobile Status
    if (mobile === "") {
      mobileError.innerHTML = "Mobile Number is Mandatory";
    } else {
      if (mobile.match(numExp)) {
        if (mobile.length === 10) {
          mobileError.innerHTML = "";
          mobileStatus = true;
        } else {
          mobileError.innerHTML = "10 Digits Mobile Number";
        }
      } else {
        mobileError.innerHTML = "Only Digits";
      }
    }

    if (password === "") {
      passwordError.innerHTML = "Password Must Be Very Important.";
    } else {
      if (password.match(passwordExp)) {
        passwordError.innerHTML = "";
        passwordStatus = true;
      } else {
        passwordError.innerHTML = "Maximim Eight Characters Is Important.";
      }
    }
  
    //Return Validation
    if (emailStatus && mobileStatus && passwordStatus) {
      return true;
    } else {
      return false;
    }
  }
  
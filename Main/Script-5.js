function complain() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let foodnames = document.getElementById('foodnames').value;
    let quantity = document.getElementById('quantity').value;
    let paymentMethod = document.getElementById('paymentMethod').value;
    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const alphaExp = /^[a-zA-Z]+$/;
    const numExp = /^[0-9]+$/;
    const emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const addressExp = /^[A-Za-z-0-99999999]+$/;
   

    
    // Name validation
    if (name === "") {
        nameError.innerHTML = "please enter valid name";
    } else {
        if (name.match(alphaExp)){
            nameError.innerHTML = "";
            nameStatus = true;
        }else {
            nameError.innerHTML = "Only Alphabets";
        }
    }

    // Phone validation (example for US format)
    if (phone === "") {
        phoneError.innerHTML = "Please Enter Valid Mobile Number"
    }else {
        if(phone.match(numExp)){
            if(phone.length === 10) {
                phoneError.innerHTML = "";
                phoneStatus = true;
            }else{
                phoneError.innerHTML = "Maximum Length is 10"
            }
        }
        else{
            phoneError.innerHTML = "Only Digits";
        }
    }

    // Email validation
    if (email === "") {
        emailError.innerHTML = "Please Enter Valid EMail Address"
    }else{
        if(email.match(emailExp)){
            emailError.innerHTML = "";
            emailStatus = true;
        }else{
            emailError.innerHTML = "@ Is Mandatory";
        }
    }

    // Address validation
    if (address === "") {
        addressError.innerHTML = "Please Enter Valid Address."
    }else {
        if(address.match(addressExp)){
            if(address.length === 5) {
                addressError.innerHTML = "";
                addressStatus = true;
            }else{
                addressError.innerHTML = "Max Length Of Address Will Be 5 & Only English"
            }
        }
        else{
            addressError.innerHTML = "Only Digits";
        }
    }

    // Quantity validation
    if (quantity < 1 || isNaN(quantity)) {
        alert("Quantity should be a positive number.");
        return false;
    }


    // Payment method validation
    return true; // Form is valid

}
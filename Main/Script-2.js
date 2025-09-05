function Order() {
  alert("Working")
  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;
  const nameError = document.getElementById("nameError");
  const quantityError = document.getElementById("quantityError");
  const priceError = document.getElementById("priceError");
  let nameStatus = (quantityStatus = false);
  let priceStatus = false;
  const alphaExp = /^[a-zA-Z]+$/;
  const quantityExp = /^\d+\s*-\s*\d+$/;
  const priceExp = /^\d+\.\{0,1}+\d{0,2)+$/;

  //Name Validation
  if (name === "") {
      nameError.innerHTML = "please enter name";
  } else {
      if (name.match(alphaExp)){
          nameError.innerHTML = "";
          nameStatus = true;
      }else {
          nameError.innerHTML = "Only Alphabets";
      }
  }

  if (quantity === "") {
      quantityError.innerHTML = "Please Enter Quantity Number"
  }else {
      if(quantity.match(numExp)){
          if(quantity.length === 5) {
              quantityError.innerHTML = "";
              quantityStatus = true;
          }else{
              quantityError.innerHTML = "Maximum Length is 10"
          }
      }
      else{
          quantityError.innerHTML = "Only Digits";
      }
  }

  if (price === "") {
      priceError.innerHTML = "Please Enter Price"
  }else{
      if(price.match(priceExp)){
          priceError.innerHTML = "";
          priceStatus = true;
      }else{
          priceError.innerHTML = "Don't Leave Empty";
      }
  }


  //Return Validation
  if (quantityStatus && priceStatus) {
    return true;
  } else {
    return false;
  }
}

// Copy phone number to clipboard and show "Number copied" message
document.getElementById("phone-number").addEventListener("click", function () {
    const phoneNumber = this.textContent;
  
    // Create a temporary input to copy the text
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = phoneNumber;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  
    // Show the "Number copied" message
    const copyMessage = document.getElementById("copy-message");
    copyMessage.classList.add("visible");
    copyMessage.classList.remove("hidden");
  
    // Hide the message after 2 seconds
    setTimeout(() => {
      copyMessage.classList.add("hidden");
      copyMessage.classList.remove("visible");
    }, 2000);
  });
  
  // Order call button functionality
  document.getElementById("order-call").addEventListener("click", function () {
    alert("Звонок заказан! Мы свяжемся с вами в ближайшее время.");
  });
  
  // Order call button functionality
document.getElementById("order-call").addEventListener("click", function () {
    window.location.href = "tel:+79370004141"; // Open phone app
  });
  

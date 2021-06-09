document.getElementById("form").onsubmit = function() {submitMsg()};

function submitMsg() {
    document.getElementById("message").innerHTML = "Thank you for your message. We will get back to you as soon as we can!";
    document.getElementById("form").reset();
  }
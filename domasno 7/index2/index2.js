document.getElementsByTagName("form");
document.addEventListener("submit", (event) => {
  event.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;

  if(password === confirmPassword){
    alert(`Registration Successful! \n ${firstName} ${lastName} \n ${email}`);
  } else {
    alert("Passwords do not match. Please try again.");
  }
});

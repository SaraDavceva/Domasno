const changeColor = (event) => {
  const redLight = document.getElementsByClassName("light")[0];
  const orangeLight = document.getElementsByClassName("light")[1];
  const greenLight = document.getElementsByClassName("light")[2];
  if (event.key === "r") {
    redLight.style.backgroundColor = "red";
    orangeLight.style.backgroundColor = "#444";
    greenLight.style.backgroundColor = "#444";
  } else if (event.key === "o") {
    redLight.style.backgroundColor = "#444";
    orangeLight.style.backgroundColor = "orange";
    greenLight.style.backgroundColor = "#444";
  } else if (event.key === "g") {
    redLight.style.backgroundColor = "#444";
    orangeLight.style.backgroundColor = "#444";
    greenLight.style.backgroundColor = "green";
  }
};

document.addEventListener("keydown", changeColor);

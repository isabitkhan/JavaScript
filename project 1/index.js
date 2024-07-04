const body = document.querySelector("body");
const button = document.querySelectorAll(".btn");

button.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (e.target.id == "primary") {
      body.style.backgroundColor = "blue";
    } else if (e.target.id == "gray") {
      body.style.backgroundColor = "gray";
    } else if (e.target.id == "green") {
      body.style.backgroundColor = "green";
    } else if (e.target.id == "red") {
      body.style.backgroundColor = "red";
    } else if (e.target.id == "yellow") {
      body.style.backgroundColor = "yellow";
    } else if (e.target.id == "blue") {
      body.style.backgroundColor = "blue";
    } else if (e.target.id == "white") {
      body.style.backgroundColor = "white";
    } else if (e.target.id == "black") {
      body.style.backgroundColor = "black";
    }
  })
);

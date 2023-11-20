const select = document.querySelector("select");
const para = document.querySelector("p");
const video = document.querySelector("video");
const source = document.createElement("source");

source.setAttribute("type", "video/mp4");

select.addEventListener("change", setSkrecka);

function setSkrecka() {

  const choice = select.value;
  video.load();
  video.play();

  if (!(video.appendChild(source) == true)) {
    video.appendChild(source);
  }

  if (choice === "emilka") {
    select.style.backgroundColor = "orange";
    select.style.color = "black";
    para.textContent =
      "Emilka je skrecka jedna, je fluffy.";
    para.style.color = "orange";
    source.setAttribute("src", "./content/video/emilka.mov");
  }
    else if (choice === "amalka") {
    select.style.backgroundColor = "green";
    select.style.color = "white";
    para.textContent =
      "Amalka je skrecka dva, je biela.";
    para.style.color = "green";
  }
    else if (choice === "sniezik") {
    select.style.backgroundColor = "lightskyblue";
    select.style.color = "black";
    para.textContent =
      "Sniezik je mini skrecka biela.";
    para.style.color = "lightskyblue";
  }
    else if (choice === "fliacik") {
    select.style.backgroundColor = "red";
    select.style.color = "white";
    para.textContent =
      "Fliacik je mini skrecka flakata.";
    para.style.color = "red";
  }
    else if (choice === "ela") {
    select.style.backgroundColor = "yellow";
    select.style.color = "black";
    para.textContent =
      "Zub";
    para.style.color = "yellow";
    source.setAttribute("src", "./content/video/ela.mov");
  }
    else {
    select.style.backgroundColor = "white";
    select.style.color = "black";
    para.textContent = "";
    video.removeChild(source);
  }
}
function openNav() {
  document.getElementById("mySidepanel").style.width = "calc(200px + 10%)";
  document.getElementById("backgroundBox").style.display = "block";
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "0px";
    }
  });
}
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("backgroundBox").style.display = "none";
}

var coll = document.getElementsByClassName("kopje");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

particlesButton.addEventListener("click", () => {
  confetti("tsparticles", {
      angle: 270,
      count: 25,
      position: { x: 52, y: 0 },
      spread: 270,
      startVelocity: 300,
      decay: 0.9,
      gravity: 8,
      drift: 0,
      ticks: 100,
      colors: ["#ffcd70", "#ffd632"],
      shapes: ["circle"],
      scalar: 0.6,
      zIndex: 2000,
      disableForReducedMotion: true
  });
});
// Double Tap Zoom for mobile devices
let aiImage = document.getElementById("aiImage");
let tapped = false;
aiImage.addEventListener("touchend", function (e) {
  if (!tapped) {
    tapped = true;
    aiImage.style.transition = "transform 0.4s ease";
    aiImage.style.transform = "scale(1.2)";
    setTimeout(() => {
      aiImage.style.transform = "scale(1)";
      tapped = false;
    }, 1000);
  }
});

// Sparkle effect on image hover
aiImage.addEventListener("mousemove", function (e) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = `${e.offsetX}px`;
  sparkle.style.top = `${e.offsetY}px`;
  aiImage.parentElement.appendChild(sparkle);
  setTimeout(() => {
    sparkle.remove();
  }, 800);
});

// Ripple effect for Follow button
const followBtn = document.querySelector(".btn-custom");
followBtn.addEventListener("click", function (e) {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.left = `${e.clientX - followBtn.offsetLeft}px`;
  ripple.style.top = `${e.clientY - followBtn.offsetTop}px`;
  followBtn.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 600);
});

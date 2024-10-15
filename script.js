// Menghapus fitur double tap zoom pada gambar
let yukiImage = document.getElementById("yukiImage");

// Efek sparkle pada gambar saat hover
yukiImage.addEventListener("mousemove", function (e) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = `${e.offsetX}px`;
  sparkle.style.top = `${e.offsetY}px`;
  yukiImage.parentElement.appendChild(sparkle);
  setTimeout(() => {
    sparkle.remove();
  }, 800);
});

// Efek ripple untuk tombol Follow dan Message
const buttons = document.querySelectorAll(".btn-custom");
buttons.forEach(button => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${e.clientX - button.offsetLeft}px`;
    ripple.style.top = `${e.clientY - button.offsetTop}px`;
    button.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

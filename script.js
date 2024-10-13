// Efek parallax pada gambar saat pengguna menggerakkan mouse
const card = document.querySelector('.card');
const profileImg = document.querySelector('.profile-img');

card.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    profileImg.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
});

card.addEventListener('mouseleave', () => {
    profileImg.style.transform = 'translateX(0) translateY(0)';
});

const tombol = document.getElementById("tombol");
const hasil = document.getElementById("hasil");

tombol.addEventListener("click", function () {
    hasil.innerHTML = "I LOVE YOU ❤️";
    tombol.style.display = "none";

    setTimeout(() => {
       tombol.style.display = "block";
       hasil.style.display = "none";
    }, 5000);
});
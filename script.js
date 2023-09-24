document.addEventListener("DOMContentLoaded", function () {
  const produkContainer = document.getElementById("openModalButton");
  const produkButtons =
    produkContainer.getElementsByClassName("proyekcontohitem");
  const modal = document.getElementById("myModal");
  const closeIcon = document.getElementById("closeModalIcon");

  for (const button of produkButtons) {
    button.addEventListener("click", function () {
      modal.style.display = "block";
      const kon = this.querySelector("a");
      const judul = kon.querySelector("p");
      const gambar = kon.querySelector("img");
      const kjudul = document.getElementById("pjudul");
      const kgambar = document.getElementById("pgambar");
      kjudul.innerHTML = judul.innerHTML;
      kgambar.setAttribute("src", gambar.src);
    });
  }

  closeIcon.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const kirim = document.getElementById("kirim");
  kirim.addEventListener("click", () => {
    const email = document.getElementById("email");
    const isi = email.value;
    const regEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let notif = document.getElementById("notif");
    if (isi.match(regEmail)) {
      console.log("benar");
      notif.innerHTML = "Email anda valid";
      notif.style.color = "green";
    } else {
      notif.innerHTML = "Email anda tidak valid";
      notif.style.color = "red";
    }
  });
});

let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
};

const showSlide = (n) => {
  const slides = document.getElementsByClassName("proyekcontohitem");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  console.log(slideIndex);
};

showSlide(slideIndex);

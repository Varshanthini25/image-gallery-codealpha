const images = document.querySelectorAll(".gallery-img");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

// Open modal and show clicked image
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = img.src;
    currentIndex = index;
  });
});

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Next image
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImage.src = images[currentIndex].src;
};

// Previous image
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImage.src = images[currentIndex].src;
};

// Close modal when clicking outside the image
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// ✅ Keyboard navigation
document.addEventListener("keydown", function (event) {
  if (modal.style.display === "flex") {
    if (event.key === "ArrowRight") {
      nextBtn.click();
    } else if (event.key === "ArrowLeft") {
      prevBtn.click();
    } else if (event.key === "Escape") {
      closeBtn.click();
    }
  }
});

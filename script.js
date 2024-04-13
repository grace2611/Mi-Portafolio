var modal = document.getElementById("myModal");

function openModal() {
  modal.style.display = "block";
  modal.classList.remove("fade-out");
  modal.classList.add("fade-in");
}

function closeModal() {
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");
  setTimeout(function() {
    modal.style.display = "none";
  }, 300); // Espera a que termine la animación para ocultar el modal
}
document.addEventListener("DOMContentLoaded", function() {
    var footerContent = document.querySelector('.footer-content');
    footerContent.classList.add('show');
  });
  
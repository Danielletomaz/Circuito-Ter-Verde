// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Fecha menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('show'));
});

// Formulário de contato - apenas feedback visual, sem backend
document.querySelector('.form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada! Em breve entraremos em contato.');
    this.reset();
});

document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const formData = new FormData(form);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        alert("Formulário enviado com sucesso!");
    });
});
const toggleBtn = document.getElementById('toggleMenu');
const navLinks = document.getElementById('navLinks');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


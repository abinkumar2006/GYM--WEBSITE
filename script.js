document.getElementById('demoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = 'Demo enquiry sent successfully. In a real client project, this can connect to EmailJS, Formspree, or a backend.';
  this.reset();
});
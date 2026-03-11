document.getElementById('demoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = ' your enquiry sent successfully. ';
  this.reset();
});

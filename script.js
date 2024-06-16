document.addEventListener('DOMContentLoaded', function () {
  const modeSwitch = document.getElementById('mode');

  modeSwitch.addEventListener('change', function () {
      document.body.classList.toggle('dark-mode');

      // Apply dark mode to all elements that need it
      document.querySelector('.nav_menu').classList.toggle('dark-mode');
      document.querySelectorAll('.nav_link').forEach(link => link.classList.toggle('dark-mode'));
      document.getElementById('home').classList.toggle('dark-mode');
      document.querySelectorAll('.button, .button-email').forEach(button => button.classList.toggle('dark-mode'));
      document.querySelectorAll('.social_icons a').forEach(icon => icon.classList.toggle('dark-mode'));
      document.getElementById('education').classList.toggle('dark-mode');
      document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-mode'));
      document.querySelectorAll('.icon-container').forEach(iconContainer => iconContainer.classList.toggle('dark-mode'));
      document.querySelectorAll('ul li').forEach(listItem => listItem.classList.toggle('dark-mode'));
  });
});

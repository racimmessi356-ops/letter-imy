document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.querySelector('.envelope');
  const button = document.getElementById('openBtn');

  button.addEventListener('click', () => {
    envelope.classList.add('open');
    envelope.classList.add('opened-once');

    // supprimer le bouton définitivement
    button.style.display = 'none';
  });
});
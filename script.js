const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.querySelector('span').textContent = isOpen ? '×' : '+';
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = '+';
}));

document.querySelectorAll('.filter').forEach(filter => filter.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(button => button.classList.remove('active'));
  filter.classList.add('active');
  const selected = filter.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.toggle('is-hidden', selected !== 'all' && card.dataset.category !== selected);
  });
}));

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const message = document.querySelector('.form-message');
  message.textContent = 'Thanks — your message is ready to send. (Connect this form to a backend to receive submissions.)';
  event.target.reset();
});

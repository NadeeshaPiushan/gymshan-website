const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.enquiry-link').forEach(link => {
  link.addEventListener('click', () => {
    const interest = document.getElementById('interest');
    if (interest) interest.value = link.dataset.program;
  });
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const interest = document.getElementById('interest').value;
  const message = document.getElementById('message').value.trim();
  const text = `Hi Gymshan! My name is ${name}. I'm interested in: ${interest}.${message ? `\n\nA little more about my enquiry: ${message}` : ''}\n\nPlease share more details.`;
  window.open(`https://wa.me/94740766572?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
});

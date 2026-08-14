const menuButton = document.querySelector('.menuButton');
const navigation = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const emailOverlay = document.querySelector('.emailOverlay');
const emailTrigger = document.querySelector('.emailTrigger');
const emailClose = document.querySelector('.emailClose');
const emailDialog = document.querySelector('.emailDialog');

function openEmailDialog() {
  emailOverlay.hidden = false;
  emailClose.focus();
}

function closeEmailDialog() {
  emailOverlay.hidden = true;
  emailTrigger.focus();
}

emailTrigger.addEventListener('click', openEmailDialog);
emailClose.addEventListener('click', closeEmailDialog);
emailOverlay.addEventListener('click', closeEmailDialog);
emailDialog.addEventListener('click', event => event.stopPropagation());
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !emailOverlay.hidden) closeEmailDialog();
});

document.querySelector('.copyEmail').addEventListener('click', async event => {
  await navigator.clipboard.writeText('solucoes@vibedupla.com.br');
  const button = event.currentTarget;
  const original = button.innerHTML;
  button.textContent = 'Endereço copiado ✓';
  setTimeout(() => { button.innerHTML = original; }, 1600);
});

const userSetTime = prompt('Zadejte požadovaný čas (v sekundách):');
const ms = userSetTime * 1000;
const ring = () => {
  document.querySelector('.alarm').classList.add('alarm--ring');
  const audio = document.querySelector('audio');
  audio.play();
};
setTimeout(ring, ms);

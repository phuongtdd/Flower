
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('playMusic').play();
    document.removeEventListener('click', musicPlay);
}

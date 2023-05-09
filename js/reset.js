const resetButton = document.createElement('button');
resetButton.textContent = 'RESET';
resetButton.classList.add('app__btn', 'btn__back', 'btn__center');
resetButton.addEventListener('click', () => {
  localStorage.clear();
  window.location.reload();
});
document.querySelector('.app__body-bottom').appendChild(resetButton);
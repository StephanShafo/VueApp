const resetButton = document.createElement('button');
resetButton.textContent = 'reset';
resetButton.classList.add('app__btn', 'btn__back');
resetButton.addEventListener('click', () => {
  localStorage.clear();
  window.location.reload();
});
document.querySelector('.app__body-bottom').appendChild(resetButton);
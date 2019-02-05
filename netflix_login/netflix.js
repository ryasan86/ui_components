const textInputs = document.querySelectorAll('.text-input');

function toggleValidInput(e) {
  const { length } = e.target.value;
  if (length < 4 || length > 60) {
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
  }
}

textInputs.forEach(input => {
  input.addEventListener('keyup', toggleValidInput);
});

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (value) {
      display.value += value;
    }
  });
});

clearButton.addEventListener('click', () => {
  display.value = '';
});

equalsButton.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
});

// 🔑 Keyboard Support
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if ((/\d|\+|\-|\*|\/|\./).test(key)) {
    display.value += key;
  } else if (key === 'Enter') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape') {
    display.value = '';
  }
});

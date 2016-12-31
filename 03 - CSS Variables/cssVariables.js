 // this is selecting all the input elements and controls atributes in the HTML document
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  //
  const suffix = this.dataset.sizing || '';

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  console.log(suffix);
}

// this updates the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// this updates the inputs as the mouse moves
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

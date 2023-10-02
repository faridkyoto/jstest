let buttonElementOne = document.getElementById('button__one');
let colors = ['#00FA9A', '#8B0000', '#008B8B', '#B0E0E6', '#9400D3', '#F4A460', '#008080', '#C71585', '#808000', '#FF00FF']

buttonElementOne.addEventListener('click', function() {
  let randomIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomIndex];
  
  document.body.style.backgroundColor = randomColor;
});

let colorPicker = document.getElementById('colorPicker');
let buttonToggle = document.getElementById('button__two');

buttonToggle.addEventListener('click', function() {
  colorPicker.style.display = (colorPicker.style.display === 'none' || colorPicker.style.display === '') ? 'block' : 'none';
});

colorPicker.addEventListener('input', function() {
  document.body.style.backgroundColor = colorPicker.value;
});

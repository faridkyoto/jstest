var buttonElementOne = document.getElementById('button__one');
var colors = ['#00FA9A', '#8B0000', '#008B8B', '#B0E0E6', '#9400D3', '#F4A460', '#008080', '#C71585', '#808000', '#FF00FF']

buttonElementOne.addEventListener('click', function() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  var randomColor = colors[randomIndex];
  
  document.body.style.backgroundColor = randomColor;
});

var colorPicker = document.getElementById('colorPicker');
var buttonToggle = document.getElementById('button__two');

buttonToggle.addEventListener('click', function() {
  colorPicker.style.display = (colorPicker.style.display === 'none' || colorPicker.style.display === '') ? 'block' : 'none';
});

colorPicker.addEventListener('input', function() {
  document.body.style.backgroundColor = colorPicker.value;
});

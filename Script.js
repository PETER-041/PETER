const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');

// dropdownButton.addEventListener('click', () => {
//   dropdownMenu.classList.toggle('hidden');
// });

dropdownButton.addEventListener('click', () => {
  console.log('Button clicked!');
  dropdownMenu.classList.toggle('hidden');
});
document.querySelector('.navstop').addEventListener('click', function showNavMenu() {
  if (document.querySelector('.navstop-dropdown').style.width === '110px') {
    document.querySelector('.navstop-dropdown').style.width = '0';
  }
  else {
    document.querySelector('.navstop-dropdown').style.width = '110px';
  }
})

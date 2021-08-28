document.querySelector('.navstop').addEventListener('click', function showNavMenu() {
  if (document.querySelector('.navstop-dropdown').style.width === '110px') {
    document.querySelector('.navstop-dropdown').style.width = '0';
  }
  else {
    document.querySelector('.navstop-dropdown').style.width = '110px';
  }
})

const menuOptions = document.querySelector('.navstop-dropdown').querySelectorAll('.navstop-link')

for(i = 0; i < menuOptions.length; i++) {
  menuOptions[i].addEventListener('click',function() {
    document.querySelector('.current').classList.remove('current')
    this.classList.add('current')
  })
}
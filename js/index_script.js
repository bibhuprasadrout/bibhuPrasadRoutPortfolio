function showNavMenu() {
  if (document.querySelector('.navstop-dropdown').style.width == '110px'){
    document.querySelector('.navstop-dropdown').style.width = '0';
  }
  else {
  document.querySelector('.navstop-dropdown').style.width = '110px';
  }
}

function articleProperties() {
  if(document.querySelector('article').style.background === '#3182ce'){
    document.querySelector('article').style.color = '#fff';
  }
}
const target = document.getElementById('block-pageheaderblock').getElementsByClassName("key-under")[0];
const cookieButton = document.createElement('button');
cookieButton.setAttribute('class', 'btn btn-primary');
cookieButton.setAttribute('style', 'margin-bottom: 1rem;');
cookieButton.innerHTML = "Set cookie preferences";
cookieButton.onclick = function(){
  CookieControl.open();
  return false;
};
target.parentNode.insertBefore(cookieButton, target);

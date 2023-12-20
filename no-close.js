document.onvisibilitychange = function(e){
  window.open(window.location.href);
}
window.onbeforeunload = function(e){
  e.preventDefault();
}

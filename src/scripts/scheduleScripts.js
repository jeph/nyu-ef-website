function showEventInfo(id) {
  var x = document.getElementById(id);
  if (x.style.display) {
    x.style.display = ((x.style.display!='none') ? 'none' : 'block');
  } else {
    x.style.display = "block";
  }
}



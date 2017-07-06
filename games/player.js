var protocol;
if (location.protocol === 'file:') {
    protocol = "https:";
} else {
  protocol = location.protocol;
}
function showproject(id) {
  document.getElementById('player').src = protocol + "//scratch.mit.edu/projects/embed/" + id + "/?autostart=false";
}
function loaded(gameid) {
  showproject(gameid);
  var objDiv = document.getElementById("playerdiv");
  objDiv.scrollTop = 38;
}
function showgame() {
document.getElementById("gamewrapper").style.display = "block";
}

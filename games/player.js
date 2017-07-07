var protocol;
if (location.protocol === 'file:') {
    protocol = "https:";
} else {
    protocol = location.protocol;
}

function showgame(gameid) {
    document.getElementById("player").src = protocol + "//scratch.mit.edu/projects/embed/" + gameid + "/?autostart=false";
    document.getElementById("gamewrapper").style.display = "block";
    document.getElementById("playerdiv").scrollTop = 38;
}

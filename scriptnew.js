var currentChannel = ""

function viewChannel(channel){
  currentChannel = channel
	if(window.fullScreen == true){
		document.getElementById("channelView").innerHTML = "<iframe src=\"" + channel + "\" width=\"1280\" height=\"720\" title=\"Current Channel\"></iframe>";
	}else{
		document.getElementById("channelView").innerHTML = "<p>Media Player must be in Fullscreen!</p>"
	}
}

function openFullscreen(){
	var elem = document.getElementById("wrapper");
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) { /* Safari */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE11 */
		elem.msRequestFullscreen();
	}
}

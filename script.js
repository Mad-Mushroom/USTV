function loadChannels(){
	document.getElementById("channelsCanvas").innerHTML = "<h3>ABC:</h3><iframe src=\"https://maxsport.one/stream51.php\" width=\"1280\" height=\"720\" title=\"ABC\"></iframe><br><br><h3>CBS:</h3><iframe src=\"https://maxsport.one/stream52.php\" width=\"1280\" height=\"720\" title=\"CBS\"></iframe><br><br><h3>ESPN:</h3><iframe src=\"https://maxsport.one/stream44.php\" width=\"1280\" height=\"720\" title=\"ESPN\"></iframe><br><br><h3>FOX:</h3><iframe src=\"https://maxsport.one/stream54.php\" width=\"1280\" height=\"720\" title=\"FOX\"></iframe><br><br><h3>NBC:</h3><iframe src=\"https://maxsport.one/stream53.php\" width=\"1280\" height=\"720\" title=\"NBC\"></iframe><br>";
}

function viewChannel(channel){
	document.getElementById("channelView").innerHTML = "<iframe src=\"" + channel + "\" width=\"1280\" height=\"720\" title=\"Current Channel\"></iframe>";
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
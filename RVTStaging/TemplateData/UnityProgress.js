function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module)
    return;
	
  var length = 190 * Math.min(progress, 1);
	bar = document.getElementById("progressBar");
	if(bar)
		bar.style.width = length + "px";
		
  if (progress == 1)
    document.getElementById("loadingBox").style.display = "none";
}
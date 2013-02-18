// This function generates the view of the personal link pane
function helpGuyPane(){
	var hpContent ="<div class='label top-headings hg-header'>Help Guy</div>";
	 hpContent +="<input id='mic'  onwebkitspeechchange='transcribe(this.value)' x-webkit-speech>";
	$('#helpGuyMainDiv').append(hpContent);
}

function transcribe(words) {
	if(words.indexOf("English") !== -1 || words.indexOf("english") !== -1){
		genrateVideoElement('personalLinksMainDiv');
	}
    document.getElementById("speech").value = words;
    document.getElementById("mic").value = "";
    document.getElementById("speech").focus();
   
  }

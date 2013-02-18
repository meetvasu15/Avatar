
// This function generates the view of the personal link pane
function personalLinksPane(){
	var plContent ="<div class='label top-headings pl-header'>STEVE'S LINK</div>";
	$('#personalLinksMainDiv').append(plContent);
}

function personalLinksGenerator() { 
	var content="  <ul class='nav homeworkClassUl'>";
	content+="<li> <a href='http://www.facebook.com'>  Facebook</a></li>";
	content+="<li> <a href='http://www.twitter.com'>  Twitter</a></li>";
	content+="<li> <a href='http://www.google.com'>  Google</a></li>";
	content+="<li> <a href='http://www.orkut.com'>  Orkut</a></li>";
	content+="<li> <a href='http://www.youtube.com'>  Youtube</a></li>";
	content+="<li> <a href='http://www.youtube.com'> Recent Lectures</a></li>";
	content+= "</ul>"
		$('#personalLinksMainDiv').append(content);
		
}
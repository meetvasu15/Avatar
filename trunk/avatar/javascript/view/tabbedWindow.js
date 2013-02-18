//this function appends links to the todays class div
function showHomework() {
	todaysclasscontent = $('#todaysClassMainDiv').html();
	$('.todaysClassUl').remove();

	homeworkContent();
}
function todaysClass() {
	var content = "<h3 class='todaysClass-heading'><u>Wednesday's Class</u></h3>";
	content += "  <ul class='nav todaysClassUl'>";
	content += "<li><b>Science</b>: Evolution look at Darwin and his impact on genetics.<a href='#'> <i class='icon-play-circle'></i> </a><a href='#'> <i class='icon-headphones'></i> </a></li>";
	content += "<li><b>Social Science</b> - The mid east crisis: We will begin our discussion about history of the middle east in order to understand current events"
			+ ". Special event by UN official is available during class to discuss peace negotiation.<a href='#'> <i class='icon-globe'></i> </a>"
			+ "<a href='#'> <i class='icon-play-circle'></i> </a>"
			+ "<a href='#'> <i class='icon-headphones'></i> </a></li>";
	content += "<li><b>English</b>: Metaphor We may live by : An introduction to the use of metaphor in poetry and everyday conversation."
			+ "<a href='#'> <i class='icon-list-alt'></i> </a></li>";
	content += "<li><b>Math</b> - Perimeter and areas (contd. see web link). <a href='#'> <i class='icon-info-sign'></i> </a></li>";
	// content+="<li><b>Critical Thinking</b> - Logic and reasoning: An
	// introduction to basic logic.<a href='#'> <i class='icon-list-alt'></i>
	// </a></li>";
	content += "</ul>"
	$('#todaysClassMainDiv').append(content);

}
// Homework Pane

function homeworkContent() {
	var content = "  <ul class='nav homeworkPaneUl'>";
	content += "<li><b>Critical Thinking Exercise</b>: due tomorrow - see attached handout for assignment.<a href='#'> <i class='icon-tags'></i> </a></li>";
	content += "<li><b>Math Exercise</b>: Perimeter and area-  due friday - Problems 12-25, ,36, 28, 38, 39 .</li>";
	content += "<li><b>History</b>: Term paper - due May 23 - \"Causes of french revolution\".<a href='#'> <i class='icon-tags'></i> </a><a href='#'> <i class='icon-play-circle'></i> </a></li>";

	content += "</ul>"
	$('#todaysClassMainDiv').append(content);

}

function todaysClassContent(dateText) {
	// alert (dateText);
	dateText = dateText.replace("/", ",");
	dateText = dateText.replace("/", ",");

	var today = new Date(dateText);
	// alert (today);
	// change permutation array
	var firstVal = permutationArray[1];
	for (i = 1; i < 4; i++) {

		if (i != 3)
			permutationArray[i] = permutationArray[i + 1];
		else
			permutationArray[3] = firstVal;

		// alert("permutationArray[i] i="+i+" val"+ permutationArray[i]);
	}
	var content = "<h5 class='homework-heading'><u>";
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	content += weekday[today.getDay()];
	content += "'s Homework</u></h5>";
	content += "  <ul class='nav homeworkPaneUl'>";
	var liArray = new Array(3);
	// liArray[5]="<li><b>Critical Thinking</b> - Logic and reasoning: An
	// introduction to basic logic.<a href='#'> <i class='icon-list-alt'></i>
	// </a></li>";
	liArray[1] = "<li><b>Math</b> - Perimeter and areas (contd. see web link). <a href='#'> <i class='icon-info-sign'></i> </a></li>";

	liArray[2] = "<li><b>Social Science</b> - The mid east crisis: We will begin our discussion about history of the middle east in order to understand current events"
			+ ". Special event by UN official is available during class to discuss peace negotiation.<a href='#'> <i class='icon-globe'></i> </a>"
			+ "<a href='#'> <i class='icon-play-circle'></i> </a>"
			+ "<a href='#'> <i class='icon-headphones'></i> </a></li>";
	liArray[3] = "<li><b>Science</b>: Evolution look at Darwin and his impact on genetics.<a href='#'> <i class='icon-play-circle'></i> </a><a href='#'> <i class='icon-headphones'></i> </a></li>";
	// liArray[4]="<li><b>English</b>: Metaphor We may live by : An introduction
	// to the use of metaphor in poetry and everyday conversation." +
	"<a href='#'> <i class='icon-list-alt'></i> </a></li>";
	for (i = 1; i < 4; i++) {
		content += liArray[permutationArray[i]];
	}
	content += "</ul>";
	$('.homework-heading').remove();
	$('.homeworkPaneUl').remove();
	$('#homeWorkMainDiv').append(content);
}

// This function generates the view of the Todays Class pane
function classTodayPane() {
	// var ctContent ="<div class='label top-headings ct-header'>ACTIVITIES
	// TODAY</div>";
	var ctContent = "<div class='navbar'>";
	ctContent += "<div class='navbar-inner'>";
	ctContent += "<a class='brand' href='#'>Avatar</a>";
	ctContent += "<ul class='nav'>";
	ctContent += "<li class='active' onclick='showTodayAct()'><a href='#'>Activities</a></li>";
	ctContent += "<li><a href='#' onclick='showHomework()'>Homework</a></li>";
	ctContent += "<li><a href='#'>Link</a></li>";
	ctContent += " </ul>";
	ctContent += " </div>";
	ctContent += "</div>";
	$('#todaysClassMainDiv').append(ctContent);
}

// This function generates the view of the Home work pane
function homeWorkPane() {
	var hwContent = "<div class='label top-headings hw-header'>HOME WORK</div>";
	$('#homeWorkMainDiv').append(hwContent);
}

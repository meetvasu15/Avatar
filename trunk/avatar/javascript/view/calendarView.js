// This function generates the view of the calendar pane
function calendarPane(){
	var clContent ="<div class='label top-headings cl-header'>CALENDAR</div>";
	clContent+="<div id='calendar'></div>"
	$('#calendarMainDiv').append(clContent);
	generateCalendar();
}

function generateCalendar(){
 $('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        onSelect: function(dateText, inst) { 
        	//$('#myModal').modal('show');
        	todaysClassContent(dateText);
	    }
    });
 
}
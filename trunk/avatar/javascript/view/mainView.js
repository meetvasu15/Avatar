//This function is called on body load. This calls all the functions necessary to generate the first view that a user should see.
//Author: Vasu Gupta
function init(){
	loadBasics();
	//trial();
	personalLinksPane();
	helpGuyPane();
	calendarPane();
	messengerPane();
	classTodayPane();
	homeWorkPane();
	todaysClass();
	homeworkContent();
	//goFullScreen();
	personalLinksGenerator();
	initiateGlobals();
	
}
var permutationArray;
function initiateGlobals(){
var todaysclasscontent;
var homeworkContent;
permutationArray = new Array(5);
for(i=1; i<6; i++)
permutationArray[i]=i;
} 

/*function toggleShow(){
 
$('#myModal').modal('show');
}
function toggleHide(){
$('#myModal').modal('hide');
}
function goFullScreen() {
  if(!window.location.hash)
  {
      if(document.height < window.outerHeight)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px';
      }

      setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
  }
}*/

//window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
//window.addEventListener("orientationchange", hideAddressBar );

//This function generates basic div elements for all our six major panes.
function loadBasics(){ 
	 
		var content="<div class='navbar'>";
			content+=" <div class='navbar-inner header-navBar'>";
			content+="  <div class='leftHeader'> <span class='left-header-span'>Steven's Personal Learning center</span></div>";
		content+="  <div class='rightHeader'> <span class='right-header-span'>Tuesday, October 09, 2012</span></div>"; 
			content+=" </div>";
			content+=" </div>";
			content+="<div class='hero-unit all-components'>";
			content	+="<div class='container-fluid super-container'>";
			content	+=" <div class='row-fluid row-container left-row'>";
			content	+="  <div class='component-container' id='personalLinksMainDiv'>"; 
			content	+=" </div>";
			content	+="  <div class='component-container calendarPaneClass' id='calendarMainDiv' >";
			content	+=" </div>"; 
		
			content	+="</div>";
			 content	+="<div class='span6 component-container todaysClassMainDiv' id='todaysClassMainDiv' >"; 
			 content	+="</div>";
			content	+=" <div class='row-fluid row-container right-row'>";
				content	+="<div class='component-container' id='messengerMainDiv'>";
			content	+="</div>";
			
			content	+="<div class='component-container helpGuyMainDivClass' id='helpGuyMainDiv' >";
			content	+="</div>";
			content	+="</div>";
			content	+="</div>";
			content	+="</div>"; 
			$('.header').append(content);
}



// not needed now, still let it be there: Vasu
function genrateVideoElement( divToAttach){
	//if($('#vidsource').size())
	var dimension = getDimensionOfDiv('#'+divToAttach);
	var subDimension = getDimensionOfDiv(".pl-header");
	//alert(subDimension[1]);
	 var content="<video width='"+dimension[1]+"' height='"+(dimension[0]-subDimension[0])+"' controls='controls' class='videoClass' id='videoId' autoplay='autoplay'>";
	 content+=" <source id='vidsource' src='/avatar/videos/englishlecture.mp4' type='video/mp4'>";
	 content+="<source id='vidsource1' src='/avatar/videos/englishlecture.ogg' type='video/ogg'>";
	 content+="Your browser does not support the video tag.";
	 content+="</video>"
		
		 $('#'+divToAttach).append(content);
		  //}else{
		 // $('#vidsource').attr(src, '/avatar/videos/englishlecture.mp4');
		 //$('#vidsource1').attr(src, '/avatar/videos/englishlecture.mp4');
		// }
}



// This function generates the view of the Messenger pane
function messengerPane(){
	var imContent ="<div class='label top-headings im-header'>INSTANT MESSENGER</div>";
	$('#messengerMainDiv').append(imContent);
}




jQuery(document).ready(function(){
	
 //do nothing

	
	  
});	

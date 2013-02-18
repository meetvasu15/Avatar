<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<!-- Author: Vasu Gupta -->
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Avatar</title>
<link rel="stylesheet" type="text/css" href="/avatar/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="/avatar/css/common.css">
<link rel="stylesheet" type="text/css" href="/avatar/css/calendar.css">
</head>
<body onload="init();" id="bodyFull">
<div id="fb-root"></div>

<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=avatar";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<div class="header">
</div>
<div class="content"><!-- <a href="#myModal" role="button" class="btn" data-toggle="modal">Launch demo modal</a> -->
 
<!-- Modal -->
<!-- <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel">TO DO</h3>
  </div>
  <div class="modal-body">
    <p>Here goes all the stuff that would be returned by the service..... You would also be able to edit some of this text</p>
  </div>
  <div class="modal-footer">
    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
    <button class="btn btn-primary">Save changes</button>
  </div>
</div> --></div>
<div class="footer"></div>
<script type="text/javascript" src="/avatar/javascript/jquery_1.8.js"></script>

<script type="text/javascript" src="/avatar/javascript/bootstrap.js"></script>
<script type="text/javascript" src="/avatar/javascript/jquery-ui-1.8.24.custom.min.js"></script>

<script type="text/javascript" src="/avatar/javascript/view/mainView.js"></script>
<script type="text/javascript" src="/avatar/javascript/view/personalLinksView.js"></script>
<script type="text/javascript" src="/avatar/javascript/view/calendarView.js"></script>
<script type="text/javascript" src="/avatar/javascript/view/util.js"></script>
<script type="text/javascript" src="/avatar/javascript/view/helpGuy.js"></script>
<script type="text/javascript" src="/avatar/javascript/view/tabbedWindow.js"></script>
</body>
</html>
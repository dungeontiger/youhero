<?php
	session_start(); 
?><html>
	<head>
		<title>YouHero</title>
		<link rel="stylesheet" type="text/css" href="youhero.css"/>
		<script src="js/main.js"></script>
		<script src="js/rotateImage.js"></script>
	</head>
	<body onload="runPage()">
		<?php include("header.php"); ?>
		
		<!-- There will always be just one form named 'theForm' -->
		<form name="theForm" id="theForm" method="post">
<?php
	// a hidden variable named 'action' will be set on each page to identify the user wants to do 
	// a session variable named 'user' will contain the user id of a user if they are authenticated
	$action = isset($_REQUEST["action"]) ? $_REQUEST["action"] : null;
	$user = isset($_SESSION["user"]) ? $_SESSION["user"] : null;
	
	switch ($action)
	{
		case "mainPage":
			// show the main menu page
			break;
		case "doSignin":
			// attempt to authenticate the user
			break;
		case "loginPage":
		default:
			// display the login page
			include("loginPage.php");
	}
?>
		</form>
		<?php include("footer.php"); ?>
	</body>
</html>

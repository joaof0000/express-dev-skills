<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h1>Create New Students</h1>

	<!-- // action needs to match a endpoint(route) on your server
	// It is where the form is submitting to -->

	<!-- The method is the type of http request -->
	<form action="/students" method="POST">
		<input type="text" name="students" placeholder="students">
		<button type="submit">Create Students</button>
	</form>
	
</body>
</html>
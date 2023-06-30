<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Students</title>
</head>
<body>
	<h1>Show Page</h1>
	
	<h3><%= students.students %></h3>
	<h3>Complete: <%= students.done ? 'Yes' : 'No' %></h3>
    
	<a href="/students/<%= students.id %>/edit">Edit Students</a>
</body>
</html>
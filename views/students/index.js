<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Express Students</title>
</head>
<body>
	<h1>Students</h1>
    <!-- // this is how the client makes an http get request to the server, for a new students form -->
    <a href="/students/new">New Students</a> 

    <ul>
      <% students.forEach(function(t) { %>
        <li>
          
          <a href="/students/<%= t.id %>"> <%= t.students %> </a>
            - 
          <%= t.done ? 'done' : 'not done' %>

          <form method="" action="">
            <button type="submit">X</button>
          </form>
        </li>
      <% }); %>
    </ul>
	
</body>
</html>
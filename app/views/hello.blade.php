<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Backbone and Laravel</title>
	<style>
		@import url(//fonts.googleapis.com/css?family=Lato:700);

		body {
			margin:0;
			font-family:'Lato', sans-serif;
			text-align:left;
			color: #999;
		}

		.welcome {
			width: 300px;
			height: 200px;
			position: absolute;
			left: 0%;
			top: 0%;
			margin-left: 50px;
			margin-top: 30px;
		}

		a, a:visited {
			text-decoration:none;
		}

		h1 {
			font-size: 32px;
			margin: 16px 0 0 0;
		}
	</style>
</head>
<body>
	<div class="welcome">
		<h1>You have arrived</h1>
	</div>

	{{ HTML::script('bower_components/underscore/underscore.js') }}
	{{ HTML::script('bower_components/jquery/dist/jquery.js') }}
	{{ HTML::script('bower_components/backbone/backbone.js') }}

	{{ HTML::script('assets/scripts/task.js') }}
</body>
</html>
$(document).ready(function() 
{
	
	$("#btnRun").click(function()
	{
		$.getJSON('http://abit-mobile.narfu.ru/service/programForms', function(json, textStatus) 
		{
			for (var i = 0; i < json.length; i++) 
			{
				$("#outputdiv").append(json[i].title + "<br>");
			}
		});
	});
});
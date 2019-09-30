var random_number;
var lost=0;
var win=0;
var previous=0;

//$(".crystal").attr('class', 'red');

var ResetGame = function(){
	
	var images=[
	'assets/images/gemstone1.jpg',
	'assets/images/gemstone2.jpg',
	'assets/images/gemstone3.jpg',
	'assets/images/gemstone4.jpg'
	];
	$(".crystals").empty();
	random_number=Math.floor(Math.random()*99)+30;
	//console.log(random_number);

	$("#result").html(''+random_number);
	for (var i=0; i<4; i++)
	{
		var random=Math.floor(Math.random()*11)+1;
		
		//console.log(random);
		var crystal=$("<div>");
		crystal.attr({
			"class": 'crystal',
			"data-random":random
		});
		
		crystal.css({
			"background-image": "url('" + images[i] + "')"
		});
		
		//crystal.html(random);
		$(".crystals").append(crystal);
	}
}

ResetGame();

//var reset=function(){
	
//}

$(document).on('click', ".crystal", function(){
	
	var num = parseInt($(this).attr('data-random'));
	//var result = num+5;
	previous += num;
	
	$("#previous").html(previous);
	console.log(previous);
	
	
	if(previous > random_number)
	{
		//console.log("You lost");
		lost++;
		$("#lost").html(lost);
		
		previous=0;
		$("#previous").html(previous);
		ResetGame();
	}
	
	else if(previous === random_number)
	{
		//console.log("You win");
		win++;
		$("#win").html(win);
		$("#previous").html(previous);
		previous=0;
		ResetGame();
	}
	
});
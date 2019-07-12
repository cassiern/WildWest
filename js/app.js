


//Instructions Modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

//timer
const progress = document.getElementById('progress')
let timer;

function time(){
	timer = setInterval(function(){
		progress.value -= 1;
		checkVitals()
}, 1000);
}



//onclick start button:
$('#start').click(function(){
	$('#progress').css('display', 'block');
	$('#firstCowboy').css('display', 'block');
	$('#town').css('display', 'block');
	$('.btn').css('display', 'none');
	$('#start').css('display', 'none');
	$('.questions').css('display', 'block');
	$('.welcome').css('display', 'none');
	time();
})

	


//Question One:
	//correct answer Path
$('#thomas').on('click', function(){
	animateLeft();
	alert('Correct! You have survived this challenge.');
	progress.value += 1;
	$('#qOne').css('display','none');
	$('#qTwo').css('display','block');
})

//Question Two:
	//correct path
$('#thoroHorse').on('click', function(){
	alert('Correct! You have survived this challenge.');
	$('#firstCowboy').attr('src', "https://thumbs.gfycat.com/CaringAppropriateIndianpangolin-small.gif");
    animateLeft();
	$('#qTwo').css('display','none');
	$('#qThree').css('display','block');
	progress.value += 1;
})

$('#appaHorse').on('click', function(){
	alert('Sorry, wrong answer. The Thoroughbred is the fastest horse breed.');
	progress.value -= 1;
	animateRight();
	$('#qTwo').css('display','none');
	$('#qAlt1').css('display','block');
})

$('#shetland').on('click', function(){
	alert('Sorry, wrong answer. The Thoroughbred is the fastest horse breed.');
	progress.value -= 1;
	animateRight()
	$('#qTwo').css('display','none');
	$('#qAlt1').css('display','block');
})
//Question Three, right path:
$('#goldRushYear').on('click', function(){
	alert('Correct! You have survived this challenge.');
	animateLeft();
	$('#qThree').css('display','none');
	$('#qFour').css('display','block');
	progress.value += 1;
})

$('#wrongYear').on('click', function(){
	alert('Sorry, wrong answer. The gold rush started in Januarry of 1848.');
	animateRight()
	progress.value -= 1;
	$('#qThree').css('display','none');
	$('#qAlt2').css('display','block');
})

$('#wrongEra').on('click', function(){
	alert('Sorry, wrong answer. The gold rush started in Januarry of 1848.');
	animateRight();
	progress.value -= 1;
	$('#qThree').css('display','none');
	$('#qAlt2').css('display','block');
})

//Question four, right path
	//berries or hunt
$('#berries').on('click', function(){
	$('#qThree').css('display','none');
	$('#qFour').css('display', 'none')
	$('#qAlt4').css('display','block');
})

$('#hunt').on('click', function(){
	alert('Good choice, I was feeling more than just berries.')
	$('#qThree').css('display','none');
	$('#qFour').css('display', 'none')
	$('#qFive').css('display','block');
})

		//animal hunting question
$('#rightNoose').click(function(){
	alert('Correct! You caught a rabbit! Time to eat.')
	$('#qFive').css('display', 'none')
	$('#finalQ').css('display', 'block')

})

$('#smallNoose').click(function(){
	alert('Oh no! Butch died due to starvation.')
	gameOver();
})

$('#bigNoose').click(function(){
	alert('Oh no! Butch died due to starvation.');
	gameOver();
})



	//wrong answer, path 2
		//president question
$('#adams').on('click', function(){
	alert('Sorry, wrong answer. Thomas Jefferson was the third president.');
	progress.value -= 1;
	animateRight();
	$('#qOne').css('display','none');
	$('#qAlt1').css('display','block');
})

$('#grant').on('click', function(){
	alert('Sorry, wrong answer. Thomas Jefferson was the third president.');
	progress.value -= 1;
	animateRight();
	$('#qOne').css('display','none');
	$('#qAlt1').css('display','block');
})

			//stay or walk question
$('#stay').click(function(){	
	alert('Sorry, game over. Not too many travelers out here.');
	gameOver()
})

$('#walk').click(function(){
	animateLeft();
	$('#qAlt1').css('display', 'none')
	$('#qAlt2').css('display', 'block');
	progress.value += 1;
})

		//walking N S E W question
$('.button.wrong').click(function(){
	progress.value -= 1;
	animateRight()
	alert('Oh no! Second wrong answer. Hopefully this next question is easier because I am getting cold.');
	$('#qAlt2').css('display', 'none')
	$('#qAlt4').css('display', 'none')
	$('#qAlt3').css('display', 'block');
})

$('#south').click(function(){
	alert('Correct!')
	animateLeft();
	$('#qAlt2').css('display', 'none');
	$('#qFour').css('display', 'block');
	progress.value += 1;
})

	// berries question
$('#rasp').click(function(){
	alert('Sorry, Butch died from a weak stomach!')
	gameOver()
})

$('#gold').click(function(){
	alert('Sorry, Butch died from a weak stomach!')
	gameOver()
})

$('#elderberries').click(function(){
	alert('Correct!');
	animateLeft();
	$('#qAlt4').css('display', 'none')
	$('#qAlt5').css('display', 'block')	
	progress.value += 1;
})

		//building a fire
$('#dong').click(function(){
	alert('Yes! Now we have a fire to cook our rabbit.')
	animateLeft();
	$('#qAlt3').css('display', 'none')
	$('#qAlt5').css('display', 'block')
	progress.value += 1;
})

$('#chocolate').click(function(){
	alert('Sorry, Butch died from the cold!')
	gameOver()
})

$('#battery').click(function(){
	alert('Sorry, Butch died from the cold!')
	gameOver()
})

	//sleep question
$('#uncomfortable').click(function(){
	alert("Sorry, Butch died from hypothermia. Correct answer was to avoid loosing body heat.")
	gameOver()
})

$('#bugs').click(function(){
	alert("Sorry, Butch died from hypothermia. Correct answer was to avoid loosing body heat.")
	gameOver()
})

$('#bodyHeat').click(function(){
	alert('Correct! Sleeping on the ground can cause hypothermia.')
	animateLeft();
	$('#qAlt5').css('display', 'none')
	$('#finalQ').css('display', 'block')
	progress.value += 1;
})

	//gun question
$('#colt').click(function(){
	alert(`Congrats you made it with ${progress.value} seconds left!`)
	animateLeft();
	clearInterval(timer);
	$('.bodyTwo').css('display', 'none')
	$('.finalBang').css('display', 'block')
});

$('#rifle').click(function(){
	alert("Oh nooo... they closed their doors. Looks like we'll have to keep walking...")
	$('#finalQ').css('display', 'none')
	$('#firstBackdrop').css('display', 'none');
	$('#qOne').css('display', 'block')
})

$('#pistol').click(function(){
	alert("Oh nooo... they closed their doors. Looks like we'll have to keep walking...")
	$('#finalQ').css('display', 'none')
	$('#qOne').css('display', 'block')
})

//exit game button
$('#exitGame').on('click', function(){
	 window.location.reload()
})
//play again button
$('#playAgain').on('click', function(){
	window.location.reload()
})



//animating img left, when player gets an answer right
function animateLeft(){
	$("#firstCowboy" ).animate({ "left": "-=74px" }, "fast" );
}

//animating img right, when player gets an answer wrong
function animateRight(){
	$( "#firstCowboy" ).animate({ "left": "+=36.67px" }, "fast" );
}


//cheching if timer is out
function checkVitals(){
	console.log(`checkVitals function ran vitals are ${progress.value}`);
	if(progress.value === 0){
		alert('Oh no Butch was out in the boonies for too long! Try again!')
		gameOver()
	} 
}

// ends/reloads game
function gameOver(){
	window.location.reload();
	progress.value = 0;
	clearInterval(timer)
}















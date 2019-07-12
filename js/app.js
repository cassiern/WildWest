


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
	$('#qOne').css('display','none');
	$('#qTwo').css('display','block');
})

//Question Two:
	//correct path
$('#thoroHorse').on('click', function(){
	$('#firstCowboy').attr('src', "https://thumbs.gfycat.com/CaringAppropriateIndianpangolin-small.gif");
    animateLeft();
	$('#qTwo').css('display','none');
	$('#qThree').css('display','block');
})

$('.button.btn-outline-secondary.slowHorse').on('click', function(){
	animateRight();
	$('#qTwo').css('display','none');
	$('#qAlt1').css('display','block');
})

//Question Three, right path:
$('#goldRushYear').on('click', function(){
	animateLeft();
	$('#qThree').css('display','none');
	$('#qFour').css('display','block');
})


$('.button.btn-outline-secondary.wrongYear').on('click', function(){
	animateRight();
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

		//Question Five, animal hunting, right path 
$('#rightNoose').click(function(){
	alert('Correct! You caught a rabbit! Time to eat.')
	$('#qFive').css('display', 'none')
	$('#finalQ').css('display', 'block')
})

$('.button.btn-outline-secondary.wrongNoose').click(function(){
	alert('Oh no! Butch died due to starvation.')
	gameOver();
})


	//wrong answer, path 2
		//president question
$('.button.btn-outline-secondary.wrongPres').on('click', function(){
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
})

		//walking N S E W question
$('.button.wrong').click(function(){
	animateRight()
	$('#qAlt2').css('display', 'none')
	$('#qAlt4').css('display', 'none')
	$('#qAlt3').css('display', 'block');
})

$('#south').click(function(){
	animateLeft();
	$('#qAlt2').css('display', 'none');
	$('#qFour').css('display', 'block');
})

	// berries question
$('.button.btn-outline-secondary.badBerries').click(function(){
	alert('Sorry, Butch died from a weak stomach!')
	gameOver()
})

$('#elderberries').click(function(){
	animateLeft();
	$('#qAlt4').css('display', 'none')
	$('#qAlt5').css('display', 'block')	
})

		//building a fire
$('#dong').click(function(){
	animateLeft();
	$('#qAlt3').css('display', 'none')
	$('#qAlt5').css('display', 'block')
})

$('.button.btn-outline-secondary.noFire').click(function(){
	alert('Sorry, Butch died from the cold!')
	gameOver()
})

	//sleep question
$('.button.btn-outline-secondary.wrongOne').click(function(){
	alert("Sorry, Butch died from hypothermia. Correct answer was to avoid loosing body heat.")
	gameOver()
})

$('#bodyHeat').click(function(){
	animateLeft();
	$('#qAlt5').css('display', 'none')
	$('#finalQ').css('display', 'block')
})

	//gun question
$('#colt').click(function(){
	alert(`Congrats you made it with ${progress.value} seconds left!`)
	animateLeft();
	clearInterval(timer);
	$('.bodyTwo').css('display', 'none')
	$('.finalBang').css('display', 'block')
});

$('.button.btn-outline-secondary.newGun').click(function(){
	animateRight();
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



//answer question correctly, go left, add a second, and alert
function animateLeft(){
	alert('Correct!')
	$("#firstCowboy" ).animate({ "left": "-=74px" }, "fast" );
	progress.value += 1;
}

//answer question incorrectly, go right, subtract a second, and alert
function animateRight(){
	alert('Oh no! Wrong answer. Try again!')
	$( "#firstCowboy" ).animate({ "left": "+=36.67px" }, "fast" );
	progress.value -= 1;
}


//checking if timer is out
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















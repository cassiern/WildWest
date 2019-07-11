


//Instructions Modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})




const progress = document.getElementById('progress')
let timer;
function time(){
	timer = setInterval(function(){
		progress.value -= 1;
		checkVitals()
}, 1000);
}






$('#start').click(function(){
	$('#progress').css('display', 'block')
	$('.btn').css('display', 'none')
	$('#start').css('display', 'none')
	$('.questions').css('display', 'block')
	$('h1').css('display', 'none')
	time()
})




//Question One:
	//correct answer Path
$('#thomas').on('click', function(){
	console.log('thomas has been clicked')
	alert('Correct! You have survived this challenge.');
	$('#qOne').css('display','none');
	$('#qTwo').css('display','block');
	progress.value += 1;
})
$()

//Question Two:
	//correct path
$('#thoroHorse').on('click', function(){
	console.log('thoroughbred has been clicked')
	alert('Correct! You have survived this challenge.');
	$('#qTwo').css('display','none');
	$('#qThree').css('display','block');
	progress.value += 1;
})

$('#appaHorse').on('click', function(){
	console.log('appaloosa was clicked')
	alert('Sorry, wrong answer. The Thoroughbred is the fastest horse breed.');
	progress.value -= 1;
	$('#qTwo').css('display','none');
	$('#qAlt1').css('display','block');
})
$('#shetland').on('click', function(){
	console.log('shetland was clicked')
	alert('Sorry, wrong answer. The Thoroughbred is the fastest horse breed.');
	progress.value -= 1;
	$('#qTwo').css('display','none');
	$('#qAlt1').css('display','block');
})
//Question Three, right path:
$('#goldRushYear').on('click', function(){
	console.log('The gold rush year has been clicked')
	alert('Correct! You have survived this challenge.');
	$('#qThree').css('display','none');
	$('#qFour').css('display','block');
	progress.value += 1;
})

$('#wrongYear').on('click', function(){
	console.log('incorrect year was clicked')
	alert('Sorry, wrong answer. The gold rush started in Januarry of 1848.');
	progress.value -= 2;
	$('#qThree').css('display','none');
	$('#qAlt2').css('display','block');
})
$('#wrongEra').on('click', function(){
	console.log('incorrect year was clicked')
	alert('Sorry, wrong answer. The gold rush started in Januarry of 1848.');
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
	$('#finale').css('display', 'block')
	progress.value += 1;
	alert(`Congrats you made it with ${progress.value} seconds left!`)
	clearInterval()

})
$('#smallNoose').click(function(){
	alert('Oh no! Butch died due to starvation.')
	gameOver()
})
$('#bigNoose').click(function(){
	alert('Oh no! Butch died due to starvation.')
	gameOver()
})



	//wrong answer, path 2
		//president question
	$('#adams').on('click', function(){
		console.log('adams was clicked')
		alert('Sorry, wrong answer. Thomas Jefferson was the third president.');
		progress.value -= 1;
		$('#qOne').css('display','none');
		$('#qAlt1').css('display','block');
	})
	$('#grant').on('click', function(){
		console.log('grant was clicked')
		alert('Sorry, wrong answer. Thomas Jefferson was the third president.');
		progress.value -= 1;
		$('#qOne').css('display','none');
		$('#qAlt1').css('display','block');
	})

			//stay or walk question
	$('#stay').click(function(){
		alert('Sorry, game over. Not too many travelers out here.');
		gameOver()
	})
	$('#walk').click(function(){
		$('#qAlt1').css('display', 'none')
		$('#qAlt2').css('display', 'block');
		progress.value += 1;
	})

		//walking N S E W question
	$('.button.wrong').click(function(){
		progress.value -= 2;
		alert('Oh no! Second wrong answer. Hopefully this next question is easier because I am getting cold.');
			$('#qAlt2').css('display', 'none')
			$('#qAlt4').css('display', 'none')
			$('#qAlt3').css('display', 'block');
	})
	$('#south').click(function(){
		alert('Correct!')
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
		$('#qAlt4').css('display', 'none')
		$('#qAlt5').css('display', 'block')	
		progress.value += 1;
	})


		//building a fire
	$('#dong').click(function(){
		alert('Yes! Now we have a fire to cook our rabbit.')
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
		$('#qAlt5').css('display', 'none')
		$('#finalQ').css('display', 'block')
		progress.value += 1;
	})

	//gun question
	$('#colt').click(function(){
		$('#finalQ').css('display', 'none')
		$('#finale').css('display', 'block')
		progress.value += 1;
		clearInterval()
	})
	$('#rifle').click(function(){
		alert("Oh nooo... they closed their doors. Looks like we'll have to keep walking...")
		$('#qAlt6').css('display', 'none')
		$('#qOne').css('display', 'block')
	})
	$('#pistol').click(function(){
		alert("Oh nooo... they closed their doors. Looks like we'll have to keep walking...")
		$('#finalQ').css('display', 'none')
		$('#qOne').css('display', 'block')
	})



function checkVitals(){

	if(progress.value === 0){
		alert('Oh no Butch was out in the boonies for too long! Try again!')
		gameOver();
	}
}



function gameOver(){
	window.location.reload();
	clearInterval()
}















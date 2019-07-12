


//Instructions Modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})




const progress = document.getElementById('progress')
let timer;

function time(){
	timer = setInterval(function(){
		progress.value -= 1;
}, 1000);
}




$('#start').click(function(){
	$('#progress').css('display', 'block')
	$('#firstCowboy').css('display', 'block')
	$('#town').css('display', 'block')
	$('.btn').css('display', 'none')
	$('#start').css('display', 'none')
	$('.questions').css('display', 'block')
	$('.welcome').css('display', 'none')
	time()
})




//Question One:
	//correct answer Path
$('#thomas').on('click', function(){
	console.log('thomas has been clicked');
	$("#firstCowboy" ).animate({ "left": "-=74px" }, "fast" );
	alert('Correct! You have survived this challenge.');
		 	progress.value += 1;
	$('#qOne').css('display','none');
	$('#qTwo').css('display','block');



})
$()

//Question Two:
	//correct path
$('#thoroHorse').on('click', function(){
	console.log('thoroughbred has been clicked')
	alert('Correct! You have survived this challenge.');
	$('#firstCowboy').attr('src', "https://thumbs.gfycat.com/CaringAppropriateIndianpangolin-small.gif");

    $("#firstCowboy" ).animate({ "left": "-=74px" }, "fast" );
	$('#qTwo').css('display','none');
	$('#qThree').css('display','block');
	progress.value += 1;
})

$('#appaHorse').on('click', function(){
	console.log('appaloosa was clicked')
	alert('Sorry, wrong answer. The Thoroughbred is the fastest horse breed.');
	progress.value -= 1;
	$( "#firstCowboy" ).animate({ "left": " +=36.67px" }, "fast" );
	$('#qTwo').css('display','none');
	$('#qAlt1').css('display','block');
})
$('#shetland').on('click', function(){
	console.log('shetland was clicked')
	alert('Sorry, wrong answer. The Thoroughbred is the fastest horse breed.');
	progress.value -= 1;
		$( "#firstCowboy" ).animate({ "left": "+= 36.67px" }, "fast" );
	$('#qTwo').css('display','none');
	$('#qAlt1').css('display','block');
})
//Question Three, right path:
$('#goldRushYear').on('click', function(){
	console.log('The gold rush year has been clicked')
	alert('Correct! You have survived this challenge.');
	$("#firstCowboy" ).animate({ "left": "-=74px" }, "fast" );
	$('#qThree').css('display','none');
	$('#qFour').css('display','block');
	progress.value += 1;
})

$('#wrongYear').on('click', function(){
	console.log('incorrect year was clicked')
	alert('Sorry, wrong answer. The gold rush started in Januarry of 1848.');
		$( "#firstCowboy" ).animate({ "left": "+=37px" }, "fast" );
	progress.value -= 2;
	$('#qThree').css('display','none');
	$('#qAlt2').css('display','block');
})
$('#wrongEra').on('click', function(){
	console.log('incorrect year was clicked')
	alert('Sorry, wrong answer. The gold rush started in Januarry of 1848.');
	progress.value -= 1;
		$( "#firstCowboy" ).animate({ "left": "+=36.67px" }, "fast" );
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
	alert('Oh no! Butch died due to starvation.')

	gameOver();
})



	//wrong answer, path 2
		//president question
	$('#adams').on('click', function(){
		console.log('adams was clicked')
		alert('Sorry, wrong answer. Thomas Jefferson was the third president.');
		progress.value -= 1;
			$( "#firstCowboy" ).animate({ "left": "+=36.67px" }, "fast" );
		$('#qOne').css('display','none');
		$('#qAlt1').css('display','block');

	})
	$('#grant').on('click', function(){
		console.log('grant was clicked')
		alert('Sorry, wrong answer. Thomas Jefferson was the third president.');
		progress.value -= 1;
			$( "#firstCowboy" ).animate({ "left": "+=36.67px" }, "fast" );
		$('#qOne').css('display','none');
		$('#qAlt1').css('display','block');
	})

			//stay or walk question
	$('#stay').click(function(){
		
		alert('Sorry, game over. Not too many travelers out here.');
		gameOver()
	})
	$('#walk').click(function(){
		$("#firstCowboy" ).animate({ "left": "-=74px" }, "fast" );
		$('#qAlt1').css('display', 'none')
		$('#qAlt2').css('display', 'block');
		progress.value += 1;
	})

		//walking N S E W question
	$('.button.wrong').click(function(){
		progress.value -= 2;
			$( "#firstCowboy" ).animate({ "left": "+=36.67px" }, "fast" );
		alert('Oh no! Second wrong answer. Hopefully this next question is easier because I am getting cold.');
			$('#qAlt2').css('display', 'none')
			$('#qAlt4').css('display', 'none')
			$('#qAlt3').css('display', 'block');
	})
	$('#south').click(function(){
		alert('Correct!')
		$("#firstCowboy" ).animate({ "left": "-=74px" }, "fast" );
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
		$("#firstCowboy" ).animate({ "left": "-=74px" }, "fast" );
		$('#qAlt4').css('display', 'none')
		$('#qAlt5').css('display', 'block')	
		progress.value += 1;
	})


		//building a fire
	$('#dong').click(function(){
		alert('Yes! Now we have a fire to cook our rabbit.')
		$("#firstCowboy" ).animate({ "left": "-=74px" }, "fast" );
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
		$("#firstCowboy" ).animate({ "left": "-=74px" }, "fast" );
		$('#qAlt5').css('display', 'none')
		$('#finalQ').css('display', 'block')
		progress.value += 1;
	})

	//gun question
	$('#colt').click(function(){
		$("#firstCowboy" ).animate({ "left": "-=74px" }, "fast" );
		progress.value += 1;
		clearInterval(timer)
		$('#firstCowboy').attr('src', 'data:image/jpeg;base64,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')
		alert(`Congrats you made it with ${progress.value} seconds left!`)
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
	console.log('exit is clicked')
	 window.location.reload()
})
$('#playAgain').on('click', function(){
	window.location.reload()
})







function checkVitals(){
	if(progress.value === 0){
		alert('Oh no Butch was out in the boonies for too long! Try again!')
		gameOver()
	} 
}




function gameOver(){
	//$('#firstCowboy').attr('src', "https://previews.123rf.com/images/antonbrand/antonbrand1407/antonbrand140700021/30488782-cute-cartoon-zombie-cowboy-isolated-on-white.jpg")
	window.location.reload();
	progress.value = 0;
	clearInterval(timer)
}















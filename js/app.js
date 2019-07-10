


//Instructions Modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})



//Source for progress Bar || https://www.youtube.com/watch?v=QIvFUjsXlJI
function progress(){
	const prg = $('#progress');
	const percent = $('#percentCount');
	let counter = 0;
	const progress = 25;
	const id = setInterval(frame, 1000);

	function frame(){
		if(progress === 30000 && counter === 30000){
			clearInterval(id);
		}else {
			progress+= 5;
			counter+= 1;
			prg.style.width = progress + 'px';
			percent.innerHTML = counter + '%';
		}
	}
}
	

//let gameOn = true;

let seconds = 30;
let life = seconds;

$('#start').click(function(){
	//progress()
	$('#lifePercentBar').css('display', 'none')
	$('.btn').css('display', 'none')
	$('#start').css('display', 'none')
	$('.questions').css('display', 'block')
})




//Question One:
	//correct answer
$('#thomas').on('click', function(){
	console.log('thomas has been clicked')
	alert('Correct! You have survived this challenge.');
	$('#qOne').css('display','none');
	$('#qTwo').css('display','block');
})

	//wrong answer, path 2

	$('#adams').on('click', function(){
		console.log('adams was clicked')
		alert('Sorry, wrong answer. Thomas Jefferson was the third president.');
		life =- 1;
		$('#qOne').css('display','none');
		$('#qAlt1').css('display','block');
	})
	$('#grant').on('click', function(){
		console.log('grant was clicked')
		alert('Sorry, wrong answer. Thomas Jefferson was the third president.');
		life =- 1;
		$('#qOne').css('display','none');
		$('#qAlt1').css('display','block');
	})

	$('#stay').click(function(){
		alert('Sorry, game over. Not too many travelers out here.');
		//gameover()
	})
	$('#walk').click(function(){
		$('#qAlt1').css('display', 'none')
		$('#qAlt2').css('display', 'block');
	})
	$('.button.wrong').click(function(){
		life =-1;
		alert('Oh no! second wrong answer. Correct answer was South. Hopefully this next question is easier because I am getting hungry.');
			$('#qAlt2').css('display', 'none')
			$('#qAlt3').css('display', 'block');
	})







//Question Two:

$('#thoroHorse').on('click', function(){
	console.log('thoroughbred has been clicked')
	alert('Correct! You have survived this challenge.');
	$('#qTwo').css('display','none');
	$('#qThree').css('display','block');
})

$('#appaHorse').on('click', function(){
	console.log('appaloosa was clicked')
	alert('Sorry, wrong answer. The Thoroughbred is the fastest horse breed.');
	life =- 1;
})
$('#shetland').on('click', function(){
	console.log('shetland was clicked')
	alert('Sorry, wrong answer. The Thoroughbred is the fastest horse breed.');
	life =- 1;
})

//Question Three:
$('#goldRushYear').on('click', function(){
	console.log('The gold rush year has been clicked')
	alert('Correct! You have survived this challenge.');
	$('#qThree').css('display','none');
	$('#qFour').css('display','block');
})

$('#wrongYear').on('click', function(){
	console.log('incorrect year was clicked')
	alert('Sorry, wrong answer. The gold rush started in Januarry of 1848.');
	life =- 1;
})
$('#wrongEra').on('click', function(){
	console.log('incorrect year was clicked')
	alert('Sorry, wrong answer. The gold rush started in Januarry of 1848.');
	life =- 1;
})
















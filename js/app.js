$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

//let gameOn = true;


$('#start').click(function(){
	$('.btn').css('display', 'none')
	$('#start').css('display', 'none')
	$('.questions').css('display', 'block')
})



















//Question One:
$('#thomas').on('click', function(){
	console.log('thomas has been clicked')
	alert('Correct! You have survived this challenge.');
	$('#qOne').css('display','none');
	$('#qTwo').css('display','block');
})

$('#adams').on('click', function(){
	console.log('adams was clicked')
	alert('Sorry, wrong answer. Thomas Jefferson was the third president.');
	gameOn = false
})
$('#grant').on('click', function(){
	console.log('grant was clicked')
	alert('Sorry, wrong answer. Thomas Jefferson was the third president.');
	gameOn = false
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
	gameOn = false
})
$('#shetland').on('click', function(){
	console.log('shetland was clicked')
	alert('Sorry, wrong answer. The Thoroughbred is the fastest horse breed.');
	gameOn = false
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
	gameOn = false
})
$('#wrongEra').on('click', function(){
	console.log('incorrect year was clicked')
	alert('Sorry, wrong answer. The gold rush started in Januarry of 1848.');
	gameOn = false
})
















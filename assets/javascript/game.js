$(document).ready(function(){
	var random = Math.floor(Math.random()*101+9)

	$('#randomNum').text(random);

	var num1 = Math.floor(Math.random() *11 +1)
	var num2 = Math.floor(Math.random() *11 +1)
	var num3 = Math.floor(Math.random() *11 +1)
	var num4 = Math.floor(Math.random() *11 +1)

	var userTotal = 0;
	var wins = 0;
	var losses = 0;

$('#numWins').text(wins);
$('#numLosses').text(losses);

//Game Reset
function reset(){
	random = Math.floor(Math.random() *101 + 19);
	console.log(random)
	$('#randomNum').text(random);
	num1 = Math.floor(Math.random() *11 +1);
	num2 = Math.floor(Math.random() *11 +1);
	num3 = Math.floor(Math.random() *11 +1);
	num4 = Math.floor(Math.random() *11 +1);
	userTotal = 0;
	$('#finalTotal').text(userTotal);
	}
// adds to playerTotal score
	function score(){
	alert('You Won!');
		wins++;
		$('#numWins').text(wins);
		reset();
	}
// adds losses to playerTotal score
	function loser() {
	alert ('You Lose!');
		losses++
		$('#numLosses').text(losses);
		reset();
	}
// .onClick for jewels
	$('#one').on('click', function(){
		userTotal = userTotal + num1;
		console.log('new userTotal= ' + userTotal);
		$('#finalTotal').text(userTotal);

			if (userTotal == random){
				score();
			}
			else if (userTotal > random){
				loser();
			}
	})
	$('#two').on('click', function(){
		userTotal = userTotal + num2;
		console.log('new userTotal= ' + userTotal);
		$('#finalTotal').text(userTotal);

			if (userTotal == random){
				score();
			}
			else if (userTotal > random){
				loser();
			}
	})
	$('#three').on('click', function(){
		userTotal = userTotal + num3;
		console.log('new userTotal= ' + userTotal);
		$('#finalTotal').text(userTotal);

			if (userTotal == random){
				score();
			}
			else if (userTotal > random){
				loser();
			}
	})
	$('#four').on('click', function(){
		userTotal = userTotal + num4;
		console.log('new userTotal= ' + userTotal);
		$('#finalTotal').text(userTotal);

			if (userTotal == random){
				score();
			}
			else if (userTotal > random){
				loser();
			}
	});

});
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//setter
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// getter
//var x = document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click', function() {
    
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
		//Math.floor removes the decimal
		//Math.random() * 6 gives a number between 0 and 5	


        //2. Display the result
        var diceDOM = document.querySelector('.dice');	//as we need to reuse the element many times
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';	// images named as dice-1, dice-2 etc 


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
			activePlayer === 0? activePlayer = 1 : activePlayer = 0;
			roundScore = 0;
			
			document.getElementById('current-0').textContent = '0';
			document.getElementById('current-1').textContent = '0';
			
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			
			//document.querySelector('.player-0-panel').classList.remove('active');
			//document.querySelector('.player-1-panel').classList.add('active');
						
			document.querySelector('.dice').style.display = 'none';
			
        }
        
});


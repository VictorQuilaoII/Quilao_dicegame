function rollDice(){
    var diceValue = parseInt(Math.random()*6)+1;
    document.getElementById("diceface").innerHTML = diceValue;

    if(diceValue > 3){
        document.getElementById("diceMsg").innerHTML = "You rolled " + diceValue + ". You win!";
    }

    else{
        document.getElementById("diceMsg").innerHTML = "You rolled " + diceValue + ". You <span class='text-danger'> lose</span>!";
    }
}
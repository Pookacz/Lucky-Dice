
    
    let fpCounter = 0;
    let fpScore = 0;
    let spCounter = 0;
    let spScore = 0;
    let turn = 1;

function diceThrow(){
    let dice = Math.floor(Math.random() * 6 + 1);
    let diceIllustration = "<img src='svg/dice_" + dice + ".svg'/>";

    document.getElementById("diceSVG").innerHTML = diceIllustration;

    if(turn%2){
        document.getElementById("throwButton").innerHTML = "Rzuca Gracz 2";
        turn += 1;

        fpCounter += 1; //liczba rzutów gracza 1
        document.getElementById("fpCounter").innerHTML = fpCounter; 
    
        fpScore = fpScore + dice; //suma rzutów gracza 1
        document.getElementById("fpScore").innerHTML = fpScore; 

    } else{
        document.getElementById("throwButton").innerHTML = "Rzuca Gracz 1";
        turn += 1;

        spCounter += 1; //liczba rzutów gracza 1
        document.getElementById("spCounter").innerHTML = spCounter; 
    
        spScore = spScore + dice; //suma rzutów gracza 1
        document.getElementById("spScore").innerHTML = spScore; 
    }
// Zakończenie rozgrywki
    if(turn == 13 && fpScore > spScore){
        document.getElementById("container").innerHTML = null;
        document.getElementById("container").innerHTML = "<p id='endResult'>Wygrywa Gracz 1!</p> <p id='endResult'>Przewagą punktów: " + (fpScore - spScore) + "!</p>";
    } else if(turn == 13 && spScore > fpScore){
        document.getElementById("container").innerHTML = null;
        document.getElementById("container").innerHTML = "<p id='endResult'>Wygrywa Gracz 2!</p> <p id='endResult'>Przewagą punktów: " + (spScore - fpScore) + "!</p>";
    } else if(turn == 13 && fpScore == spScore){
        document.getElementById("container").innerHTML = null;
        document.getElementById("container").innerHTML = "<p id='endResult'>Remis!</p>" ;
    }
}





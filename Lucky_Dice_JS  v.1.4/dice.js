let container = document.querySelector("#container");
this.player1 = "Gracz 1";
this.player2 = "Gracz 2";

function addPlayers(){

    this.player1 = prompt("Podaj nazwę Gracza numer 1:"); //prompt o nazwe gracza 1
    this.player2 = prompt("Podaj nazwę Gracza numer 2:"); //prompt o nazwe gracza 2

    document.getElementById("fpName").innerHTML = this.player1; //zmiana nazwy gracza 1
    document.getElementById("spName").innerHTML = this.player2; //zmiana nazwy gracza 2

    document.getElementById("add").innerHTML = null; //usunięcie przycisku
}

//Ogólna liczba rzutów
let counter = 0;

//Pierwszy gracz
let fpCounter = 0, //liczba rzutów
    fpScore = 0; //liczba punktów
//Drugi gracz
let spCounter = 0, //liczba rzutów
    spScore = 0; //liczba punktów

function diceThrow(){
    document.getElementById("add").innerHTML = null; //usunięcie przycisku
    let dice = Math.floor(Math.random() * 6 + 1);
    let diceIllustration = "<img src='svg/dice_" + dice + ".svg'/>";

    document.getElementById("diceSVG").innerHTML = diceIllustration;
    document.getElementById("throwButton").innerText = "Rzuć ponownie!";
    
    if(counter%2 == 0 & fpCounter < 6){
        counter += 1;
        fpCounter += 1; //liczba rzutów gracza 1
        document.getElementById("fpCounter").innerText = fpCounter; 

        fpScore = fpScore + dice; //suma rzutów gracza 1
        document.getElementById("fpScore").innerText = fpScore; 

        document.getElementById("title").innerText = "Następny rzut: " + this.player2;
        
    } else if(spCounter < 6 ){
        
        counter += 1;
        spCounter += 1; //liczba rzutów gracza 1
        document.getElementById("spCounter").innerText = spCounter; 
    
        spScore = spScore + dice; //suma rzutów gracza 1
        document.getElementById("spScore").innerText = spScore; 

        if(spCounter<6){
            document.getElementById("title").innerText = "Następny rzut: " + this.player1;
        }else{
            document.getElementById("title").innerText = "Koniec";
            document.getElementById("throwButton").innerText = "Sprawdź wynik";
        }

    } else{
        
        document.getElementById("container").innerText = null;
        
        let result = document.createElement("p");
        result.classList.add("result");
        
        if(fpScore > spScore){
            result.innerText = "Wygrywa " + this.player1;
            console.log("Wygrywa " + this.player1);
        }else if(fpScore == spScore){
            result.innerText = "Remis";
            console.log("Remis");
        }else{
            result.innerText = "Wygrywa " + this.player2;
            console.log("Wygrywa " + this.player2);
        }

        document.querySelector("#container").appendChild(result);
        
    }
}

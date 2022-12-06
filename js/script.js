function playGame(playerInput){
debugger;    
    function clearMessages(){
        document.getElementById('messages').innerHTML = '';
    }
    
    function getMoveName(argMoveId){
        console.log('it is a getMoveName function. It is called with ', 'argMoveId is ', argMoveId)
        if(argMoveId == 1){
        return 'kamień';
        } else if(argMoveId == 2){
            return 'papier'; 
        } else if(argMoveId == 3){
            return 'nożyce'; 
        }
    
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let ComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + ComputerMove);

    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let PlayerMove = getMoveName(playerInput);

    console.log('PlayerMove variable is equal', PlayerMove);

    printMessage('Twój ruch to: ' + PlayerMove);

    function displayResult(argComputerMove, argPlayerMove){
        console.log('moves:', argComputerMove, argPlayerMove);
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Ty przegrywasz!');
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
            printMessage('Wystąpił błąd! Wybierz 1, 2 lub 3');
        }
        
        if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Ty przegrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
            printMessage('Wystąpił błąd! Wybierz 1, 2 lub 3');
        }
        
        if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Ty przegrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis!');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
            printMessage('Wystąpił błąd! Wybierz 1, 2 lub 3');
        }
    }

    displayResult(ComputerMove, PlayerMove);
}

// function buttonClicked() {
//     printMessage('Guzik został kliknięty');
// }

// let play-rock = document.getElementById('play-rock');

// play-rock.addEventListener('click', buttonClicked);

document.getElementById('play-rock').addEventListener('click',function (){playGame(1);
});

document.getElementById('play-paper').addEventListener('click',
function (){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click',
function (){
    playGame(3);
});



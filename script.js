


const dadiButton = document.querySelector('button');


dadiButton.addEventListener('click', function(){
    
    const outputElement = document.querySelector('pre');

    const userNumber = parseInt(document.getElementById('userNumber').value);

    const pcRandomNumber = parseInt( Math.random() * ( 6 - 1) + 1);


    if ( (userNumber > 0) && (userNumber <= 6)){

    if ( userNumber > pcRandomNumber){

    outputElement.append('Complimenti, hai vinto!!!') 

    }else if ( userNumber < pcRandomNumber){

    outputElement.append('Spiacente, hai perso') 
    
    }else{

    outputElement.append('Pareggio...riprova') 

    };
    }else{

    outputElement.append('Numero non valido') 

    };




});







































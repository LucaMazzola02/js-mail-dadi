let userEmail = prompt('Dimmi la tua email');

const emailList = ['mario.rossi@gmail.com', 'matteo.verdi@gmail.com', 'marco.gialli@gmail.com' ];

if ( userEmail === emailList){

    document.querySelector('pre').innerHTML = 'CORRECTO, PUEDES ENTRAR!';

}else{

    document.querySelector('pre').innerHTML = 'EQUIVOCADO, NO PUEDES ENTRAR!';


};
const emailList = ['mario.rossi@gmail.com', 'matteo.verdi@gmail.com', 'marco.gialli@gmail.com' ];

const userEmail = prompt('Dimmi la tua email');

let mailFound = false;


for( let i = 0; i < emailList.length; i++){

    if(userEmail === emailList[i]){

        mailFound = true;
    };

};

if(mailFound == true){

    console.log('Access valid')

}else{

    console.log('access denied')
    
};
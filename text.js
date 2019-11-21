
var test = require('tape')

test('basic arithmetic', function (t) {
    t.equal(somme(2,5), 7);
  //  t.equal(7 * 8 + 9, 65);

  t.end();
});

function somme(x,y){
    // let x = prompt('Entrez un premier nombre (numérateur)');
    // let y = prompt('Entrez un deuxième nombre (dénominateur)');
    
    if(isNaN(x) || isNaN(y) || x == '' || y == ''){
        throw new Error('Merci de rentrer deux nombres');
    }
    // else if(y == 0){
    //      throw new Error('Division par 0 impossible')
    // }
    else{
        return(x + y);
    }
}

try{
    somme();
}catch(err){
    console.log(err.message);
}
// function somme(x,y){
//     if ((!typeof x === 'string') && (!typeof y === 'string')) {
//         // this is a string
//         return x+y
//     }else {
//         throw "DonneeEnterInvalide";  // Ici on utilise l'instruction throw
//       }
//     }
    
//     try { 
//      somme(x,y); 
//     } catch (e) {
//         alert(e.message);
    
// };

 var som = somme(2,5);
 //alert(som);
 console.log(som)
// p1 = Document.getElementByID('p1')
// p1.addEventListener

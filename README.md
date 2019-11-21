# Deploy_Contiue
# intalation de tape
npm install tape --save-dev
# exemple de test 
test('basic arithmetic', function (t) {
    t.equal(somme(2,5), 7);
  //  On texte si la fonction sonne retun 
  //7 avec @arg 2 et 5

  t.end();
});
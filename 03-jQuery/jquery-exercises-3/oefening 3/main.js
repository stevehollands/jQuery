
let randomn = Math.floor((Math.random() * 100) + 1); // bepaal een variabele (randomn) die een getal genereert 
                                                    // tussen 0 en 100 om de userinput mee te vergelijken

console.log(randomn); // controle of er een getal wordt opgeslagen

$('#jos').click(function() { // functie maken die wanneer je een getal
                             // ingeeft in het input veld (id = jef) en op de button klikt (id = jos) 
                             // er vergeleken wordt met het random getal
  
  let userinput = parseInt(document.getElementById('jef').value) // de userinput wordt uit het textveld (document.jef)
                                                                // gehaald als een getal (parseInt) waarde (.value) 
  console.log(userinput); //controle of deze variabele (userinput) ook wordt opgeslagen om mee te vergelijken

if (userinput === randomn){ // condities waaraan de waarde kan voldoen en de output naar de user

 alert("Right")}

 else if ( userinput > randomn){

 alert("Less")}

 else if (userinput < randomn){

 alert("More")}

});

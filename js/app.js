alert("hello");
console.log("hello");


// age est une variable de type number ou de type int
let age;
age = 16;
console.log(typeof age);

// prénom est une variable de type string
const prenom = "brennan";
console.log(typeof prenom);

//comment faire une addition
let addition = 4 + 12;
console.log(addition);


//comment faire une soustraction
let soustraction = 2-50;
console.log(soustraction);


//comment faire une multiplication
let multiplication = 3 * 8;
console.log(multiplication);


//comment faire une division
let division = 7/2;
console.log(division)


//comment faire un modulo
let modulo = 5%2;
console.log(modulo)

//comment faire un boolean
let test = 3 > 5;
console.log(test)
console.log(typeof test)


// operateur de comparaison: ==; ===; !==; !=; <; >; <=; >= ;


//l'opération réaliser est une addition des chaine de caractère
//ce qui fait qu'il affiche les chaine de caractère collée
let identity = "bonjour" + "prenom" + "vous avez" + "age" + "ans"
console.log(identity)


//le .toUpperCase() fait en sorte de transformer un chaine de cractère minuscule en majuscule
//ici on affiche majuscule qui contien la chaine de caractère de identity en majuscule grace a .toUpperCase()
let majuscule = identity.toUpperCase();
console.log(majuscule)


//verifi si l'age que l'utilisateur et corecte
age = prompt("tapez votre age");
if(age <= 0){
    console.log("vous etre un poisson pane")
} 


//vérifier si l'utilisateur a mit un age valide
if(age > 0 && age <= 120  ){
    console.log("Votre age est valide")
}else{
    console.log("Je ne suis pas d'accord")
}


//verifi si l'utilisateur est majeur selon le pays
if(age >= 21){
    console.log("vous etes majeur")
}else if(age < 21 && age >= 18){
    console.log("vous etes majeur mais pas aux USA")
}else{
    console.log("vous etes mineur")
}


//opérateur boolean && ; | ; ! ;


//fonction qui dit bonjour quand on l'apelle
function direBonjour(){
    console.log("bonjour")
}
direBonjour();


//fonction qui dit bonjour a une personne quand on l'apelle
function direBonjourAkelkain(name){
    console.log("bonjour" + " " + name)
}
direBonjourAkelkain("brennan");


//fonction qui dit bonjour a une personne + la ville ou il vit
//ci la ville n'est pas présisez alor dir qu'il vit a lyon
function hello(name,city ){
    console.log("bonjour" + " " + name)
    if(city){
        console.log("vous habitez a" + " " + city)
    } else{
        console.log("vous habitez a" + " " + "lyon")
    }
}
hello("brennan");


//fonction qui adition a et b
function add(a,b){
   console.log(a + b)
}
add(15,5);


//fonction qui divise a par b 
function div(a,b){
    console.log(a/b)
}
div(15,5);


//fonction qui détecte ci le nombre est positife ou négatife
function positive(num){
    return( num > 0)
}
console.log(positive(-1))


//permet de convetire la type de age en string
function roughScale(age) {
    const parsed = parseInt(age, 10);
    if (isNaN(parsed)) { 
        console.log("ce n'est pas un nombre");
    }
    console.log("l'age de lutilistateur est" + " " + age);
  }
  roughScale(age);

  let VERIFIER_NOMBRE = isNaN(age);
  console.log(VERIFIER_NOMBRE);
  console.log(age)



  function isvalide(userInput){
    if(parseInt(userInput) && userInput >= 12 && userInput <= 90){
        return true
    }else{
        return false
    }
  }
  console.log(isvalide(age));


let resultat = isvalide(age);
let resultatInverse = !resultat;

console.log(resultat)
console.log(resultatInverse)

let index = 0;
while(index <= 4){
    console.log(index)
    index++;
}

index = 99;
while(index >= 3){
    console.log(index)
    index --;
}

index = 0;
while(index <= 100){
    if(index >= 0 && index <= 10){
        console.log(index)
    }else if (index >= 90 && index <= 100){
        console.log(index)
    }
    index ++;
}

let string_caractere = "";
while(index <= 100){
    string_caractere = string_caractere + index;
    index++;
}
console.log(string_caractere)



// ce programe ne fonctionne pas car key n'est pas plus grand que zero
let key = 0;
while(key > 100){
   console.log(key);
   key++;
}


//ceci est une boucle spésiale https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/do...while
//ce code ne fonctione pas car key n'est pas plus grand que zero aussi
let id = 0;
do {
   console.log(id);
   id++;
} while(id > 100);
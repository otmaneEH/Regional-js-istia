//alert("hello js");
// les variable en javascript
var nom="ikram";
//alert(nom);
var age=19;
//alert(age);


var isgood=true;
//alert(isgood);
var notes=[18,16,14,19];
//alert(notes[0]);
var person={
	nom:"ikram",
	age:19,
	city:"marrakech",
}
//alert(person.nom);


//console.log(person.city);

var nomb1=8;
var nomb2=4;
var somme=nomb1+nomb2;
//alert(somme);

var diff=nomb1-nomb2;
//alert(diff);

var mult=nomb1*nomb2;
//alert(mult);

var div=nomb1/nomb2;
//alert(div);
//console.log(div);

var nom="ikram";
var city="marrakech";
//concatenation
var result=nom+" "+city;
//alert(result);


var nom="ikram";
var note=6;

if(nom=="ikram"){
	//alert("bonjour"+nom);
	
	
}

if(note>=10){
	alert("admis");
	
	
}
else if(note>7){
	alert("rattrapage");
	
}
else{
	alert("non admis ");
	
}

var day=0;
switch(day){
	case 0:alert("sunday");break;
	case 1:alert("monday");break;
	case 2:alert("tuesday");break;
	case 3:alert("wednesday");break;
	case 4:alert("thursday");break;
	case 5:alert("friday");break;
	case 6:alert("saturday");break;
	
	
	
}
var nom="ikram";
var age=19;
var age=age+2;
//alert(age);
//les operateurs de comparaison
x==y
x>y
x<y
x>=y
x<=y
x!=y



if(age>18){
	//alert("plus de 18")
	
}
if(age!=20){
	//alert("not equal 20 years")
	
}
//les boucle

for(var i=1;i<=5;i++){
	console.log(i);
	
}
for(var i=1;i<=10;i++){
	console.log(i+"*2="+i*2);
	
}
//les fonction
// diclaration Function
function afficher(){
	var nom="ikram";
	var age=19;
	if(age>18){
		console.log("ok acceptable")
	}
	console.log("hello Function js");
	
}
//l'appel Function
afficher();
//Function hya wahd lahaja katkhlina ndiro traitement librina 
//ou n3yto lih w9tma brina

//les parametre de fonction
function afficher(nomb1,nomb2){
	var mult=nomb1*nomb2;
	console.log(mult);
	
}
afficher(120,14);
function afficher(nom){
	console.log("bonjour Mr,"+nom);
	
}
afficher("kamal");

//arrays
var fruits=["pomme","orange","kiwi","ananas"];
console.log(fruits[0]);
//des Méthode
console.log(fruits.length);//le nombre des element
console.log(fruits.push("banane");//ajoute un element f la  derniere list
console.log(fruits.indexOf("orange"));//afficher index un element
console.log(fruits.pop());//superimer la derniere element
console.log(fruits.shift());//superimer la premier element
console.log(fruits.unshift("melon"));//ajoute un element f la premier list
// Méthode String
var nom="ikram";
consolt.log(nom.length);//le nombre des lettre
consolt.log(nom.toUpperCase());//la lettre majuscule
consolt.log(nom.toLowerCase());//la lettre miniscule
consolt.log(nom.charAt(2));//la posistion de caracter
consolt.log(nom.indexOf("a"));//l'indice de caracter
consolt.log(nom.replace("i","a"));//remplasser caracter b nouvele caracter















	
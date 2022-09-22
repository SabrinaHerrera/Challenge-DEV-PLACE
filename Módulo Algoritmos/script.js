/*Pide un numero por teclado e indica
 si el numero es primo o no. Un numero primo 
 es aquel que puede dividirse entre 1 y si mismo.*/


 function esPrimo(n){
    var primo;
    //Se le asigna valor true a la variable 
    primo= true;
    //Itinera en el ciclo hasta llegar a su valor
    //si el resto de la división es igual a 0 
    //cambia su valor a falso.
    for(var i=2; i< n-1; i++){
        if(n%i ==0){
            primo=false;
            break;
        }
    }
    return primo;
 }

 //Se crea una variable donde se aloja el numero
 //que ingresa el usuario
 var num =parseInt(prompt("Por favor ingrese un número: "));
 //Con un ciclo condicional if se llama a la funcion
 //si es verdadero ingresa al ciclo y emite el alerta
 if(esPrimo(num)){
    alert("El numero ingresado es primo ")
 }else{
    alert("El numero ingresado no es primo")
 }
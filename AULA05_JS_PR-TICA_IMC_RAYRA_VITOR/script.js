var peso;
var altura;
var imc;
var resultado;

//1 recebendo o event
function calcular(event){
    //refressh dos boots
    event.preventDefault();
   // alert("Teste");

   //recebendo os dados digitados do usuario
   peso = document.getElementById("peso").value;
   altura = document.getElementById("altura").value;

   //calculo do IMC
   imc = peso / (altura * altura);

   //testando a recepção dos valores e testando o calculo do IMC 
   console.log("Peso: " + peso);
   console.log("Altura: " + altura);
   console.log("O Imc é: " + imc);
}

resultado = document.getElementById('resultado');
if(imc<17){
    resultado.innerHTML = '</br> Seu resultado foi: ' +imc.toFixed(2)+'</br> Cuidado você está muito abaixo do peso' ;
}
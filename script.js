
var calcular = document.getElementById("calcular");
var altura = document.getElementById("altura");
var peso = document.getElementById("peso");

calcular.addEventListener("click", () => {
    //obter altura
    var altura = +document.getElementById("altura").value;
    
    //obter peso
    var peso = +document.getElementById("peso").value;

    //calcular IMC usando altura e peso informados
    var imc = peso / (altura * altura);

    //com o IMC calculado, encontrar a situação na tabela. 
    // Se o resultado for abaixo fde 17 entao a situação e muuto abaixo de peso do peso
if(imc < 17)
    situacao = "Muito abaixo do peso";
//Se o resultado for entre 17 e 18,49 entao a situação é abaixo do peso
else if(imc >= 17 && imc < 18.49)
    situacao = "Abaixo do peso";

//Se o resultado for entre 18,49 e 24,99 entao a situação é normal
else if(imc >= 18.49 && imc < 24.99)
    situacao = "Peso normal";

//Se o resultado for entre 24,99 e 29,99 entao a situação é acima do peso
else if(imc >= 24.99 && imc < 29.99)
    situacao = "Acima do peso";

//Se o resultado for entre 29,99 e 34,99 entao a situação é muito acima do peso
else if(imc >= 29.99 && imc < 34.99)
    situacao = "Obesidade";

//Se o resultado for maior que 34,99 e 39,99 entao a situação é muito acima do peso(severa)
else if(imc >= 34.99 && imc < 39.99)    
    situacao = "Obesidade severa";
//Se o resultado for maior que 39,99 entao a situação é muito acima do peso(mórbida)
else if(imc >= 39.99)
    situacao = "Obesidade mórbida";


    //exibir o resultado na tela
    alert(situacao);
    




});

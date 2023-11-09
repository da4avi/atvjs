var pessoa1 = {idade: 25, peso: 70, sexo: "m"};
var pessoa2 = {idade: 40, peso: 55, sexo: "f"};
var pessoa3 = {idade: 30, peso: 68, sexo: "f"};
var pessoa4 = {idade: 20, peso: 85, sexo: "m"};
var pessoa5 = {idade: 19, peso: 50, sexo: "f"};
var pessoa6 = {idade: 23, peso: 72, sexo: "f"};
var pessoa7 = {idade: 28, peso: 95, sexo: "m"};
var pessoa8 = {idade: 50, peso: 88, sexo: "m"};
var pessoa9 = {idade: 35, peso: 75, sexo: "f"};
var pessoa10 = {idade: 30, peso: 72, sexo: "m"};

let pessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6, pessoa7, pessoa8, pessoa9, pessoa10];

let qtdM = 0;
let somaIdadeM = 0;

for(let i = 0; i<pessoas.length; i++){
    if(pessoas[i].sexo=="m"){ 
        qtdM++;
        somaIdadeM += pessoas[i].idade;
    }
}

let mediaIdadeM = somaIdadeM / qtdM;
let mediaIdadeM2 = mediaIdadeM.toFixed(2);

console.log("O número total de homens é: "+qtdM+ " e a média da idade deles é: " +mediaIdadeM2);

let qtdF= 0;
let somaIdadeF = 0;
for(let i = 0; i<pessoas.length; i++){
    if(pessoas[i].sexo=="f"){ 
        qtdF++;
        somaIdadeF += pessoas[i].idade;
    }
}

let mediaIdadeF = somaIdadeF / qtdF;
let mediaIdadeF2 = mediaIdadeF.toFixed(2);
console.log("o número total de mulheres é: "+qtdF+ " e a média da idade delas é: " +mediaIdadeF2);

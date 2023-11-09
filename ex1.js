let altura = [1.50, 1.70, 1.23, 1.40, 1.80, 2.00, 3.40, 1.60, 1.80, 1.90, 2.30, 5.03, 2.1, 4.50, 1.60 ];
let sexo = ['m', 'f', 'f', 'm', 'm', 'm', 'f', 'm', 'f', 'f', 'f', 'f', 'm', 'f', 'f'];

let alto = 0;

for(let i=0; i<altura.length; i++) {
    if(altura[i] > alto) alto = altura[i];
}
console.log('a altura mais maior é: '+alto);

let menor = alto;

for(let i=0; i<altura.length; i++) {
    if(altura[i] < menor) menor = altura[i];
}
console.log('a altura mais menor é: '+menor);

let soma = 0;
let f = 0;

for(let i=0; i<sexo.length; i++) {
    if(sexo[i] == 'f') {
        soma+= altura[i];
        f++;
    }
}
let resu = soma/f;
console.log('a media da altura das mulheres é: '+resu);

let c = 0;

for(let i=0; i<sexo.length; i++) {
    if(sexo[i] == 'm') {
        c++;
    }
}

console.log('o numero de homens é: '+c);
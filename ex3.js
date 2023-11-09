

function numeroPrimo(n) {
    if (n <= 1) {
      return false;
    }
    if (n <= 3) {
      return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  
  let numeros = [4, 2, 5, 10, 28, 34, 13, 7, 8, 19]; 
  let pares = 0;
  let primos = 0;
  
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares += numeros[i];
    }
    if (numeroPrimo(numeros[i])) {
      primos += numeros[i];
    }
  }
  
  console.log('soma dos numeros pares: ' + pares);
  console.log('soma dos numeros primos: ' + primos);  
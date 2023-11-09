let idades = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];
let opiniao = [3, 2, 1, 3, 2, 3, 2, 1, 3, 2, 3, 2, 1, 3, 2];

let otimoIdades = 0;
let regular = 0;
let bom = 0;

for (let i = 0; i < 15; i++) {
  if (opiniao[i] === 3) {
    otimoIdades += idades[i];
  } else if (opiniao[i] === 1) {
    regular++;
  }
  if (opiniao[i] === 2) {
    bom++;
  }
}

let mediaOtimoIdades = otimoIdades / bom;
let mediaBom = (bom / 15) * 100;

console.log('media das idades de pessoas que responderam otimo: ' + mediaOtimoIdades);
console.log('quantidade de pessoas que responderam regular: ' + regular);
console.log('porcentagem de pessoas que responderam bom: ' + mediaBom + '%');
function inverteCaracteres(string) {
    let novaString = "";
    for (let i = string.length-1; i >= 0; i--) {
      novaString += string[i];
    }
    return novaString;
  }

let string = "Meu teste";
let stringInvertida = inverteCaracteres(string);
console.log(stringInvertida); // "!odnum ,álO"
//idade em dias, mostra em anos, meses e dias 
const ano = 43
const mese = 516
const dia = 18516
const mesporano = 12
const diapormes = 30
let anos = ano * mesporano
let meses = dia / diapormes
let dias = mese * diapormes
console.log("Idade em dias é:", + dias)
console.log("Idade em meses é: " + meses)
console.log("Idade em anos é: " anos)

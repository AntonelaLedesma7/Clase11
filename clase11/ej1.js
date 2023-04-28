/*Definir las variables lowerLimitEven, upperLimitEven, lowerLimitOdd y upperLimitOdd. 
Se deben mostrar en consola todos los números pares existentes entre el lowerLimitEven 
y upperLimitEven con el mensaje “El número <num> es par”. Y mostrar todos los valores 
impares que existen entre lowerLimitOdd y upperLimitOdd mostrando el mensaje “El número 
<num> es impar”
*/

const LOWER_LIMIT_EVEN = 13;
const UPPER_LIMIT_EVEN = 20;
const LOWER_LIMIT_ODD = 5;
const UPPER_LIMIT_ODD = 12;

const showEvenNumber = (lower, upper) => {
  for (let num = lower; num <= upper; num++) {
    if (num % 2 === 0) {
      console.log(`El número ${num} es par`);
    }
  }
};

showEvenNumber(LOWER_LIMIT_EVEN, UPPER_LIMIT_EVEN);

const showOddNumber = (lower, upper) => {
  for (let num = lower; num <= upper; num++) {
    if (num % 2 !== 0) {
      console.log(`El número ${num} es impar`);
    }
  }
};

showOddNumber(LOWER_LIMIT_ODD, UPPER_LIMIT_ODD);
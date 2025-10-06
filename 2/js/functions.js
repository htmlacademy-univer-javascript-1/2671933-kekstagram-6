//Функция проверки максимальной длины
const maxLength = (string, maxL) => {
  return string.length <= maxL;

};
console.log(maxLength('проверяемая строка', 20));

//Функция проверки слова на палиндром

const checkPolindrome = (string) => {
  const stringToArr = string.split('');
  stringToArr.reverse();
  return stringToArr.join('') === string;
}
console.log(checkPolindrome('грохот'))

//Дополнительное задание

function extractDigits(input) {
  const str = input.toString();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= '0' && char <= '9') {
      result += char;
    }
  }
  return result ? parseInt(result, 10) : NaN;
}
console.log(extractDigits('2023'))
console.log(extractDigits('2023 год'))
console.log(extractDigits('2023.5'))

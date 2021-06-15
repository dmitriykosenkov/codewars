const rot: (a, b) => string = (message: string, num: number) {
   const alphabetLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   const alphabetUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
   let rotArr = []  //  числа из массива arrOfIndexPlusNum, преобразованные в буквы из alphabetLow
   function someFunction(alphabet: Array<string>, elem: string) {
      let arrOfIndex: Array<number> = []  // массив чисел, соответствующих индексам в массиве alphabetLow/alphabetUp
      let arrOfIndexPlusNum: Array<number>  // те же числа но увеличенные на заданное число
      let charIndex: number = alphabet.findIndex((item: string) => item === elem) // находим индекс каждой буквы исх.строки в алфавите
      arrOfIndex.push(charIndex) // добавляем в массив этих индексов
      arrOfIndexPlusNum = arrOfIndex.map((index: number) => { // преобразуем массив индексов на заданное число
         if ((index + num) >= alphabet.length) { // проверяем, если сумма индекса и заданного числа больше длины алфавита
            return (index + num) - alphabet.length // то возвращаем их разницу
         }
         return index + num // или сумму индекса и заданного числа
      })
      arrOfIndexPlusNum.forEach((elem: number) => { // для преобразованного массива чисел ищем соответствия в алфавите 
         alphabet.find((item: string, i: number) => {  // берем алфавит и каждый элемент и его индекс 
            if (elem === i) return rotArr.push(item) // сравниваем индекс в алфавите и число из преобразованного массива: если равны, то пушим в итоговый массив
         })
      })
   }
   message.split("").forEach((char: string) => { // разбиваем входящую строку на буквы, и к каждой выполняем код:
      if (alphabetLow.includes(char) || alphabetUp.includes(char)) { // проверка на наличие символа в массивах
         if (char == char.toUpperCase()) { // если буква большая
            someFunction(alphabetUp, char) // то работаем с алфавитом в верхнем регистре
         } else if (char == char.toLowerCase()) { // если буква маленькая
            someFunction(alphabetLow, char) // то работаем с алфавитом в нижнем регистре
         }
      } else {
         rotArr.push(char) // если символа в массивах нет, то просто пушим его в итоговый массив
      }
   });
   return rotArr.join("") 
}
console.log(rot("Dima", 14));

type calculatorType = {
   firstValue: number | null
   secondValue: number | null
   read: Function
   sum: Function
   mul: Function
}

const calculator: calculatorType = {
   firstValue: null,
   secondValue: null,
   read() {
     this.firstValue = +prompt("a?")
     this.secondValue = +prompt("b?")
   },
   sum() {
      return this.firstValue + this.secondValue
   },
   mul() {
      return this.firstValue * this.secondValue
   },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());




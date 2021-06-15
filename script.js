function rot13(message) {
   const alphabetLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   const alphabetUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
   let arrOfIndex = []  // массив чисел, соответствующих индексам в массиве alphabetLow/alphabetUp
   let arrOfIndexPlusNum  // те же числа но увеличенные на заданное число
   let rotArr = []  //  числа из массива arrOfIndexPlusNum, преобразованные в буквы из alphabetLow
   // Функция по возврату массива arrOfIndexPlusNum
   
   message.split("").forEach(char => {
      let charIndex = alphabetLow.findIndex(item => item === char)
      arrOfIndex.push(charIndex)
      arrOfIndexPlusNum = arrOfIndex.map(index => {
         if((index + 13) > alphabetLow.length) {
            return (index + 13) - alphabetLow.length
         }
         return index + 13
      })
   });
   console.log(arrOfIndexPlusNum);
   arrOfIndexPlusNum.forEach(elem => {
      alphabetLow.find((item, i) => {  //  был alphabet стал alphabetLow
         if (elem === i) return rotArr.push(item)
      })
   })
   return rotArr.join("")
}
console.log(rot13("Grfg"));

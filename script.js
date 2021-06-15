function rot13(message) {
   const alphabetLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   const alphabetUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
   let rotArr = []  //  числа из массива arrOfIndexPlusNum, преобразованные в буквы из alphabetLow
   function someFunction(alphabet, elem) {
      let arrOfIndex = []  // массив чисел, соответствующих индексам в массиве alphabetLow/alphabetUp
      let arrOfIndexPlusNum  // те же числа но увеличенные на заданное число
      let charIndex = alphabet.findIndex(item => item === elem)
      arrOfIndex.push(charIndex)
      arrOfIndexPlusNum = arrOfIndex.map(index => {
         if ((index + 13) > alphabet.length) {
            return (index + 13) - alphabet.length
         }
         return index + 13
      })
      arrOfIndexPlusNum.forEach(elem => {
         alphabet.find((item, i) => {  //  был alphabet стал alphabetLow
            if (elem === i) return rotArr.push(item)
         })
      })
   }
   message.split("").forEach(char => {
      if (char == char.toUpperCase()) {
         someFunction(alphabetUp, char)
      } else if (char == char.toLowerCase()) {
         someFunction(alphabetLow, char)
      }
   });
   return rotArr.join("")
}
console.log(rot13("GRFG"));

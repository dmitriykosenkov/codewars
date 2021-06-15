function rot13(message) {
   const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   let arrOfIndex = []
   let arrOfIndexPlusNum
   let rotArr = []
   message.toLowerCase().split("").forEach(element => {
      let charIndex = alphabet.findIndex(item => item === element)
      arrOfIndex.push(charIndex)
      arrOfIndexPlusNum = arrOfIndex.map(index => index + 13)
   });
   arrOfIndexPlusNum.forEach(elem => {
      alphabet.find((item, i) => {
         if (elem === i) return rotArr.push(item)
      })
   })
   return rotArr.join("")
}
console.log(rot13("grfg"));

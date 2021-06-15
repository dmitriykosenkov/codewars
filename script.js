var rot = function (message, num) {
    var alphabetLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var alphabetUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var rotArr = []; //  числа из массива arrOfIndexPlusNum, преобразованные в буквы из alphabetLow
    function someFunction(alphabet, elem) {
        var arrOfIndex = []; // массив чисел, соответствующих индексам в массиве alphabetLow/alphabetUp
        var arrOfIndexPlusNum; // те же числа но увеличенные на заданное число
        var charIndex = alphabet.findIndex(function (item) { return item === elem; }); // находим индекс каждой буквы исх.строки в алфавите
        arrOfIndex.push(charIndex); // добавляем в массив этих индексов
        arrOfIndexPlusNum = arrOfIndex.map(function (index) {
            if ((index + num) >= alphabet.length) { // проверяем, если сумма индекса и заданного числа больше длины алфавита
                return (index + num) - alphabet.length; // то возвращаем их разницу
            }
            return index + num; // или сумму индекса и заданного числа
        });
        arrOfIndexPlusNum.forEach(function (elem) {
            alphabet.find(function (item, i) {
                if (elem === i)
                    return rotArr.push(item); // сравниваем индекс в алфавите и число из преобразованного массива: если равны, то пушим в итоговый массив
            });
        });
    }
    message.split("").forEach(function (char) {
        if (alphabetLow.includes(char) || alphabetUp.includes(char)) { // проверка на наличие символа в массивах
            if (char == char.toUpperCase()) { // если буква большая
                someFunction(alphabetUp, char); // то работаем с алфавитом в верхнем регистре
            }
            else if (char == char.toLowerCase()) { // если буква маленькая
                someFunction(alphabetLow, char); // то работаем с алфавитом в нижнем регистре
            }
        }
        else {
            rotArr.push(char); // если символа в массивах нет, то просто пушим его в итоговый массив
        }
    });
    return rotArr.join("");
};
console.log(rot("Dima", 14));
var calculator = {
    firstValue: null,
    secondValue: null,
    read: function () {
        this.firstValue = +prompt("a?");
        this.secondValue = +prompt("b?");
    },
    sum: function () {
        return this.firstValue + this.secondValue;
    },
    mul: function () {
        return this.firstValue * this.secondValue;
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

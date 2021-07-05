let arr = [1, 2, 3, -1, -2, -3];

let checkData = function (params) {
    // Проверяем пустой ли масив arr.
    if (params.length === 0) {
        return false;
    } else {
        return true;
    }


}

function arrayFunc(params) {
    let exampleArr = [];
      // Вызываем проверку.
    if (checkData(arr)) {
    // Добавляем элементы в новый масив.
    for (i = 0; i < params.length; i++) {
        if (params[i] > 0) {


            exampleArr.push(params[i]);
        }
    }  
    } else {
        return "error: Массив пустой"
    }
     // Проверяем пустой ли масив exampleArr.
    if (exampleArr.length === 0) {
        return exampleArr = null;
    } else {
        return exampleArr;
    }
}
let result = arrayFunc(arr);
console.log(result);







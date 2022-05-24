function anotherFunction() {
    //Действия
}

function fnWithCallback(callbackFunction) {
    callbackFunction()
}

fnWithCallback(anotherFunction)

function printMyName() {
    console.log('Bogdan')
}

console.log('Start')
//setTimeout - встроенная функция для отложенного вызова других функций
setTimeout(printMyName, 2000)
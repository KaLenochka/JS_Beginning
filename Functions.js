 /* Функция - это блок кода, который можно выполнять многокрфтно
/**
 * Функция может быть:
 * именованной
 * присвоена переменной
 * анонимной
 * аргументом при вызове другой функции
 * значением свойства (метода) объекта
 */

/** 
 * чтоб увидеть структуру объекта:
 * console.dir(myFunction)
*/ 

function myFn(a,b) {
    let c
    a = a + 1
    c = a + b
    return c
}

console.dir(myFn)

/**
 * Если return не определен, функция возвращает undefined!
 */

console.log(myFn(10,3))

const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    person.age += 1
    return person
}

increasePersonAge(personOne)
console.log(personOne.age)

/**
 * Внутри функции НЕ РЕКОМЕНДУЕТСЯ мутировать внешние объекты
 * нужно создать КОПИЮ ОБЪЕКТА внутри функции и уже с ней работать
*/

const personTwo = {
    name: 'Taras',
    age: 21
}

function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonTwo = increasePersonAge(personTwo)
console.log(personTwo.age)
console.log(updatedPersonTwo.age)
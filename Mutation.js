/* Как избежать мутации???*/

const person = {
    name: 'Bob',
    age: 25
}

/** Создаем копию объекта
 * !!! подходит, если нет вложенных объектов!!!
 * иначе ссылки на вложенные объекты сохраняться и подлежат изменению
 */
const person2 = Object.assign({}, person)

person2.age = 26

console.log(person2.age)
console.log(person.age)

/**
 * ... - spred - оператор разделения объекта на свойства
 * делаем копию с помощью него!
 * !!! также НЕ ПОДХОДИТ, если есть вложенные объекты
 */

const person3 = { ... person }

person3.name = 'Alice'

console.log(person3.name)
console.log(person.name)

/**
 * Вариант копии, чтоб избежать мутации.
 * Подходит для объекта с вложенным объектом!
 */

const person4 = JSON.parse(JSON.stringify(person))

person4.name = 'Lena'

console.log(person4.name)
console.log(person.name)
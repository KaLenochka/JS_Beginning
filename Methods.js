const MyCity = {
    city: 'New York',
    cityGreeting: function() {
        console.log('Greetings!!!')
    }
}

MyCity.cityGreeting()

/** Второй вариант записи метода - без слова "function" */

const MyCity2 = {
    city2: 'New York',
    cityGreeting2() {
        console.log('Second greetings!!!')
    }
}

MyCity2.cityGreeting2()
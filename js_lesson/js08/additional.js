// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

class AdressGeoData {
    constructor(lat, lng) {
        this.geo = {
            lat,
            lng
        }
    }
}

class AdressData extends AdressGeoData {
    constructor(street, suite, city, zipcode) {
        super(...adressGeo)
        this.adress = {
            street,
            suite,
            city,
            zipcode
        }
    }
}
class PersonalProfile extends AdressData {
    constructor(id, name, username, email, phone, website) {
        super(...profileAdress);
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
    }
}

class PersonCompanyProfile extends PersonalProfile {
    constructor(name, catchPhrase, bs) {
        super(...profileInfo)
        this.company = {
            name,
            catchPhrase,
            bs
        }
    }
}
let adressGeo = ['51.6001', '-0.0597'],
    profileAdress = ['Foil road', 'h. 27', 'London', 115588],
    profileInfo = [5544, 'Paul Atreides', 'blue_eyed', 'thirsty-man@tail.com', '8-551-987-215', 'dunemovie.net'],
    userWithCompanyProfile = new PersonCompanyProfile('Freeman rebellion',
        'He who controls the spice controls the universe.',
        'quickly initiate leveraged total linkage')
console.log(userWithCompanyProfile)


let megaObj = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    },
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496'
        }
    },
}

// -  Створити функцію конструктор / клас  який описує об'єкт тег

// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
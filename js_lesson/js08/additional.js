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

// Нащо? Для чого? Просто грався


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
function CreateElementDescription(titleOfTag, action) {
    this.titleOfTag = titleOfTag
    this.action = action
    this.attrs = []
    this.addAttrs = function (obj) {
        this.attrs.push(obj)
    }
}

function CreateElementAttribute(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr
    this.actionOfAttr = actionOfAttr
}

let a = new CreateElementDescription('<a>', 'Тег <a> является ' +
    'одним из важных элементов HTML и предназначен для создания ссылок.',)
a.addAttrs(new CreateElementAttribute('accesskey', 'Активация ссылки с помощью комбинации клавиш.'))
a.addAttrs(new CreateElementAttribute('coords', 'Устанавливает координаты активной области.'))

let div = new CreateElementDescription('<div>', 'Элемент <div> является' +
    ' блочным элементом и предназначен для выделения фрагмента...',)
div.addAttrs(new CreateElementAttribute('align', 'Задает выравнивание содержимого тега <div>.'))
div.addAttrs(new CreateElementAttribute('title', 'Добавляет всплывающую подсказку к содержимому.'))

let h1 = new CreateElementDescription('<h1>', 'Тег <h1> представляет собой' +
    ' наиболее важный заголовок первого уровня',)
h1.addAttrs(new CreateElementAttribute('align', 'Определяет выравнивание заголовка.'))

let span = new CreateElementDescription('<span>', 'Тег <span> предназначен для определения строчных элементов документа.',)
span.addAttrs(new CreateElementAttribute('dir', 'Задает направление и отображение текста — слева направо или справа налево.'))
span.addAttrs(new CreateElementAttribute('hidden', 'Скрывает содержимое элемента от просмотра.'))

let input = new CreateElementDescription('<input>', 'Тег <input> является' +
    ' одним из разносторонних элементов формы',)
input.addAttrs(new CreateElementAttribute('accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'))
input.addAttrs(new CreateElementAttribute('autofocus', 'Устанавливает фокус в поле формы.'))

let form = new CreateElementDescription('<form>', 'Тег <form> устанавливает' +
    ' форму на веб-странице. ',)
form.addAttrs(new CreateElementAttribute('name', 'Имя формы.'))
form.addAttrs(new CreateElementAttribute('novalidate', 'Отменяет встроенную проверку данных формы на корректность ввода.'))

let option = new CreateElementDescription('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',)
option.addAttrs(new CreateElementAttribute('disabled', 'Заблокировать для доступа элемент списка.'))
option.addAttrs(new CreateElementAttribute('label', 'Указание метки пункта списка.'))

let select = new CreateElementDescription('<select>', 'Тег <select>' +
    ' позволяет создать элемент интерфейса в виде раскрывающегося списка',)
select.addAttrs(new CreateElementAttribute('required', 'Количество отображаемых строк списка.'))
select.addAttrs(new CreateElementAttribute('tabindex', 'Определяет последовательность перехода между элементами при нажатии на клавишу Tab'))


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
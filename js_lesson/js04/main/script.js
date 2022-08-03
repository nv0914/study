/*- За допомогою циклу for і document.write() вивести 10 блоків div
 з довільним текстом всередині*/
for(let i = 0; i<=10; i++){
    document.write('<div>some_text</div>')
}
/*
- За допомогою циклу for і document.write() вивести 10 блоків div c
 довільним текстом і індексом всередині
*/
for(let i = 0; i<10; i++){
    document.write(`<div>some_text_${i}</div>`)
}

/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним
 текстом всередині.
*/
let j =0;
while (j<20){
    document.write(`<h1>some_text</h1>`)
    j++
}

/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним
 текстом і індексом всередині.
*/
let k =0;
while (k<20){
    document.write(`<h1>some_text_${k}</h1>`)
    k++}

/*
- Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону*/

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react',
    'angular', 'node.js'];
let listOfLi = []
for (const item of listOfItems) {
    listOfLi.push(`<li>${item}</li>`)
}
document.write(`<ul>${listOfLi.join('')}</ul>`)

/*-----------------------------------------------

    Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону. Зробити адекватну стилізацію
Великими літерами прописанні властивості об'єкту які потрібно впровадити в
 шаблон*/

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const productsKey in products) {
    const link = products[productsKey]
    document.write(`<div class="product-card">
    <h3 class="product-title">${link.title} - ${link.price}грн.</h3>
<img src="${link.image}" alt="" class="product-image">
</div>`)

}



/*--------------------*/
/*за допомоги циклу вивести:
    - користувачів зі статусом true
- користувачів зі статусом false
- користувачів які старші за 30 років*/

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {
    if(user.status){
        document.write(`${user.name} - True<br>`)
    }

}
for (const user of users) {
    if(!user.status){
        document.write(`${user.name} - False<br>`)
    }

}
for (const user of users) {
    if(user.age>30){
        document.write(`${user.name} - Older than 30<br>`)
    }

}


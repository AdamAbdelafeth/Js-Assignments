// console.log('Adam \'Bahr\'')
// console.log("Adam \"Bahr\"")
// console.log("Adam \\ Bahr")
// console.log("Adam\nBahr")

// a = 'Adam'
// b = 'Bahr'
// console.log(a + ' ' + b)
// console.log(`${a} ${b}`)

// let title = 'Elzero'
// let desc = 'Elzero Web School'
// let markUp = `
//     <div>
//         <div class='header'>
//             <h1>${title}<h1/>
//             <p>${desc}<p/>
//         <div/>
//     <div/>
// `
// document.write(markUp)

// let theCard = {
//     title: 'Elzero',
//     desc: 'Elzero Web School',
//     date: '25/10'
// }
// console.log(theCard)
// let markUp = `
//     <div class='card'>
//         <h3>${theCard.title}<h3/>
//         <p>${theCard.desc}<p/>
//         <span>${theCard.date}<span/>
//     <div/>
// `
// document.write(markUp.repeat(4))

// var a = "10"
// var b = 20
// var c = true
// console.log(a + b)
// console.log(+a + b + c)
// console.log(a + b + c)

// let a = 10;
// let b = '20';
// let c = 80;
// console.log(++a + +b++ + +c++ - +a++) // 11 + 20 + 80 - 11 = 102
// console.log(++a) // 11 - 20 + 10 + 11 + 10 = 102

// let price = 100;
// let discount = true;
// let discountAmount = 20;

// // if (discount === true) {
// //     price -= discountAmount;
// // }


// discount ? price -= discountAmount : price;
// console.log(price);

// let day = 6;

// switch (day) {
//     case 1:
//         document.write(`Today is Saturday.`);
//         break;

//     case 2:
//         document.write('Today is Sunday.');
//         break;

//     case 3:
//         document.write('Today is Monday.');
//         break;

//     case 4:
//         document.write('Today is Thuesday.');
//         break;

//     case 5:
//         document.write('Today is Wednesday.');
//         break;

//     case 6:
//         document.write('Today is Thursday.');
//         break;
    
//     case 7:
//         document.write('Today is Friday.');
//         break;
    
//     default:
//         document.write('Unknown Day.')
// }

// let zero = 0;
// let counter = 3;
// let my = [1, 32, 213, 12, "Ahmed", 'Mazero', "Elham", 123, 123, 544, "Osama", "Gamal", "Ameer"];

// // console.log(my)

// let onlyNames = []
// for (let i = 0; i <= my.length; i++) {
//     if (typeof my[i] === "string") {
//         onlyNames.push(my[i])
//     }
// }
// console.log(onlyNames)

// let product = ['Keyboard', 'Mouse', 'Pen', 'pad', 'Monitor'];
// let colors = ['Red', 'Green', 'Black'];
// let Models = [2020, 2021]

// for (let i = 0; i < product.length; i++) {
//     console.log('#'.repeat(15))
//     console.log(`# ${product[i]}`)
//     console.log('#'.repeat(15))

//     console.log(`Colors:`)
//     for (let i = 0; i < colors.length; i++) {
        
//         console.log(`- ${colors[i]}`)
//     }

//     console.log(`Models:`)
//     for (let i = 0; i < Models.length; i++) {
        
//         console.log(`- ${Models[i]}`)
//     }
// }

let product = ['Keyboard', 'Mouse', 'Pen', 'pad', 'Monitor', 'Iphone', 'Tablet'];
let colors = ['Red', 'Green', 'Black'];
let showCount = 2;

document.write('<h1>Show 5 Products</h1>');

for (let i = 0; i <= showCount; i++) {
    document.write(`<div>`)
    document.write(` <h3>[${i + 1}] ${product[i]}</h3>`)
    for (let j = 0; j < colors.length; j++) {
        document.write(`<p>${colors[j]}</p>`)
    }
    document.write(`</div>`)
}
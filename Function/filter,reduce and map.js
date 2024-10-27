// let MyNums = [1, 2, 3, 4, 5, 6];
// const newNums = MyNums.filter((nums) => {
//     return nums % 2 == 0;
// })// If you use scope then yse return keyword
// or

/*
const newNums = MyNums.filter((num)=>num%2==0);
*/
// const newNums = [];
// MyNums.forEach(num => {
//     if (num >4) {
//         newNums.push(num);
//     }
// });
// console.log(newNums);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];
// let UserBook = books.filter((bk) => {
//    return bk.publish > 2000
// });
// UserBook = books.filter((bk) => bk.publish > 2010 && bk.genre === 'Science');
// console.log(UserBook);

// chaining(map and filter)
// let MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNums = MyNums
//     .map((num) => num + 10)
//     .map((num) => num * 5)
//     .filter((num) => num % 2 != 0);
// console.log(newNums);

// reduce
let MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const MyTotal = MyNums.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} and currVal : ${currVal}`)
//     return acc + currVal
// }, 0);

const MyTotal = MyNums.reduce((acc, currVal) => acc + currVal, 0);
console.log(MyTotal);

const ShoppingCart = [
    {
        item: "Namaste Js",
        price: 2999,
    },
    {
        item: "Apna College Js",
        price: 99,
    },
    {
        item: "CodeWithHarry Js",
        price: 299,
    },
    {
        item: "Chai aur Code Js",
        price: 2990,
      },
];
let YourTotal = ShoppingCart.reduce((acc, item) => (acc+item.price), 0);
console.log(YourTotal)

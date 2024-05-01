const numbers = [1, 1, 1, 2, 3, 1, 2, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 6, 6, 6, 7, 8, 8, 9, 8]
let sum1 = 0
numbers.map((num) => {
    sum += num
})

let sum2 = numbers.reduce((x, y) => x + y)

console.log(
    sum2
);
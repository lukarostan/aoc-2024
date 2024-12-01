const leftList = [];
const rightList = [];

const inputTest = "3   4\n" +
    "4   3\n" +
    "2   5\n" +
    "1   3\n" +
    "3   9\n" +
    "3   3"

// replace inputTest with your puzzle input
const rows = inputTest.split('\n');
rows.map((row) => {
    const splitRow = row.split(('   '))
    splitRow.forEach((row, index) => {
        if (index === 0) {
            leftList.push(row)
            return;
        }
        rightList.push(row)
    })
})

const totalRepetitions = []

leftList.forEach((leftValue) => {
    let repetitions = 0;
    rightList.forEach((rightValue) => {
        if (parseInt(leftValue) === parseInt(rightValue)) {
            repetitions+=1;
        }
    })
    totalRepetitions.push(repetitions * leftValue)
})
console.log('result: ',totalRepetitions.reduce((partialSum, a) => partialSum + a, 0))

const leftList = [];
const rightList = [];

const inputTest = "65918   67721\n" +
    "38226   56750\n" +
    "86853   74909\n" +
    "18560   15292"

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

const sortedLeft = leftList.sort((a, b) => a.localeCompare(b))
const sortedRight = rightList.sort((a, b) => a.localeCompare(b))

const differences = []

sortedLeft.forEach((leftValue, leftIndex) => {
    differences.push(Math.abs(parseInt(leftValue) - parseInt(sortedRight[leftIndex])));
})

console.log('result: ',differences.reduce((partialSum, a) => partialSum + a, 0))

const inputTest = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"

const multiplicationPairs = []

// replace inputTest with your puzzle input
const splitInput = inputTest.split('mul(');
splitInput.map((substr) => {
    const splitSubstr = substr.split(',')
    const firstOpr = Number(splitSubstr[0])
    const hasFirstOperator = !isNaN(firstOpr);
    if (!hasFirstOperator) {
        return;
    }
    if (!splitSubstr[1]) {
        return;
    }
    const secondOpr = Number(splitSubstr[1].split(')')[0]); // NaN

    const hasSecondOperator = !isNaN(secondOpr);
    if (!hasSecondOperator) {
        return;
    }

    multiplicationPairs.push({x: firstOpr, y: secondOpr})
})

const multiplicationResults = []
multiplicationPairs.map((pair) => {
    multiplicationResults.push(pair.x * pair.y)
})

console.log("result: ",multiplicationResults.reduce((partialSum, a) => partialSum + a, 0))
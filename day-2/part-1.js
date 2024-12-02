const inputTest = "7 6 4 2 1\n" +
    "1 2 7 8 9\n" +
    "9 7 6 2 1\n" +
    "1 3 2 4 5\n" +
    "8 6 4 4 1\n" +
    "1 3 6 7 9"

// replace inputTest with your puzzle input
const reports = inputTest.split("\n");

let safeReports = 0;

reports.map((report) => {
    let isIncreasing = false;
    let isDecrasing = false;
    let unsafe = false;
    const levels = report.split(' ');
    levels.reduce((previousValue, currentValue) => {
        if (Math.abs(parseInt(currentValue) - parseInt(previousValue)) > 3 || Math.abs(parseInt(currentValue) - parseInt(previousValue)) === 0) {
            unsafe = true;
            return parseInt(currentValue);
        }
        if (parseInt(currentValue) > parseInt(previousValue)) {
            isIncreasing = true;
            return parseInt(currentValue);
        }
        isDecrasing = true;
        return parseInt(currentValue);
    })

    if (!unsafe && !(isIncreasing && isDecrasing)) {
    safeReports+=1;
    }
})
console.log("number of safe reports: ",safeReports)
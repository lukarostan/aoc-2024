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
    let unsafe = false;
    const levels = report.split(' ');
    const levelMovement = []
    levels.map((value, index) => {
            if (Math.abs(parseInt(value) - parseInt(levels[index + 1])) > 3 || Math.abs(parseInt(value) - parseInt(levels[index + 1])) === 0) {
                const filteredLevels = levels.filter((level) => level !== value)
                filteredLevels.map((filteredOnceValue, filteredOnceIndex) => {
                    if (Math.abs(parseInt(filteredOnceValue) - parseInt(levels[filteredOnceIndex + 1])) > 3 || Math.abs(parseInt(filteredOnceValue) - parseInt(levels[filteredOnceIndex + 1])) === 0) {
                        unsafe = true;
                    }
                })
            }


        if (index > 0) {
            if (parseInt(levels[index - 1]) < parseInt(value)) {
                levelMovement.push('inc')
            } else {
                levelMovement.push('dec')
            }
        }
    })

    let faultyDirection = false;

    const noOfIncreasing = levelMovement.filter(x => x === 'inc').length
    const noOfDecreasing = levelMovement.filter(x => x === 'dec').length

    if (noOfDecreasing > noOfIncreasing) {
        if (noOfIncreasing > 1) {
            faultyDirection = true;
        }
    } else {
        if (noOfDecreasing > 1) {
            faultyDirection = true;
        }
    }

    console.log(report, levelMovement, "safe:", !unsafe && !faultyDirection)


    if (!unsafe && !faultyDirection) {

        safeReports += 1;
    }
})


console.log("number of safe reports: ", safeReports)
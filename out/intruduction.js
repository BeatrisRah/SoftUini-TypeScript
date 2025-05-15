"use strict";
function evenSum(n1, n2, n3) {
    const res = n1 + n2 + n3;
    console.log(res % 2 === 0);
}
function dayOfTheWeek(n) {
    let DaysOfTheWeek;
    (function (DaysOfTheWeek) {
        DaysOfTheWeek[DaysOfTheWeek["Monday"] = 1] = "Monday";
        DaysOfTheWeek[DaysOfTheWeek["Tuesday"] = 2] = "Tuesday";
        DaysOfTheWeek[DaysOfTheWeek["Wednesday"] = 3] = "Wednesday";
        DaysOfTheWeek[DaysOfTheWeek["Thursday"] = 4] = "Thursday";
        DaysOfTheWeek[DaysOfTheWeek["Friday"] = 5] = "Friday";
        DaysOfTheWeek[DaysOfTheWeek["Saturday"] = 6] = "Saturday";
        DaysOfTheWeek[DaysOfTheWeek["Sunday"] = 7] = "Sunday";
    })(DaysOfTheWeek || (DaysOfTheWeek = {}));
    console.log(DaysOfTheWeek[n] || 'error');
}
function formatPerson(personData) {
    return `Hello, my name ${personData[0]} and my age is ${personData[1]}`;
}
// console.log(formatPerson(['Ivan', 20]));
function convertArrays(string) {
    const concat = string.join('');
    return ([concat, concat.length]);
}
// console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));
function summarizePerson(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    return [
        id,
        `${firstName} ${middleName ? middleName + ' ' + lastName : lastName}`,
        age,
        `${hobbies ? hobbies.join(', ') : '-'}`,
        workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-'
    ];
}
// console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));
function reversedDayoftheWeek(daysName) {
    let DaysOfTheWeek;
    (function (DaysOfTheWeek) {
        DaysOfTheWeek[DaysOfTheWeek["Monday"] = 1] = "Monday";
        DaysOfTheWeek[DaysOfTheWeek["Tuesday"] = 2] = "Tuesday";
        DaysOfTheWeek[DaysOfTheWeek["Wednesday"] = 3] = "Wednesday";
        DaysOfTheWeek[DaysOfTheWeek["Thursday"] = 4] = "Thursday";
        DaysOfTheWeek[DaysOfTheWeek["Friday"] = 5] = "Friday";
        DaysOfTheWeek[DaysOfTheWeek["Saturday"] = 6] = "Saturday";
        DaysOfTheWeek[DaysOfTheWeek["Sunday"] = 7] = "Sunday";
    })(DaysOfTheWeek || (DaysOfTheWeek = {}));
    console.log(DaysOfTheWeek[daysName]);
}
reversedDayoftheWeek('Monday');
//# sourceMappingURL=intruduction.js.map
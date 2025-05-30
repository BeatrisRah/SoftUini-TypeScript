function evenSum(n1: number, n2: number, n3: number): void {
    const res = n1 + n2 + n3
    console.log(res % 2 === 0);

}

function dayOfTheWeek(n: number): void {
    enum DaysOfTheWeek {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(DaysOfTheWeek[n] || 'error');

}

function formatPerson(personData: [string, number]): string {
    return `Hello, my name ${personData[0]} and my age is ${personData[1]}`
}
// console.log(formatPerson(['Ivan', 20]));

function convertArrays(string: string[]): [string, number] {
    const concat = string.join('')
    return ([concat, concat.length])
}
// console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));

function summarizePerson(
    id: number,
    firstName: string, 
    lastName: string, 
    age: number, 
    middleName?: string, 
    hobbies?: string[], 
    workInfo?: [string, number]): [number, string, number, string, string] {
        return[
            id, 
            `${firstName} ${middleName? middleName + ' ' + lastName : lastName}`,
            age,
            `${hobbies ? hobbies.join(', '): '-'}`,
            workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-']
}

// console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));

function reversedDayoftheWeek(daysName: string): void{
    enum DaysOfTheWeek {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    console.log(DaysOfTheWeek[daysName as keyof typeof DaysOfTheWeek]);

}
// reversedDayoftheWeek('Monday')

function unknownResponse(obj:unknown): string{
    if('value' in (obj as any) && typeof (obj as any).value === 'string'){
        return (obj as any).value
    }
    return '-'
}

function isNotEmptyStringArr(arg: unknown): arg is string[]{
    return Array.isArray(arg) && arg.length >= 1 && arg.every(el => typeof el === 'string');
}

// let i: unknown = ['test', 'hi'] 

// console.log(isNotEmptyStringArr(i));

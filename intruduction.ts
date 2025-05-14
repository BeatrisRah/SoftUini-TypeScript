function evenSum(n1:number, n2:number, n3:number): void{
    const res = n1 + n2 + n3
    console.log(res % 2 === 0);
    
}

function dayOfTheWeek(n:number):void{
    enum DaysOfTheWeek{
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

function formatPerson(personData:[string, number]):string{
    return `Hello, my name ${personData[0]} and my age is ${personData[1]}`
}
console.log(formatPerson(['Ivan', 20]));

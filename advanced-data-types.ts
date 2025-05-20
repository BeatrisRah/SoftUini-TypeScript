type isNumOrStr = number | string

function optionalMultiplier(n1?:isNumOrStr, n2?:isNumOrStr, n3?:isNumOrStr ): number {

    let res = 1
    if(n1) res *= Number(n1) 
    if(n2) res *= Number(n2)
    if(n3) res *= Number(n3)

    return res

}

// console.log(optionalMultiplier());
type operatorParam = [
    string | number | string[],
    'Index' | 'Length' | 'Add',
    number
]


function operator(...args: operatorParam): number | string{
    if(args[1] === 'Index'){
        return (args[0] as string[] | string)[args[2]]
    } else if(args[1] === 'Length'){
        return (args[0] as string[] | string).length;
    } 
    return Number((args[0] as number)) + args[2]
}

console.log(operator('7', 'Add', 3 ));





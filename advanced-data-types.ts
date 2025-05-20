type isNumOrStr = number | string

function optionalMultiplier(n1?:isNumOrStr, n2?:isNumOrStr, n3?:isNumOrStr ): number {

    let res = 1
    if(n1) res *= Number(n1) 
    if(n2) res *= Number(n2)
    if(n3) res *= Number(n3)

    return res

}

console.log(optionalMultiplier());




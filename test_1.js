function sayHello(str) {
    return `Hello ${str}`
}

console.log(sayHello('mokautsar'));



function sumWord(str) {
    let sum = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str.length) {
            sum++
        }
    }
    return sum

}

console.log(sumWord('mokautsar'));
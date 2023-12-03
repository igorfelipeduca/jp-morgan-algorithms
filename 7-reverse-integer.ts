// https://leetcode.com/problems/reverse-integer/description/

function reverse(x: number): number {
    const string = JSON.stringify(x);
    let parsedString = string.split("").reverse()

    if(parsedString[parsedString.length - 1] === "-") {
        parsedString.pop()
        parsedString.splice(0, 0, "-")
    }

    if(Math.pow(2, 31) < Number(parsedString.join(""))) return 0
    if(Math.pow(2, 31) * -1 > Number(parsedString.join(""))) return 0

    return Number(parsedString.join(""))
};

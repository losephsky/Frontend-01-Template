function convertStringToNumber(content, x) {
    if(arguments.length < 2) {
        x = 10;
    }
    const chars = content.split('');
    let number = 0;
    let i = 0;
    while(i < chars.length && chars[i]!=='.' && chars[i]!=='e' && chars[i]!=='E') {
        number = number * x;
        number += chars[i].codePointAt(0) - '0'.codePointAt(0);
        i++;
    }
    if (chars[i] === '.') {
        i++;
        let decimal = 1;
        while(i < chars.length && chars[i]!=='e' && chars[i]!=='E') {
            decimal = decimal / x;
            number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * decimal;
            i++;
        }
    }
    if (chars[i] =='e' || chars[i] == 'E') {
        number += chars[i];
        i++;
        let e = 0;
        if (chars[i] === '-') {
            number += chars[i];
            i++;
        }
        while(i < chars.length) {
            e = e * 10;
            e += chars[i].codePointAt(0) - '0'.codePointAt(0);
            i++;
        }
        number += e;
    }

    return number;
}

function convertNumberToString(number, x){
    let integer = Math.floor(number);
    let dicimal = number - integer;
    let string = '';
    while(integer > 0) {
        string = String(integer % x) + string;
        integer = Math.floor(integer / x);
    }
    if (dicimal)
        string += '.';
    for (let i = 1; dicimal >  Number.EPSILON * Math.pow(x, i); i++) {
        dicimal = dicimal * x
        string += Math.floor(dicimal);
        dicimal = dicimal - Math.floor(dicimal);
    }
    return string;
}
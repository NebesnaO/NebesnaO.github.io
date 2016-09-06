var base = prompt('Введите число, которое будет возводиться в степень');
var exponent = prompt('Введите степень, которое надо применить к числу');

function pow(base, exponent) {
    var result = base;

    for (var i = 1; i < exponent; i++) {
        result *= base;
    }
return result;

}
var result = pow(base,exponent);
console.log('Результат = ',  result);


 

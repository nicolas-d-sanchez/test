//1- Multiplicar 2 numeros, sin utilizar el operador de multiplicacion.

function multiplica(a, b) {
  return a > 0 ? multiplica(a - 1, b) + b : 0;
}
console.log('1 - Multiplicacion de numeros');
console.log(
  multiplica(1, 3),
  multiplica(0, 3),
  multiplica(1, 0),
  multiplica(1, -10),
);

//2- Obtener el numero mayor dentro de un arreglo. Solo iterar 1 vez.

function mayorNumero(numArray) {
  return Math.max(...numArray);
}

console.log('2 - Numero mayor dentro de un arreglo');
console.log(mayorNumero([7771, 2, 2, 7, 50, 992]));

//3- Dado un arreglo, eliminar todos los "undefined", "null", "false" y 0 (no sus valores en string). Iterar solo 1 vez.

function filtro(arreglo) {
  var filtered = arreglo.filter(function (arreglo) {
    if (arreglo != null || arreglo != false || arreglo != 0) {
      return arreglo;
    }
  });
  return filtered;
}

console.log('3 - Eliminar todos los "undefined", "null", "false"');
console.log(  
    filtro([0, 1, null, 2, "", 3, undefined,3,false,"hola" ," ", , ,4,,4,5,,6,,,''])
)

//4- Dado un arreglo multidimensional, obtener todos los valores en un nuevo arreglo de una sola dimension. Usar recursividad



function aplanarArray(obj, result=[]){
    if (!Array.isArray(obj)){
        result.push(obj);
    } else {
        for (var i=0; i<obj.length; i++){
            aplanarArray(obj[i], result);
        }
    }
    return result;
}

console.log('4 - Aplanar arreglo');
console.log(aplanarArray([1, [2, [3, 4, [1 , 2]]], 'hola', [1, 'buenos dias']]));


//5- Dado un string, devolver un objeto/array que indique la palabra que mas veces se repite, y su cantidad. 

function masOcurrencia(string) {
    
    string = string.replace(/[.,]/g,'').toLowerCase()   
    array = string.split(' ')

    var obj = {};
    array.forEach(function (s) {     
        obj[s] = (obj[s] || 0) + 1;
    });

    var ocurencias = Math.max(...Object.values(obj));
    var palabra = Object.keys(obj).find(
        (key) => obj[key] === ocurencias
    );
    var newObj = {};
    newObj[palabra] = ocurencias;

    return newObj;
}

console.log('5 - Palabra que mas veces se repite');
console.log(
    masOcurrencia("Este es un string, el cual es un string donde se repite muchas veces la palabra es.")
);

//6- Verificar si un string es un palíndromo.

function palindromo(string){ 
    const stringNormalizado = string.replace(/[W_,.]/g, "").toLowerCase()
    const stringReverso = stringNormalizado.split("").reverse().join("")

    return stringNormalizado === stringReverso ? "es palindromo" : "no es palindromo"
}

console.log('6 - Palindromo');
console.log(palindromo('Neuquen. o neuquen.'))

//7- Dado 3 numeros, devolver el mayor. Hacer una function, adaptada de la anterior, para que funcione con cualquier cantidad de numeros.

function mayorNumero2(num1, num2, num3,...numN) {
    return Math.max(num1, num2, num3,...numN);
}

console.log('7 - Devolver el mayor');
console.log(mayorNumero2(888,88,5555,99996))
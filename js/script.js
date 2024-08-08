/**
 * Imprime el parametro en consola.
 * @param {*} imprimir - Parametro para imprimir en consola
 * @returns {void}
*/
const imprimirEnConsola = imprimir => {console.log(imprimir)};

/**
 * Calcula el discriminante de un polinomio cuadratico o tambien llamado de grado 2
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */
const discriminante = (a,b,c) => {(b**2) - (4*a*c)};

/**
 * Calcula las raices reales distintas de un polinomio de grados 2
 * @param {number} a constante cuadratico del polinomio
 * @param {number} b constante lineal del polinomio
 * @param {number} disc discriminante del polinomio
 * @returns {string}
 */
function raicesRealesDistintas(a,b,disc){
    let x1 = (-b+disc**.5)/(2*a);
    let x2 = (-b-disc**.5)/(2*a);
    return `x1 = ${x1} ; x2 = ${x2}`;
}

/**
 * Calcula las raices repetidas de un polinomio de grados 2
 * @param {number} a constante cuadratico del polinomio
 * @param {number} b constante lineal del polinomio
 * @returns {string}
 */
function raicesRealesRepetidas(a,b){
    let raiz = -b/(2*a);
    return `x1 = ${raiz} ; x2 = ${raiz}`;
}

/**
 * Calcula las raices complejas de un polinomio de grados 2
 * @param {number} a constante cuadratico del polinomio
 * @param {number} b constante lineal del polinomio
 * @param {number} disc discriminante del polinomio
 * @returns {string}
 */
function raicesComplejas(a,b,disc){
    let primerTermino = -b/(2*a);
    let segundoTermino = ((-disc)**.5)/(2*a);
    let resultado = `x1 = ${primerTermino} + ${segundoTermino}i ; x2 = ${primerTermino} - ${segundoTermino}i`;
    if(primerTermino == 0){
        resultado = `x1 = ${segundoTermino}i ; x2 = -${segundoTermino}i`
    }
    return resultado
}

/**
 * Determina el tipo de raices y las calcula
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @param {number} c - Constante c del polinomio cuadrático.
 * @returns {string}
 */
function resolvente(a,b,c){
    let mensajeSalida = "";
    let disc = discriminante(a,b,c);
    if (disc > 0 ){
        mensajeSalida = `Raices reales y distintas: ${raicesRealesDistintas(a,b,disc)}`;
    } else if (disc == 0){
        mensajeSalida = `Raices reales e iguales: ${raicesRealesRepetidas(a,b)}`;
    } else {
        mensajeSalida = `Raices Complejas: ${raicesComplejas(a,b,disc)}`;
    }
    return mensajeSalida;
}

/**
 * 
 */






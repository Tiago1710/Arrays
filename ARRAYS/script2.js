function calcular(){

    let vector = [];
    let suma = 0;
    let suma36 = 0;
    let mayores50 = 0;

    for(let i=0;i<8;i++){

        vector[i] = parseInt(prompt("Ingrese numero"));

        suma += vector[i];

        if(vector[i] > 36){
            suma36 += vector[i];
        }

        if(vector[i] > 50){
            mayores50++;
        }
    }

    document.getElementById("resultado").innerHTML =
    `Edades: ${vector}<br>
    Acumulado total: ${suma}<br>
    Acumulado mayores a 36: ${suma36}<br>
    Cantidad mayores a 50: ${mayores50}`;
}
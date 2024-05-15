
// formas de criar array
// tipos de criações de array: indice, associativo 
// 1º forma

window.onload = function () {

    let frutas = new Array();
    frutas[0] = "Maça";
    frutas[1] = "Banana";
    frutas[2] = "Manga";
    frutas[3] = "Acerola";

    // mostra um elemento do array

    document.write(frutas[3])
    document.write("<br>")
    // for, while
    frutas.forEach(element => {
        document.write(element + '<br>')
    });

    document.write("<br>")

    for (const key in frutas) {
       // document.write(key +" : "+ frutas[key] +'<br>');
        // interpolação de string
        document.write(`${key} :  ${frutas[key]}  <br>`);

    }

}



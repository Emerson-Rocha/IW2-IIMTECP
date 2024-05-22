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


    // 2 FORMA

    let nomes = new Array('Ricardo', 'Carlos', 'Nicolas', 'Maria');
    nomes.push('Luiza');
    nomes.unshift('Vinicius', 'Moises', 'Sofia');

    for (let i = 7; i < nomes.length; i++) {
        console.log(nomes[i] + '\n');
    }


    let mudanca = nomes.map((texto) => texto + " IPI ");
    console.log(mudanca.reverse());



    // 3 forma

    let objArray = [
        {
            nome: 'Carlos',
            cidade: 'Sorocaba',
            bairro: ' Vitoria Regis',
            tipo: 'passa fome!!!'
        },
        {
            nome: 'Maria',
            cidade: 'Sor',
            bairro: ' Vitoria',
            tipo: 'passa fome!!!'
        },

    ]
    
    document.write(`<p>
                     ${objArray[0].nome}, 
                     ${objArray[0]['cidade']},
                     ${objArray[0].bairro},
                     ${objArray[0]["tipo"]},
                  </p>`)


    document.write(`<p>
                  ${objArray[1].nome}, 
                  ${objArray[1]['cidade']},
                  ${objArray[1].bairro},
                  ${objArray[1]["tipo"]},
               </p>`)

}





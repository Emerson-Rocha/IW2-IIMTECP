// criar uma função referencia que espere carregar  
// todos nosso elemento do html

//lembrar isso no Jquery

window.onload = function () {


    // pegar o elemento de entrada campo
    let numero = document.getElementsByTagName("input");
    // pegar o botão
    let bt = document.getElementsByClassName("ClassBt");
    // pegar refencia do span
    let tagSpan = document.querySelector(".ver");

    //console.log(numero[0].value);

    // diparar o clique

    bt[0].onclick = function () {
        //alert('sadsa');
        //(se()    senão() ) senão se()
        if (numero > 10 ) {
            // pegar refencia da tag span

        }


    }







} // fim onload
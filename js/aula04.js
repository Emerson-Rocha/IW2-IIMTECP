// Operadores Arit
// -----------------------

/*let n1= 10;
let n2 = 15;
  // + ad   + concatenar
document.write("<br>") ;
document.write( "asaa" + (n1 + n2) ) ; //15
document.write("<br>") ;

document.write("<hr>") ;
document.write( "subtração" );
*/

//------------------------------

// estaremos criando uma função basica com procedural

function Sub(){
   //1º passo: saber se a função esta vinculada
   //console.log(" chama!!!!");
   
   //2º referencia da localização da tag 
   let n01 =  document.getElementById("n_1");
   console.log(n01.value);
   let n02 =  document.getElementById("n_2");

    let soma = parseInt(n01.value) - parseInt(n02.value) ;

   // 4º passo: colocar o valor no <p>
   let resultado = document.getElementsByTagName("p"); 
   // array  v = [p,p,p]    v[0] 
   resultado[0].innerHTML = soma;

}
window.onload = function () {
  // todo meu codigo aqui


  // for( I ; CONDIÇÃO ; INCREMENTO );;


  // while
  /*
  let i = 0
   while( i <= 10  ){
         console.log(i +"\n");
         document.write( i + "\n");   
         i++;

       }
  */
  /*  // aula
   let nome = prompt ('Digite seu nome ou FIM para sair');
   
   while( nome.toUpperCase() != "FIM"){
        document.write(`<p>nome :${nome} </p>`)
       //document.write('nome : ' + nome)
       nome = prompt ('Digite seu nome ou FIM para sair');  
   }
 
   */
  // do while
  let nomes = ['Jair', 'Thais', 'Patrícia', 'Davi', 'William'];

  //nomes[2]
  // nomes.length
  document.write("<ul>");
  /* 
   for (let i = 0; i <= nomes.length - 1; i++) {
    document.write( `<li> ${nomes[i]}  </li>`);
      }

   */

  nomes.forEach((element, i ) => {
    document.write(`<li> ${i + 1} : ${element}</li>`);
  });

  document.write("</ul>");

}
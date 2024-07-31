window.onload = function () {
  let cep;
  let bt = document.querySelector("button");
  let dados = document.querySelector("#json");   
  bt.addEventListener("click", () => {
    cep = document.querySelector("#cep").value;
    let servidor = `https://viacep.com.br/ws/${cep}/json`;
    console.log(servidor);
    fetch(servidor)
      .then((resp) => {
        if (resp.ok) {
        //console.log(resp.status);
           return resp.json();
          }
        //resp.json();
      })
      .then((x) =>{
        //
        for(var key in x){
            console.log(key , x[key])
        }

   
          // criar elementos (nó)
          let div = document.createElement("div");
          for(var key in x){
           // console.log(key , x[key])
             let p = document.createElement("p");

             let texto = document.createTextNode(`${key.toUpperCase()} : ${x[key]}`);
             p.appendChild(texto);
             div.appendChild(p);
                     
          }
          dados.append(div)
      }
        //console.log(x['bairro'])
      ).catch((x)=> console.error(x));
  });
};

window.onload = function () {
    //pegar os elementos
    let bt = document.querySelector("button");
    //let dados = document.querySelector("#json");
    let cep = document.querySelector("#cep");
    let endereco = document.getElementById("endereco");
    let complemento = document.getElementById("complemento");
    let bairro = document.querySelector("#bairro");
    let cidade = document.querySelector("#cidade");
    let nr = document.querySelector("#nr");
    let uf = document.getElementById("uf");

    //evento click
    bt.addEventListener("click", () => {

        let servidor = "https://viacep.com.br/ws/" + cep.value + "/json/";
        //console.log(servidor);

        fetch(servidor).then(
            (resp) => { return resp.json(); }

        ).then(
            (data) => {
                endereco.value = data["logradouro"];
                complemento.value = data["complemento"];
                bairro.value = data["bairro"];
                cidade.value = data["localidade"];
                nr.value = data["unidade"];
                uf.value = data["uf"];

                let div = document.createElement("div");
                 /* for (var key in data) {
                    let p = document.createElement("p");
                    let texto = document.createTextNode(`${key.toUpperCase()}: ${data[key]}`);
                    p.appendChild(texto);
                    div.appendChild(p);
                }
                dados.append(div);*/
            }
        ).catch(
            (er) => console.error(er)
        )

    })
}
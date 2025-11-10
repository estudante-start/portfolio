let texto = document.querySelector("#nome")

// texto.textContent = "Monalize"

let nome = prompt("Qual é o seu nome?")

if(nome == null){
    texto.textContent = "Seja bem vindo!"
}else{
   texto.textContent = nome;
}



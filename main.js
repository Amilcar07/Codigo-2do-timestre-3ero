const botoes = document.querySelectorAll;

for (let i=0; i <botoes.length;i++){
botoes[i].onclick = function(){
    botoes [i].classList.add("ativo");
}

}
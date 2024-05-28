const cards = document.querySelectorAll('.card')

for (const card of cards) {
    card.setAttribute('style', 'background-color: #FB7500;')
}

const tituloCards = document.querySelectorAll('.titulo_card')

for (const tituloCard of tituloCards) {
    tituloCard.setAttribute('style', 'color: #2B385B; margin:10px;')
    tituloCard.innerHTML = "Meu Card"
}

const descricaoCards = document.querySelectorAll('.descricao_card')

for (const descricaoCard of descricaoCards) {
    descricaoCard.setAttribute('style', 'color: white; margin: 20px 0px; font-size: 15px')
    descricaoCard.innerHTML = "Descrição modificada pelo JavaScript"
}

const botoesEditar = document.querySelectorAll('.botao_ed')

for (const botaoEditar of botoesEditar) {
    botaoEditar.setAttribute('style', 'background-color:Green; color:white; border: 1px solid green; width:70px; height:40px;  border-radius: 10px; margin-top:10px')
}

const botoesApagar = document.querySelectorAll('.botao_ap')

for (const botaoApagar of botoesApagar) {
    botaoApagar.setAttribute('style', 'background-color:red; color:white; border: 1px solid red; width:70px; height:40px;  border-radius: 10px; margin-top:10px')
}


function editar() {
    alert("Clicou em Editar")
}


function deletar() {
    let confirma = true
    confirma = confirm("Tem certeza que deseja apagar?")
    if (confirma) {
        alert("Confirmado!")
    }else {
        alert("Cancelou!")
    }
}
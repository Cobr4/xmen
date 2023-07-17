// alert('Ola')
// console.log('Ola console')
// const itemCiclope = console.getElementById('ciclope')
// class personagem
const personagens =  document.querySelectorAll('.personagem')
// Erro pois o addEventListener nao carrega lista  
//  () => {} arrow function
// personagens.addEventListener('click', () => {
//     console.log('Clicou')
// })
// criando laço com forEach
personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter',() =>{
        // melhorar o comportamento da pagina em celular
        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior:'smooth'})
        }
        // removendo a seleçao para depois selecionar
        // (macete) refatorado foi criado a funçao (seleciona a linha, direito mouse, refactor, extract... global...)
        removerSelecaoPersonagem()
        // selecionando
        personagem.classList.add('selecionado')

        // personagem grande
        const imagemPersonagemGrande = document.querySelector('.personagem-grande')
        // Alterar imagem]
        const idPersonagem = personagem.attributes.id.value
        imagemPersonagemGrande.src = `./imagens/card-${idPersonagem}.png`
        // alterar nome
        const nomePersonagem = document.getElementById('nome-personagem')
        nomePersonagem.innerText = personagem.getAttribute('data-name')
        // alterar descriçao
        const descricaoPersonagem = document.getElementById('descricao-personagem')
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')

    })
})

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}

// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.replace('./gameover.html')
  } else if (numEscolha == 2) {
    window.location.assign('./noel3.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - ir sem alimentar.
  2 - alimentar e dar agua para seguir com a longa noite.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Você não alimentou as renas o dia todo, assim elas ficaram muito cansadas e com fome e pararam no meio do caminho, sendo assim ninguém recebeu presente e toda a alegria do natal se acabou =( . '
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'você alimentou todas as renas, escovou os pelo delas, deixou elas prontas para sair, e foi acertar os ultimos detalhes para então sair para noite especial de natal'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
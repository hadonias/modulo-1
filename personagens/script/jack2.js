// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.replace('./gameover.html')
  } else if (numEscolha == 2) {
    window.location.assign('frost3.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - ir pela entrada da fabrica.
  2 - ir pelos fundos, longe da visão de todos.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'você entrou pela frente, os doendes te avistaram ao longe e você foi capturado. '
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'você conseguiu entrar pelos fundos da fabrica sem ninguém te avistar !!'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
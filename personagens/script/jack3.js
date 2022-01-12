// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.replace('./gameover.html')
  } else if (numEscolha == 2) {
    window.location.assign('./vitoria.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - ir sem olhar porque está tudo dentro do carrinho, pronto para zarpar!
  2 - pedir para seu ajudante conferir junto com você se está tudo dentro do carrinho, e fazer ultimo check list para então zarpar.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Você zarpou com seu fiel ajudante porém quando chegou na primeira casa se deu conta de que esqueceu a bolsa de presente =o, NOOO !!! assim ninguém recebeu presente e toda a alegria do natal se acabou =( . '
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'você pediu para seu ajudante jack frost te ajudar a conferir tudo, e ele lhe diz que está quase tudo pronto, só falta a bolsa de presentes para as criaças do mundo, uffa, foi por pouco mas está tudo pronto, então ZARPAR !!'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
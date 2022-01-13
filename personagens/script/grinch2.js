
var button = document.querySelector('#button')

button.addEventListener('click', selecionarPersonagem)

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.replace('./gameover.html')
  } else if (numEscolha == 2) {
    window.location.assign('./grinch3.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
        prompt(`Faça sua escolha:
        1 - se disfarçar de doende e ir pela entrada.
        2 - ir pelos fundos, longe da visão de todos para não ser percebido.
      
        Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'você entrou pela frente disfarçado, mas você é muito diferente de um doende,  você foi capturado. '
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'você conseguiu entrar pelos fundos da fabrica sem ninguém te avistar !! ..'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}

var button = document.querySelector('#button')

button.addEventListener('click', selecionarPersonagem)

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.replace('./gameover.html')
  } else if (numEscolha == 2) {
    window.location.assign('grinch2.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
    1 — ficar em casa com seu amado cachorro Max e aproveitar o natal como todo mundo.
    2 — ir em direção a fábrica do noel e estragar os planos dele para entregar presentes, trazendo tristeza para todos na manhã de natal.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Você ficou em casa, noel entregou os presentes, todas as pessoas da cidade gritando de felicidade oque lhe trouxe ainda mais raiva e ódio sobre o natal. '
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'Você decidiu que se você não tem natal com presentes, então ninguém também terá, e vai em direção a fábrica do noel..'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
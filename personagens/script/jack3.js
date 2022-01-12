// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.replace('./gameover.html')
  } else if (numEscolha == 2) {
    window.location.assign('./jackwin.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - agora que conheçeu a fabrica, ir embora e dizer a todos com chegar nela?
  2 - ir de encontro ao papai noel e pedir para ele te deixar ser seu ajudante e realizar seu grande sonho de trazer a felicidade a todos.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      ' você escolheu sair da fabrica, más se arrependeu no fim e decidir voltar, no meio do caminho os doendes te encontraram e você foi capturado. '
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'você foi de encontro ao bom noel, pediu humildemente para ele te deixar ser um ajudante em sua aventura,  '
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
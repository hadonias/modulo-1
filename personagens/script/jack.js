// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.replace('./gameover.html')
  } else if (numEscolha == 2) {
    window.location.assign('frost2.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - seguir o mapa e ignorar seu instinto.
  2 - seguir seus instinto de aventureiro e ignorar o mapa que está lhe dizendo a localização.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Você continuou seguindo o mapa e ignorou seu instinto , o mapa estava errado e você se perdeu completamente, sua aventura  acabou =( . '
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'você seguiu seus intinsto, ignorando completamente aquele falso mapa, seus instinto estavam correto, você chegou a fabrica do papai noel'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
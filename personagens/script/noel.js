// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.replace('./gameover.html')
  } else if (numEscolha == 2) {
    window.location.assign('./noel2.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - continuar deitado e dormir.
  2 - levantar e ir se arrumar para entregar os presentes.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Você continuou dormindo e ninguém recebeu presente de natal, assim toda a alegria do natal se acabou =( . '
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'você levantou se arrumou, deixou a roupa bem bonita, a barba e o cabelo bem arrumado e foi em arrumar o resto das coisas para entregas os presentes'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
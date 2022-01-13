
var button = document.querySelector('#button')

button.addEventListener('click', selecionarPersonagem)

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.replace('./gameover.html')
  } else if (numEscolha == 2) {
    window.location.assign('./grinchwin.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - agora que está dentro da fabrica, oque irá fazer? ignorar seu sentimento confuso e estragar definido o natal do papai noel ?
  2 - confiar no seu sentimento confuso e ir de encontro ao papai noel pedir para ele te ajudar a conhecer seu sentimento, pedir para ser ajudante e ter um natal feliz.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      ' você escolheu estragar o natal, mas o ajudante do papai noel chamado jack frost te encontrou, ele chamou os doedes e você foi capturado e nunca mais viu o max e perdeu a alegria para sempre. '
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'você foi de encontro ao bom noel, pediu humildemente para ele te deixar ser um ajudante para descobrir seu sentimento, papai noel te aceitou e trouxe seu cachorro max, para todos passarem um natal feliz. '
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
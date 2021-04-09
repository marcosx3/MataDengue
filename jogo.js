
var altura = 0
var largura = 0

function ajustaTela() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura)
}

ajustaTela()


function posicaoRandomica() {
	//se ja existir mosquito e excluido
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()
	}

	var posicaoX = Math.floor(Math.random() * largura) - 120
	var posicaoY = Math.floor(Math.random() * altura) - 120
	console.log(posicaoX, posicaoY)
	// testando se for menor que 0
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.id = 'mosquito'
	mosquito.style.position = 'absolute'
	document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch (classe) {
		case 0:
			return 'mosquito'
		case 1:
			return 'mosquito1'
		case 2:
			return 'mosquito2'
	}
}
function ladoAleatorio() {
	var lado = Math.floor(Math.random() * 2)

	switch (lado) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'

	}

}
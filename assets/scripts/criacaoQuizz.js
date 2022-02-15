function verificarCriacao_1() {
	const criacaoQuizzTitulo = document.querySelector(".criacao-titulo").value;
	const criacaoQuizzImg = document.querySelector(".criacao-img").value;
	const criacaoQuizzQtdPerguntas = document.querySelector(
		".criacao-quantidade-perguntas"
	).value;
	const criacaoQuizzQtdNiveis = document.querySelector(
		".criacao-quantidade-niveis"
	).value;
	mostrarTelaDePerguntas(criacaoQuizzQtdPerguntas);
}

function mostrarTelaDePerguntas(perguntas) {
	console.log(perguntas);
	const telaPerguntas = document.querySelector(".tela-perguntas");
	const telaCriacao = document.querySelector(".tela-infos-basicas");

	telaPerguntas.classList.remove("hidden");
	telaCriacao.classList.add("hidden");

	let containerPerguntas = "";

	for (let i = 0; i < parseInt(perguntas); i++) {
		containerPerguntas += `
		<div class="caixa-adicao" onclick="editarPergunta(this)">
			<h3 class="add-title">Pergunta ${i + 1}</h3>
			<ion-icon class = "pencil" name="create-outline"></ion-icon>
		</div>

		
		`;
	}

	telaPerguntas.innerHTML += `
		<div class = "conteudo-criacao">
			<p class = "instrucao">Crie suas perguntas</p>
			${containerPerguntas}
			<button type="submit" class="botao-prosseguir">
				<p class="texto-botao-prosseguir">
					Prosseguir para criar níveis
				</p>
			</button>
		</div>	



	`;
}

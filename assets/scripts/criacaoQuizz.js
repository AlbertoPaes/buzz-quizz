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
			<h3>Pergunta ${i + 1}</h3>
			<ion-icon class = "pencil" name="create-outline"></ion-icon>
			<form
				class = "hidden" 
				onsubmit="verificarPerguntas(); return false"
				accept-charset="utf-8"
				name="info-perguntas" >
				<div class = "pergunta caixa-input-pergunta">
					<input 
						placeholder = "Texto da pergunta"
						id = "input-box"
						class="texto-pergunta caixa-input-pergunta"
						name = "texto_pergunta"
						type = "text"
						minlenght = "20"
						required
					/>
					<input 
						placeholder = "Qual a cor de fundo da pergunta"
						id = "input-box"
						class="cor-de-fundo-pergunta caixa-input-pergunta"
						name = "cor_de_fundo_pergunta"
						type = "text"
						required
					/>
				</div>
				<div class = "resposta-correta caixa-input-pergunta">
					<h3>Resposta correta</h3>
					<input
						placeholder = "Resposta Correta"
						id = "input-box"
						class="texto-resposta-correta " 
						name = "texto_resposta_correta"
						type = "text"
						minlenght = "1"
						required
					/>
					<input
						placeholder = "URL da imagem"
						id = "input-box"
						class="url-img-resposta-correta"
						name = "url_img_resposta_correta"
						type = "url"
						required
					/>
				</div>

				<div class = "respostas-incorretas">
					<h3>Respostas incorretas</h3>
					<div class ="resposta-incorreta caixa-input-pergunta">
						<input
							placeholder = "Resposta incorreta 1"
							id = "input-box"
							class="texto-resposta-incorreta1"
							name = "texto_resposta_incorreta1"
							type = "text"
							minlenght = "1"
							required
						/>
						<input
							placeholder = "URL da imagem"
							id = "input-box"
							class="url-img-resposta-incorreta1"
							name = "url_img_resposta_incorreta1"
							type = "url"
							required
						/>
					</div>

					<div class ="resposta-incorreta caixa-input-pergunta">
						<input
							placeholder = "Resposta Correta"
							id = "input-box"
							class="texto-resposta-correta"
							name = "texto_resposta_correta"
							type = "text"
							minlenght = "1"
							required
						/>
						<input
							placeholder = "URL da imagem"
							id = "input-box"
							class="url-img-resposta-correta"
							name = "url_img_resposta_correta"
							type = "url"
							required
						/>
					</div>

					<div class ="resposta-incorreta caixa-input-pergunta">
						<input
							placeholder = "Resposta Correta"
							id = "input-box"
							class="texto-resposta-correta"
							name = "texto_resposta_correta"
							type = "text"
							minlenght = "1"
							required
						/>
						<input
							placeholder = "URL da imagem"
							id = "input-box"
							class="url-img-resposta-correta"
							name = "url_img_resposta_correta"
							type = "url"
							required
						/>
					</div>
				</div>
			
			
	
			</form>
	
		</div>

		
		`;
	}

	telaPerguntas.innerHTML += `
	<p class = "instrucao">Crie suas perguntas</p>
		<div class = "conteudo-criacao">
			${containerPerguntas}
			<button type="submit" class="botao-prosseguir">
				<p class="texto-botao-prosseguir">
					Prosseguir para criar níveis
				</p>
			</button>
		</div>	



	`;
}

function editarPergunta(divPergunta) {
	const ativo = document.querySelector(".ativo");
	if (ativo !== null) {
		ativo.classList.remove("ativo");
		console.log(ativo.children[1]);
		ativo.children[1].classList.remove("hidden");
		ativo.children[2].classList.add("hidden");
	}

	divPergunta.children[1].classList.add("hidden");
	divPergunta.children[2].classList.remove("hidden");
	divPergunta.classList.add("ativo");
}

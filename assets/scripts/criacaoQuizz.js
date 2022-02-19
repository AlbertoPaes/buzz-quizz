let dadosBasicosCriacao;
let dadosQuizz;
let listaIds = [];

function verificarCriacao_1() {
	const criacaoQuizzTitulo = document.querySelector(".criacao-titulo").value;
	const criacaoQuizzImg = document.querySelector(".criacao-img").value;
	const criacaoQuizzQtdPerguntas = document.querySelector(
		".criacao-quantidade-perguntas"
	).value;
	const criacaoQuizzQtdNiveis = document.querySelector(
		".criacao-quantidade-niveis"
	).value;
	dadosQuizz = {
		title: criacaoQuizzTitulo,
		image: criacaoQuizzImg,
		questions: [],
		levels: [],
	};
	dadosBasicosCriacao = {
		titulo: criacaoQuizzTitulo,
		imagem: criacaoQuizzImg,
		qtdPerguntas: criacaoQuizzQtdPerguntas,
		niveis: criacaoQuizzQtdNiveis,
	};
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
		<div class="caixa-adicao" onclick="editar(this)">
			<h3>Pergunta ${i + 1}</h3>
			<ion-icon class = "pencil" name="create-outline"></ion-icon>
			<div class = "container-form-perguntas hidden">
				<div class = "pergunta caixa-input-pergunta">
					<input 
						placeholder = "Texto da pergunta"
						id = "input-box"
						class="texto-pergunta caixa-input-pergunta"
						name = "texto_pergunta"
						minlenght = "20"
						required
					/>
					<input 
						placeholder = "Qual a cor de fundo da pergunta"
						id = "input-box"
						class="cor-de-fundo-pergunta caixa-input-pergunta"
						name = "cor_de_fundo_pergunta"
						type = "text"
						pattern = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
						required
					/>
				</div>
				<h3>Resposta correta</h3>
				<div class = "resposta-correta caixa-input-pergunta">
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

				<h3>Respostas incorretas</h3>
				<div class = "respostas-incorretas">
					<div class ="resposta-incorreta caixa-input-pergunta">
						<input
							placeholder = "Resposta incorreta 1"
							id = "texto-resposta-incorreta1"
							name = "texto_resposta_incorreta1"
							type = "text"
							minlenght = "1"
							required
						/>
						<input
							placeholder = "URL da imagem"
							id = "url-img-resposta-incorreta1"
							name = "url_img_resposta_incorreta1"
							type = "url"
							required
						/>
					</div>

					<div class ="resposta-incorreta caixa-input-pergunta">
						<input
							placeholder = "Resposta inorreta 2"
							id = "texto-resposta-incorreta2"
							name = "texto_resposta_incorreta2"
							type = "text"
							minlenght = "1"
							
						/>
						<input
							placeholder = "URL da imagem"
							id = "url-img-resposta-incorreta2"
							name = "url_img_resposta_incorreta2"
							type = "url"
							
						/>
					</div>

					<div class ="resposta-incorreta caixa-input-pergunta">
						<input
							placeholder = "Resposta incorreta 3"
							id = "texto-resposta-incorreta3"
							name = "texto_resposta_incorreta3"
							type = "text"
							minlenght = "1"
							
						/>
						<input
							placeholder = "URL da imagem"
							id = "url-img-resposta-incorreta3"
							name = "url_img_resposta_incorreta3"
							type = "url"
							
						/>
					</div>
				</div>
			</div>
				
		
		</div>

		
		`;
	}

	telaPerguntas.innerHTML += `
	<p class = "instrucao">Crie suas perguntas</p>
	<div class = "conteudo-criacao">
		<form
		onsubmit = "verificarPerguntas(); return false"
		accept-charset="utf-8"
		name="info-perguntas" >

			${containerPerguntas}
		
			<button type="submit" class="botao-prosseguir">
				<p class="texto-botao-prosseguir">
					Prosseguir para criar níveis
				</p>
			</button>
		</form>
	</div>	



	`;
}

function editar(div) {
	const ativo = document.querySelector(".ativo");
	if (ativo !== null) {
		ativo.classList.remove("ativo");
		ativo.children[1].classList.remove("hidden");
		ativo.children[2].classList.add("hidden");
		ativo.children[0].classList.remove("margem");
	}
	div.children[0].classList.add("margem");
	div.children[1].classList.add("hidden");
	div.children[2].classList.remove("hidden");
	div.classList.add("ativo");
}

function verificarPerguntas() {
	console.log("entrou");
	const perguntas = [...document.querySelectorAll(".container-form-perguntas")];
	console.log(perguntas);
	perguntas.forEach((divPergunta) => {
		console.log(divPergunta.children[0].children[0].value);
		const dadosPerguntas = {
			title: divPergunta.children[0].children[0].value,
			color: divPergunta.children[0].children[1].value,
			answers: [
				{
					text: divPergunta.children[2].children[0].value,
					image: divPergunta.children[2].children[1].value,
					isCorrectAnswer: true,
				},
				{
					text: divPergunta.children[4].children[0].children[0].value,
					image: divPergunta.children[4].children[0].children[1].value,
					isCorrectAnswer: false,
				},
				{
					text: divPergunta.children[4].children[1].children[0].value,
					image: divPergunta.children[4].children[1].children[1].value,
					isCorrectAnswer: false,
				},
				{
					text: divPergunta.children[4].children[2].children[0].value,
					image: divPergunta.children[4].children[2].children[1].value,
					isCorrectAnswer: false,
				},
			],
		};
		dadosQuizz.questions.push(dadosPerguntas);
	});

	mostrarTelaDeNiveis(dadosBasicosCriacao.niveis);
}

function mostrarTelaDeNiveis(niveis) {
	console.log(niveis);
	const telaPerguntas = document.querySelector(".tela-perguntas");
	const telaNiveis = document.querySelector(".tela-niveis");
	telaPerguntas.classList.add("hidden");
	telaNiveis.classList.remove("hidden");

	let containerNiveis = "";
	for (let i = 0; i < parseInt(niveis); i++) {
		console.log(i + 1);
		containerNiveis += `
		<div class="caixa-adicao" onclick="editar(this)">
			<h3>Nivel ${i + 1}</h3>
			<ion-icon class = "pencil" name="create-outline"></ion-icon>
			<div class = "container-form hidden">
				<div class = "caixa-input">
					<input 
						placeholder = "Titulo do nível"
						id = "titulo-nivel"
						name = "titulo_nivel"
						type = "text"
						minlenght = "10"
						required
					/>
					<input 
						placeholder = "% de acerto mínima"
						id = "porcentagem-acerto"
						name = "porcentagem_de_acerto_minima"
						type = "number"
						min = "0"
						max = "100"
						required
					/>
					<input
						placeholder = "URL da imagem do nível"
						id = "imagem-nivel" 
						name = "url_imagem_nivel"
						type = "url"
						required
					/>
					<textarea class ="descricao" placeholder = "Descrição do nível" id = "descricao-nivel" name = "descricao_nivel" minlength = "30"  type = "text" required></textarea>
				
				</div>
			</div>
		</div>
	`;
	}

	telaNiveis.innerHTML = `
	<p class = "instrucao">Agora, decida os níveis!</p>
	<div class = "conteudo-criacao">
		<form
		onsubmit = "verificarNiveis(); return false"
		accept-charset="utf-8"
		name="info-perguntas" >
			${containerNiveis}		
			<button type="submit" class="botao-prosseguir">
				<p class="texto-botao-prosseguir">
					Finalizar Quizz
				</p>
			</button>
		</form>
	</div>	
	`;
}

function verificarNiveis() {
	const niveis = [...document.querySelectorAll(".container-form")];

	niveis.forEach((nivel) => {
		const dadosNiveis = {
			title: nivel.children[0].children[0].value,
			image: nivel.children[0].children[2].value,
			text: nivel.children[0].children[3].value,
			minValue: parseInt(nivel.children[0].children[1].value),
		};
		dadosQuizz.levels.push(dadosNiveis);
	});
	enviarQuizz(dadosBasicosCriacao.imagem);
}

function enviarQuizz(url) {
	mostrarLoading();
	dadosQuizz.questions.map((pergunta) => {
		const respostas = pergunta.answers.filter((resposta) => {
			if (resposta.text === "") {
				return false;
			} else {
				return true;
			}
		});
		pergunta.answers = respostas;
	});

	const niveis = dadosQuizz.levels;
	if (niveis[0].minValue !== 0) {
		niveis[0].minValue = 0;
	}
	console.log(dadosQuizz);
	const envio = axios.post(`${BASE_URL}/quizzes`, dadosQuizz);
	envio.then((resposta) => {
		removerLoading();
		salvarID(resposta.data.id);
		mostrarTelaFinal(resposta.data.id);
	});
	envio.catch((erro) => {
		console.log(dadosQuizz);
		alert(erro.response);
	});
}

function salvarID(idQuizz) {
	if (localStorage.getItem("id")) {
		localStorage.getItem("id");
		const id = JSON.parse(localStorage.getItem("id"));
		id.push(idQuizz);
		localStorage.setItem("id", JSON.stringify(id));
	} else {
		localStorage.setItem("id", JSON.stringify([idQuizz]));
	}
}

function mostrarTelaFinal(idDoQuizzCriado) {
	const telaFinal = document.querySelector(".tela-final");
	const telaNiveis = document.querySelector(".tela-niveis");
	telaNiveis.classList.add("hidden");
	telaFinal.classList.remove("hidden");

	telaFinal.innerHTML = `
	<h3 class = "instrucao">Seu quizz está pronto!</h3>
	<div onclick ="acessarQuizz(${idDoQuizzCriado.toString()})" class="container-imagem">
		<img src="${dadosBasicosCriacao.imagem}"/>
		<div class="sombra-imagem"></div>
		<span>${dadosBasicosCriacao.titulo}</span>
	</div>
	<button onclick = "acessarQuizz(${idDoQuizzCriado.toString()})"class="botao-prosseguir">
	<p class="texto-botao-prosseguir">
		Acessar Quizz
	</p></button>
	<p class= "botao-voltar" onclick = "voltarHome()">Voltar pra Home</p>


			
			`;
}

function acessarQuizz(id) {
	mostrarLoading();
	const telaFinal = document.querySelector(".tela-final");
	const quizz = axios.get(`${BASE_URL}/quizzes/${id}`);
	telaFinal.classList.add("hidden");
	quizz.then(telaDeQuizz);
	quizz.catch(erroAxios);
}

const URL_BASE = "https://mock-api.driven.com.br/api/v4/buzzquizz";
let porcentagemDeAcertos = 0;

function disporQuizes() {
	const promessa = axios.get(`${URL_BASE}/quizzes`);
	promessa.then((resposta) => {
		console.log(resposta.data);
		const listaQuizes = resposta.data;
		const caixaQuizes = document.querySelector(".caixa-quizz");
		listaQuizes.map(
			(quiz) =>
				(caixaQuizes.innerHTML += `<div class="quizzes-de-outros" onclick='irPraTelaQuiz(${quiz.id})' data-identifier="quizz-card">
        <img src="${quiz.image}"/>
        <div class="sombra-imagem"></div>
        <span>${quiz.title}</span>
      </div>`)
		);
	});

	promessa.catch(erroAxios);
}

function irPraTelaQuiz(id) {
	const telaInicial = document.querySelector(".corpo-pagina-inicial");
	const quizz = axios.get(`${URL_BASE}/quizzes/${id}`);

	telaInicial.classList.add("hidden");
	quizz.then((resposta) => {
		const quizAtual = resposta.data;
		const corpo = document.querySelector("body");
		let caixaDeRespostas = "";

		quizAtual.questions.map(
			(item) =>
				(caixaDeRespostas += `<div class="container-pergunta-individual">
        <div class="container-titulo-pergunta-individual" style="background-color: ${
					item.color
				};">
            <h2 style=" color: ${
							item.color >= "#7FFFFF" ? "black" : "white"
						}">${item.title}</h2>
        </div>
        <div class="container-respostas-pergunta-individual">
        </div>        
    </div>`)
		);

		corpo.innerHTML += `
    <div class="pagina-de-um-quizz">
      <div class="container-foto-de-capa-quizz">
          <img src="${quizAtual.image}"/>
          <span>${quizAtual.title}</span>
      </div>
      ${caixaDeRespostas}

    <div class="container-fim-quizz hidden">
        <div class="container-resultado" data-identifier="quizz-result">
            <h1 class="tituloFimQuizz" >${porcentagemDeAcertos}% de acerto: ${quizzAtual.levels[0].title}</h1>
        </div>
        <div class="imagem-e-descricao">
            <img src=${quizzAtual.levels[0].image}"/>
            <p class= "textoQuizz">${quizzAtual.levels[0].text}
            </p>
        </div>
        <button class="reiniciar-quizz" onclick="reiniciarQuizz(${quizzAtual.id})">
            Reiniciar Quizz
        </button>
        <button  id='fullReset' class="voltar-home"  onclick="voltarTela('.corpo-pagina-inicial', '.pagina-de-um-quizz')">
            Voltar para home
        </button>
    </div>
  </div> 
  `


function mostrarTelaDeCriacao() {
	const telaInicial = document.querySelector(".corpo-pagina-inicial");
	const telaCriacao = document.querySelector(".tela-infos-basicas");

	telaCriacao.classList.remove("hidden");
	telaInicial.classList.add("hidden");
}

function voltarHome(){
    document.location.reload(true);
}

function exibirRespostasQuizz(respostas,qtdDeCadaResposta){
  let ARRAY_RESPOSTAS = [];
  console.log(respostas);

  respostas.forEach( (item) => {
    ARRAY_RESPOSTAS.push(
    `<div class="container-resposta-indivual ${(item.isCorrectAnswer === true) ? "resposta-correta" : "resposta-errada"}        "onclick="selecionarResposta(this, ${qtdDeCadaResposta})" data-identifier="answer">
            <img src="${item.image}"/>
            <span>${item.text}</span>
     </div>`);
  });
  console.log(ARRAY_RESPOSTAS);
  ARRAY_RESPOSTAS.sort(randomizador);
  return ARRAY_RESPOSTAS;


}

function erroAxios() {
	alert(
		"Houve uma falha na comunicação com o servidor, tente novamente mais tarde"
	);
	window.location.reload();
	}

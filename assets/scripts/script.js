const URL_BASE = "https://mock-api.driven.com.br/api/v4/buzzquizz";
let porcentagemDeAcertos = 0;


function disporQuizes(){
  const promessa = axios.get(`${URL_BASE}/quizzes`);
  promessa.then( (resposta) => {
    const listaQuizes = resposta.data;
    const caixaQuizes = document.querySelector(".caixa-quizz");
    listaQuizes.map( quiz => 
      caixaQuizes.innerHTML +=
      `<div class="quizzes-de-outros" onclick='irPraTelaQuiz(${quiz.id})' data-identifier="quizz-card">
        <img src="${quiz.image}"/>
        <div class="sombra-imagem"></div>
        <span>${quiz.title}</span>
      </div>`
    );
  });

  promessa.catch(erroAxios);
}

function irPraTelaQuiz(id){
  const telaInicial = document.querySelector(".corpo-pagina-inicial");
  const quizz = axios.get(`${URL_BASE}/quizzes/${id}`)

  telaInicial.classList.add("hidden");
  quizz.then( (resposta) => {
    const quizAtual = resposta.data;
    const corpo = document.querySelector("body");
    let caixaDeRespostas = "";

    quizAtual.questions.map( (item) =>
    caixaDeRespostas +=
    `<div class="container-pergunta-individual">
        <div class="container-titulo-pergunta-individual" style="background-color: ${item.color};">
            <h2 style=" color: ${item.color >= '#7FFFFF' ? 'black': 'white'}">${item.title}</h2>
        </div>
        <div class="container-respostas-pergunta-individual">
        </div>        
    </div>`
    )

    corpo.innerHTML += `
    <div class="pagina-de-um-quizz">
      <div class="container-foto-de-capa-quizz">
          <img src="${quizAtual.image}"/>
          <span>${quizAtual.title}</span>
      </div>
      ${caixaDeRespostas}

      <div class="container-fim-quizz hidden">
          <div class="container-resultado" data-identifier="quizz-result">
              <h1 class="tituloFimQuizz" >${porcentagemDeAcertos}% de acerto: ${quizAtual.levels[0].title}</h1>
          </div>
          <div class="imagem-e-descricao">
              <img src=${quizAtual.levels[0].image}"/>
              <p class= "textoQuizz">${quizAtual.levels[0].text}
              </p>
          </div>
          <button class="reiniciar-quizz" onclick="reiniciarQuizz(${quizAtual.id})">
              Reiniciar Quizz
          </button>
          <button  id='fullReset' class="voltar-home" onclick="voltarTela('.corpo-pagina-inicial', '.pagina-de-um-quizz')">
              Voltar para home
          </button>
      </div>
    </div> 
    `
  })

}

function erroAxios(){
  alert("Houve uma falha na comunicação com o servidor, tente novamente mais tarde");
  window.location.reload();
}
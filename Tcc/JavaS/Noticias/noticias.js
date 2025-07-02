// Dados das notícias (agora com propriedade 'link' adicionada)
const noticias = [
 {
        imagem: "../../Imagens/noticia1.jpg",
        titulo: "Mães Solo: Juntos Podemos Construir um Lar Digno",
        descricao: "Saiba como ajudar mães solteiras a conquistarem uma moradia digna",
        link: "Tcc/Html/Noticias/Noticia1.html" // Link adicionado
    },
    {
        imagem: "../../Imagens/noticia2.png",
        titulo: "LGBTQIA+Moradia:",
        descricao: "Todes merecem um lar digno para viver",
        link: "lgbtqia-moradia.html" // Link adicionado
    },
    {
        imagem: "../../Imagens/noticia3.jpg",
        titulo: "Onde mora a esperança:",
        descricao: "Exposiçao convida a refletir sobre a potencia transformadora da moradia digna",
        link: "esperanca-moradia.html" // Link adicionado
    },
    {
        imagem: "../../Imagens/noticia4.png",
        titulo: "Habitat para a Humanidade revela: Moradia digna transforma saúde das mulheres em comunidades carentes",
        descricao: "Novo relatório da Habitat para a Humanidade vincula melhorias habitacionais em comunidades e favelas urbanas a benefícios importantes para a saúde das mulheres",
        link: "habitat-saude-mulheres.html" // Link adicionado
    },
    {
        imagem: "../../Imagens/noticia 5.jpg",
        titulo: "Serviços de consultoria pedagógica especializada",
        descricao: "Contratação de consultoria pedagógica para oficinas de saneamento em 33 escolas do Marajó, com capacitação de educadores e materiais didáticos.",
        link: "consultoria-pedagogica.html" // Link adicionado
    },
    {
        imagem: "../../Imagens/noticia6.jpg",
        titulo: "Reconstruindo Vidas: A Restauração de Moradias no RS Pós-Tragédia Climática",
        descricao: "A restauração de moradias no Rio Grande do Sul após enchentes e tragédia climática",
        link: "restauracao-rs.html" // Link adicionado
    },
  {
        imagem: "../../Imagens/noticia7.jpg",
        titulo: "Acampamento Terra Livre: a luta de povos indígenas por direito à moradia digna e demarcação de terras",
        descricao: "A luta dos povos indígenas por moradia digna no Brasil se junta a de todos, uma vez que reconhecemos as desigualdades históricas e a negação", 
        link: "",
    },
    {
        imagem: "../../Imagens/noticia8.jpg",
        titulo: "E para os idosos, como fica o direito à cidade?",
        descricao: "Envelhecer deveria ser, acima de tudo, uma conquista social. Mas, no Brasil, o avanço da idade expõe vulnerabilidades profundas, principalmente quando falamos sobre o direito", 
        link: "",
    },
    {
        imagem: "../../Imagens/noticia9.png",
        titulo: "Relatório Anual – 2024",
        descricao: "A Habitat para a Humanidade Brasil torna público o Relatório de Atividades Anual de 2024, apresentando os resultados alcançados por meio do trabalho construtivo, social", 
        link: "",
    },
];

// Função para criar os elementos das notícias
function criarNoticias() {
    const container = document.getElementById('meuContainer');

    noticias.forEach(noticia => {
        const noticiaItem = document.createElement('div');
        noticiaItem.className = 'noticia-item';

        // Criação da imagem se existir no objeto noticia
        let imagemHTML = '';
        if (noticia.imagem) {
            imagemHTML = `<img src="${noticia.imagem}" alt="${noticia.titulo}" class="noticia-imagem" onerror="this.src='imagens/placeholder.jpg'">`;
        } else {
            // Imagem padrão caso não tenha imagem definida
            imagemHTML = `<div class="noticia-sem-imagem"></div>`;
        }

        const conteudoNoticia = `
            ${imagemHTML}
            <div class="noticia-conteudo">
                <h3 class="noticia-titulo">${noticia.titulo}</h3>
                <p class="noticia-descricao">${noticia.descricao}</p>
                <span class="noticia-data">${noticia.data || ''}</span>
            </div>
        `;
        
        noticiaItem.innerHTML = noticia.link 
            ? `<a href="${noticia.link}" class="noticia-link">${conteudoNoticia}</a>`
            : conteudoNoticia;

        container.appendChild(noticiaItem);
    })
}
// Chamada da função quando a página carregar
window.onload = criarNoticias;

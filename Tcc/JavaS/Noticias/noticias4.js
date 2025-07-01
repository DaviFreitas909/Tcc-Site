// Dados das notícias (agora com propriedade 'link' adicionada)
const noticias = [
    {
        imagem: "/Tcc/Imagens/noticia27.jpeg",
        titulo: "Eu moro aqui: documentário retrata a luta por moradia digna",
        descricao: "Lançado oficialmente nesta quinta-feira, 7 de novembro, o documentário “Eu moro aqui” mergulha em histórias de resistência e construção coletiva, retratando a luta por moradia", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia28.jpg",
        titulo: "Importância das melhorias habitacionais para famílias em vulnerabilidade",
        descricao: "Um lar seguro e adequado não é apenas um teto para se abrigar das intempéries, mas sim a base fundamental para uma vida digna e", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia29.jpg",
        titulo: "Falta de saneamento básico favorece a proliferação do mosquito da dengue",
        descricao: "A proliferação do mosquito da dengue tem se mostrado uma preocupante realidade em diversos estados brasileiros, com um número crescente de casos reportados anualmente. Mas", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia30.jpg",
        titulo: "Qual o impacto da ausência de saneamento básico na desnutrição infantil",
        descricao: "Você sabia que a falta de água limpa e esgoto tratado pode deixar as crianças doentes e atrapalhar o crescimento delas? Isso mesmo!", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia31.jpg",
        titulo: "Edital de apoio a iniciativas populares de água e saneamento no Norte e Nordeste",
        descricao: "A Habitat para a Humanidade Brasil torna público, nesta segunda-feira, 28 de outubro de 2024, o edital de apoio a iniciativas populares voltadas à defesa", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia32.jpg",
        titulo: "Direito à terra: importância para os povos originários e quilombolas",
        descricao: "O direito à terra é essencial para a sobrevivência e preservação cultural dos povos originários e quilombolas, pois ele garante que essas comunidades mantenham suas", 
        link: "",
    },
  {
        imagem: "/Tcc/Imagens/noticia33.jpg",
        titulo: "Importância da agricultura familiar para indígenas e quilombolas",
        descricao: "Você sabia que a agricultura familiar é a base da alimentação de milhões de brasileiros? E que, para os povos indígenas e quilombolas, essa importância", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia34.jpg",
        titulo: "Como o planejamento urbano pode reduzir as desigualdades na cidade?",
        descricao: "É só passar pelas grandes cidades para entender o que a falta de planejamento urbano causa. Desigualdade, segregação espacial, ausência de moradia digna e até", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia35.jpg",
        titulo: "Urbanismo social no Brasil: uma resposta à desigualdade nas cidades",
        descricao: "As cidades brasileiras são palco de grandes desigualdades sociais. A falta de acesso à moradia digna, à infraestrutura urbana adequada e aos serviços essenciais afeta", 
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
    });
}

// Chamada da função quando a página carregar
window.onload = criarNoticias;
const noticias = [
    {
        imagem: "../Imagens/noticia1.jpg", // Corrigido para subir dois níveis
        titulo: "Mães Solo: Juntos Podemos Construir um Lar Digno",
        descricao: "Saiba como ajudar mães solteiras a conquistarem uma moradia digna",
        link: "../Html/Noticias/Noticia1.html" // Corrigido caminho relativo
    },
    {
        imagem: "../Imagens/noticia2.png",
        titulo: "LGBTQIA+Moradia:",
        descricao: "Todes merecem um lar digno para viver",
        link: "../Html/Noticias/Noticia2.html"
    },
    {
        imagem: "../Imagens/noticia3.jpg",
        titulo: "Onde mora a esperança:",
        descricao: "Exposiçao convida a refletir sobre a potencia transformadora da moradia digna",
        link: "../Html/Noticias/Noticia3.html"
    },
    {
        imagem: "../Imagens/noticia4.png",
        titulo: "Habitat para a Humanidade revela: Moradia digna transforma saúde das mulheres em comunidades carentes",
        descricao: "Novo relatório da Habitat para a Humanidade vincula melhorias habitacionais em comunidades e favelas urbanas a benefícios importantes para a saúde das mulheres",
        link: "../Html/Noticias/Noticia4.html"
    },
    {
        imagem: "../Imagens/noticia5.jpg", // Removido espaço no nome do arquivo
        titulo: "Serviços de consultoria pedagógica especializada",
        descricao: "Contratação de consultoria pedagógica para oficinas de saneamento em 33 escolas do Marajó, com capacitação de educadores e materiais didáticos.",
        link: "../Html/Noticias/Noticia5.html"
    },
    {
        imagem: "../Imagens/noticia6.jpg",
        titulo: "Reconstruindo Vidas: A Restauração de Moradias no RS Pós-Tragédia Climática",
        descricao: "A restauração de moradias no Rio Grande do Sul após enchentes e tragédia climática",
        link: "../Html/Noticias/Noticia6.html"
    },
];

// Função para criar os elementos das notícias
function criarNoticias() {
    const container = document.getElementById('meuContainer');

    noticias.forEach(noticia => {
        const noticiaItem = document.createElement('div');
        noticiaItem.className = 'noticia-item';

        let imagemHTML = '';
        if (noticia.imagem) {
            imagemHTML = `<img src="${noticia.imagem}" alt="${noticia.titulo}" class="noticia-imagem" onerror="this.src='../../Imagens/placeholder.jpg'">`;
        } else {
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

window.onload = criarNoticias;

// Dados das notícias (agora com propriedade 'link' adicionada)
const noticias = [
    {
        imagem: "../Imagens/noticia1.jpg",
        titulo: "Mães Solo: Juntos Podemos Construir um Lar Digno",
        descricao: "Saiba como ajudar mães solteiras a conquistarem uma moradia digna",
        link: "/Tcc/Html/Noticias/Noticia1.html" // Link adicionado
    },
    {
        imagem: "../Imagens/noticia2.png",
        titulo: "LGBTQIA+Moradia:",
        descricao: "Todes merecem um lar digno para viver",
        link: "/Tcc/Html/Noticias/Noticia2.html" // Link adicionado
    },
    {
        imagem: "../Imagens/noticia3.jpg",
        titulo: "Onde mora a esperança:",
        descricao: "Exposiçao convida a refletir sobre a potencia transformadora da moradia digna",
        link: "/Tcc/Html/Noticias/Noticia3.html" // Link adicionado
    },
    {
        imagem: "../Imagens/noticia4.png",
        titulo: "Habitat para a Humanidade revela: Moradia digna transforma saúde das mulheres em comunidades carentes",
        descricao: "Novo relatório da Habitat para a Humanidade vincula melhorias habitacionais em comunidades e favelas urbanas a benefícios importantes para a saúde das mulheres",
        link: "/Tcc/Html/Noticias/Noticia4.html" // Link adicionado
    },
    {
        imagem: "../Imagens/noticia 5.jpg",
        titulo: "Serviços de consultoria pedagógica especializada",
        descricao: "Contratação de consultoria pedagógica para oficinas de saneamento em 33 escolas do Marajó, com capacitação de educadores e materiais didáticos.",
        link: "/Tcc/Html/Noticias/Noticia5.html" // Link adicionado
    },
    {
        imagem: "../Imagens/noticia6.jpg",
        titulo: "Reconstruindo Vidas: A Restauração de Moradias no RS Pós-Tragédia Climática",
        descricao: "A restauração de moradias no Rio Grande do Sul após enchentes e tragédia climática",
        link: "/Tcc/Html/Noticias/Noticia6.html" // Link adicionado
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
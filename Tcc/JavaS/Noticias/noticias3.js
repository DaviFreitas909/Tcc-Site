// Dados das notícias (agora com propriedade 'link' adicionada)
const noticias = [
    {
        imagem: "/Tcc/Imagens/noticia18.jpg",
        titulo: "Habitat Brasil divulga organizações selecionadas em edital de iniciativas populares de água e saneamento no Norte e Nordeste",
        descricao: "Realizado com recursos da Oak Foundation, o edital integra o projeto “Fortalecendo o direito à terra urbana e justiça socioambiental em cidades brasileiras” e reforça", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia19.jpeg",
        titulo: "Nota de Solidariedade – Tragédia em Manaus/AM",
        descricao: "A tragédia aconteceu entre os dias 18 e 19 de janeiro e atingiu a região habitada por cerca de 50 famílias às margens do Igarapé", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia20.jpg",
        titulo: "Habitat para a Humanidade lamenta a morte do ex-presidente dos Estados Unidos Jimmy Carter",
        descricao: "Nós, da Habitat para a Humanidade Brasil, parte da rede Habitat For Humanity lamentamos a morte do ex-presidente dos Estados Unidos Jimmy Carter. ", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia21.jpg",
        titulo: "Como garantir o direito à moradia digna no Brasil?",
        descricao: "O direito à moradia digna é garantido pela Constituição Federal desde 2000, quando foi sancionada a Emenda Constitucional 26. Também é fortalecido pela Lei 4.380/1964,", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia22.jpg",
        titulo: "Política habitacional e o direito à moradia no Brasil",
        descricao: "A política habitacional é um conjunto de ações e estratégias adotadas pelos governos com o objetivo de garantir à população o direito à moradia digna.", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia23.jpg",
        titulo: "Habitat Brasil promove ações de dignidade menstrual em Manaus",
        descricao: "Entre 28 de outubro e 1 de novembro, nossa equipe esteve em Manaus, desenvolvendo atividades voltadas à promoção da dignidade menstrual. Foram realizadas 6 oficinas", 
        link: "",
    },
  {
        imagem: "/Tcc/Imagens/noticia24.jpg",
        titulo: "Dia mundial do banheiro: já imaginou viver sem saneamento básico?",
        descricao: "Hoje, 19 de novembro, é o Dia Mundial do Banheiro, um convite para refletirmos sobre o impacto do saneamento básico — ou a falta dele", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia25.jpg",
        titulo: "Direito de brincar: crianças precisam de espaços seguros para se desenvolverem",
        descricao: "O direito de brincar das crianças é um assunto tão sério que é obrigatório ter brinquedoteca em hospitais. Isso conforme a Lei n.º 11.104, de", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia26.jpg",
        titulo: "Eventos climáticos extremos: causas e consequências",
        descricao: "Eventos climáticos extremos são ocorrências meteorológicas que acontecem com intensidade ou frequência superior ao normal em uma determinada região, causando impactos significativos no meio ambiente", 
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
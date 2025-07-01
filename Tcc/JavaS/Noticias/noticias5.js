// Dados das notícias (agora com propriedade 'link' adicionada)
const noticias = [
    {
        imagem: "/Tcc/Imagens/noticia36.jpg",
        titulo: "Seca no Brasil: qual o cenário e como assegurar o direito à água adequada",
        descricao: "A seca no Brasil é um fenômeno recorrente que traz consigo uma série de desafios e impactos significativos, tanto ambientais quanto sociais. Garantir o acesso", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia37.png",
        titulo: "Leia na íntegra Carta Manifesto “Nosso Grito, Nosso Canto, Nosso Sonho”, fruto do 1º Encontro pelo Direito à Água e ao Saneamento",
        descricao: "No 1º Encontro pelo Direito à Água e ao Saneamento, realizado entre os dias 12 e 14 de setembro em Recife (PE), 33 organizações redigiram", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia38.jpg",
        titulo: "Como superar a desigualdade urbana e garantir o direito à moradia digna?",
        descricao: "A desigualdade urbana no Brasil é uma realidade cruel e multifacetada. Ela se manifesta na diferença gritante entre os que vivem em condições de conforto", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia39.jpg",
        titulo: "A importância da proteção dos direitos das crianças indígenas",
        descricao: "A Amazônia, vasta e exuberante, é um dos tesouros naturais mais preciosos do nosso planeta. No entanto, por trás da paisagem deslumbrante, existe uma realidade", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia40.png",
        titulo: "Com sede de esperança: violação do direito à água e saneamento impacta mulheres brasileiras",
        descricao: "Você já parou para pensar como é viver sem água potável ou saneamento básico? E quem são as pessoas mais afetadas por essa grave violação", 
        link: "",
    },
  {
        imagem: "/Tcc/Imagens/noticia41.jpg",
        titulo: "Segurança hídrica: como as mudanças climáticas podem afetar o acesso aos recursos hídricos no mundo?",
        descricao: "A segurança hídrica está cada vez mais sob ameaça em nosso planeta. As alterações climáticas têm um papel crucial nessa questão, afetando diretamente a disponibilidade", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia42.jpg",
        titulo: "Demarcação de terras indígenas: o que é e como pode ser uma solução para o aquecimento global",
        descricao: "A demarcação de terras indígenas surge como um farol de esperança para preservação ambiental. Essas áreas, geridas pelos povos originários, são bastiões de conservação ambiental.", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia43.jpg",
        titulo: "Crise Habitacional: Brasil tem mais de 1,5 milhão de pessoas afetadas por despejos ou remoções forçadas",
        descricao: "O número de pessoas afetadas por despejos ou remoções forçadas no Brasil aumentou 70% de outubro de 2022 a julho de 2024. Levantamento inédito da", 
        link: "",
    },
     {
        imagem: "/Tcc/Imagens/noticia44.jpg",
        titulo: "Percepção de Mudança 2023: Entenda os impactos das melhorias habitacionais na saúde e bem-estar das famílias",
        descricao: "Em agosto, realizamos o lançamento do Relatório de Percepção de Mudança 2023, que oferece uma análise detalhada dos impactos das melhorias habitacionais e reparações emergenciais", 
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
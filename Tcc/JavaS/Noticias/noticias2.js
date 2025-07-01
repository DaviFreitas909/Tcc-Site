// Dados das notícias (agora com propriedade 'link' adicionada)
const noticias = [
    {
        imagem: "/Tcc/Imagens/noticia10.png",
        titulo: "Produção audiovisual | Casa da Concórdia",
        descricao: "Objetivos da contratação Contratação de profissional ou empresa especializada em produção audiovisual para criação de fotos e vídeos institucionais sobre uma iniciativa de locação social", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia11.png",
        titulo: "Festival Clima de Mudança reúne arte, música, e debates sobre moradia digna no enfrentamento à crise climática",
        descricao: " Evento faz parte da programação da 19ª Conferência Internacional sobre Adaptação Comunitária às Mudanças Climáticas, mobilização global que acontece, pela primeira vez, na América Latina.", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia12.jpg",
        titulo: "Sem justiça habitacional, não haverá justiça climática! Sem justiça habitacional, não haverá futuro!",
        descricao: "A arte urbana surge como um poderoso movimento cultural e artístico que reivindica os espaços públicos, impulsionado por vozes que por muito tempo foram marginalizadas.", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia13.png",
        titulo: "Habitat Brasil e FSA promovem melhorias em  50 moradias do Coque",
        descricao: "Em março de 2025, teve início a 2ª edição do projeto de Melhorias Habitacionais, uma iniciativa que engloba ações de reforma e reparo de casas", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia14.jpg",
        titulo: "Acesso à água transforma a vida de famílias em situação de seca",
        descricao: "Mais de 100 famílias do Agreste e do Sertão Pernambucano vão ganhar acesso à água de forma digna e sustentável. A Habitat para a Humanidade", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia15.jpg",
        titulo: "Sem moradia digna, não há justiça de gênero. Sem moradia digna, não há futuro!",
        descricao: "Março, mês do Dia Internacional das Mulheres, é um período em que as desigualdades de gênero ganham destaque. Muito se fala sobre disparidades salariais, sobrecarga", 
        link: "",
    },
  {
        imagem: "/Tcc/Imagens/noticia16.jpg",
        titulo: "VAGA ENCERRADA | Analista Contábil",
        descricao: "Departamento: Suporte Organizacional Missão do cargo: Esta posição e responsável pelo apoio a execução do ciclo contábil da Organização.", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia17.jpg",
        titulo: "Sem moradia digna, não há futuro!",
        descricao: "O déficit habitacional afeta 6,3 milhões de domicílios brasileiros, segundo dados da Fundação João Pinheiro (2022). Esse número representa 8,3% do total de habitações ocupadas.", 
        link: "",
    },
    {
        imagem: "/Tcc/Imagens/noticia10.png",
        titulo: "Casa da Concórdia",
        descricao: "Projeto inédito de aluguel social para imigrantes em situação de vulnerabilidade Fevereiro, 2025 A crise migratória global tem impactos significativos nas cidades brasileiras.", 
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
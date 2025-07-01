
  // Dados de cidades por estado (exemplo simplificado)
  const cidadesPorEstado = {
    "AC": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
    "AL": ["Maceió", "Arapiraca", "Palmeira dos Índios"],
    "AP": ["Macapá", "Santana", "Laranjal do Jari"],
    "AM": ["Manaus", "Parintins", "Itacoatiara"],
    "BA": ["Salvador", "Feira de Santana", "Vitória da Conquista"],
    "CE": ["Fortaleza", "Caucaia", "Juazeiro do Norte"],
    "DF": ["Brasília"],
    "ES": ["Vitória", "Vila Velha", "Cariacica"],
    "GO": ["Goiânia", "Aparecida de Goiânia", "Anápolis"],
    "MA": ["São Luís", "Imperatriz", "Timon"],
    "MT": ["Cuiabá", "Várzea Grande", "Rondonópolis"],
    "MS": ["Campo Grande", "Dourados", "Três Lagoas"],
    "MG": ["Belo Horizonte", "Uberlândia", "Contagem"],
    "PA": ["Belém", "Ananindeua", "Santarém"],
    "PB": ["João Pessoa", "Campina Grande", "Santa Rita"],
    "PR": ["Curitiba", "Londrina", "Maringá"],
    "PE": ["Recife", "Jaboatão dos Guararapes", "Olinda"],
    "PI": ["Teresina", "Parnaíba", "Picos"],
    "RJ": ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias"],
    "RN": ["Natal", "Mossoró", "Parnamirim"],
    "RS": ["Porto Alegre", "Caxias do Sul", "Pelotas"],
    "RO": ["Porto Velho", "Ji-Paraná", "Ariquemes"],
    "RR": ["Boa Vista", "Rorainópolis", "Caracaraí"],
    "SC": ["Florianópolis", "Joinville", "Blumenau"],
    "SP": ["São Paulo", "Guarulhos", "Campinas"],
    "SE": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
    "TO": ["Palmas", "Araguaína", "Gurupi"]
  };
document.addEventListener('DOMContentLoaded', function() {
    const estadoSelect = document.getElementById('Estado'); // Corrigido para 'Estado'
    const cidadeSelect = document.getElementById('cidade');
    
    // Inicializa o campo de cidade
    cidadeSelect.disabled = true;
    cidadeSelect.innerHTML = '<option value="">Primeiro selecione seu estado</option>';

    // Evento de mudança no estado
    estadoSelect.addEventListener('change', function() {
        const estadoSelecionado = this.value;
        cidadeSelect.innerHTML = '';
        
        if (estadoSelecionado) {
            cidadeSelect.disabled = false;
            
            // Adiciona opção padrão
            const optionPadrao = document.createElement('option');
            optionPadrao.value = '';
            optionPadrao.textContent = 'Selecione sua cidade';
            cidadeSelect.appendChild(optionPadrao);
            
            // Adiciona cidades do estado selecionado
            if (cidadesPorEstado[estadoSelecionado]) {
                cidadesPorEstado[estadoSelecionado].forEach(function(cidade) {
                    const option = document.createElement('option');
                    option.value = cidade;
                    option.textContent = cidade;
                    cidadeSelect.appendChild(option);
                });
            }
        } else {
            cidadeSelect.disabled = true;
            cidadeSelect.innerHTML = '<option value="">Primeiro selecione seu estado</option>';
        }
    });

    // Validação do formulário
    document.getElementById('habitatVolunteerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação dos campos
        if (!this.querySelector('#Estado').value || !document.getElementById('cidade').value) {
            alert('Por favor, selecione seu estado e cidade');
            return;
        }
        
        // Resto da validação...
        alert('Formulário enviado com sucesso!');
    });
});
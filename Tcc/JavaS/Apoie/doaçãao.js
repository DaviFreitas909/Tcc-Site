document.addEventListener('DOMContentLoaded', function() {
    const valoresBase = {
        Mensal: [
            { valor: "60.00", texto: "R$ 60/mês" },
            { valor: "100.00", texto: "R$ 100/mês" }
        ],
        unico: [
            { valor: "100.00", texto: "R$ 100 (único)" },
            { valor: "500.00", texto: "R$ 500 (único)" }
        ]
    };

    const metodoPagamento = document.getElementById('metodo-pagamento');
    const botoesContainer = document.getElementById('botoes-valores');
    const campoPersonalizado = document.getElementById('campo-valor-personalizado');
    const inputValor = document.getElementById('valor-personalizado');
    let valorSelecionado = null;

    function atualizarOpcoesValores(metodo) {
        botoesContainer.innerHTML = '';
        campoPersonalizado.style.display = 'none';
        inputValor.value = '';

        // Adiciona os dois valores fixos
        valoresBase[metodo].forEach(function(item) {
            const botao = document.createElement('button');
            botao.className = 'botao-valor';
            botao.dataset.valor = item.valor;
            botao.textContent = item.texto;
            
            botao.addEventListener('click', function() {
                document.querySelectorAll('.botao-valor').forEach(b => b.classList.remove('selecionado'));
                this.classList.add('selecionado');
                campoPersonalizado.style.display = 'none';
                valorSelecionado = this.dataset.valor;
                console.log("Valor selecionado:", valorSelecionado);
            });

            botoesContainer.appendChild(botao);
        });

        // Adiciona o botão "Outro valor"
        const botaoOutroValor = document.createElement('button');
        botaoOutroValor.className = 'botao-valor';
        botaoOutroValor.textContent = 'Outro valor';
        botaoOutroValor.addEventListener('click', function() {
            document.querySelectorAll('.botao-valor').forEach(b => b.classList.remove('selecionado'));
            this.classList.add('selecionado');
            campoPersonalizado.style.display = 'block';
            inputValor.focus();
        });
        botoesContainer.appendChild(botaoOutroValor);
    }

    // Captura o valor digitado
    inputValor.addEventListener('input', function() {
        if (this.value) {
            valorSelecionado = this.value;
            console.log("Valor personalizado:", valorSelecionado);
        }
    });

    // Atualiza quando muda o método
    metodoPagamento.addEventListener('change', function() {
        atualizarOpcoesValores(this.value);
    });

    // Inicializa
    atualizarOpcoesValores(metodoPagamento.value);
});

        document.getElementById('donationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação do CPF (simplificada)
            const cpf = document.getElementById('cpf').value;
            if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
                alert('Por favor, insira um CPF válido no formato 000.000.000-00');
                return;
            }
            
            // Validação do valor
            const amount = parseFloat(document.getElementById('amount').value);
            if (amount <= 0) {
                alert('Por favor, insira um valor válido para doação');
                return;
            }
            
            // Se tudo estiver válido, pode enviar o formulário
            alert('Obrigado por sua doação! Em breve enviaremos os detalhes para seu email.');
            // Aqui você normalmente faria o submit para o servidor
            // this.submit();
        });
        
        // Máscara para CPF
        document.getElementById('cpf').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 3) {
                value = value.substring(0, 3) + '.' + value.substring(3);
            }
            if (value.length > 7) {
                value = value.substring(0, 7) + '.' + value.substring(7);
            }
            if (value.length > 11) {
                value = value.substring(0, 11) + '-' + value.substring(11, 13);
            }
            
            e.target.value = value.substring(0, 14);
        });
        
        // Máscara para telefone
        document.getElementById('phone').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
            }
            if (value.length > 10) {
                value = value.substring(0, 10) + '-' + value.substring(10, 15);
            }
            
            e.target.value = value.substring(0, 15);
        });
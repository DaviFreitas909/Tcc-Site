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

      // Gerar QR Code para PIX
      function gerarQRCodePix(valor) {
        const qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = ''; // Limpa o QR Code anterior
        
        // Formata o valor para o padrão PIX (2 casas decimais)
        const valorFormatado = parseFloat(valor).toFixed(2);
        
        // Dados para o QR Code PIX (formato simplificado)
        const pixData = `00020126580014BR.GOV.BCB.PIX0136relacionamento@hph.org.br5204000053039865405${valorFormatado}5802BR5925Habitat para Humanidade6009SAO PAULO62260522${new Date().getTime()}6304`;
        
        // Gerar QR Code
        new QRCode(qrcodeContainer, {
          text: pixData,
          width: 200,
          height: 200,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
      }

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
            
            // Atualiza QR Code quando um valor é selecionado
            if (document.getElementById('pix').checked) {
              gerarQRCodePix(valorSelecionado);
            }
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
          
          // Atualiza QR Code quando um valor é digitado
          if (document.getElementById('pix').checked) {
            gerarQRCodePix(valorSelecionado);
          }
        }
      });

      // Atualiza quando muda o método
      metodoPagamento.addEventListener('change', function() {
        atualizarOpcoesValores(this.value);
      });

      // Seleção de métodos de pagamento
      document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
          // Atualiza a seleção visual
          document.querySelectorAll('.payment-method').forEach(m => {
            m.classList.remove('selecionado');
            document.getElementById(m.dataset.method + '-details').classList.remove('active');
          });
          
          this.classList.add('selecionado');
          document.getElementById(this.dataset.method + '-details').classList.add('active');
          
          // Marca o radio button correspondente
          this.querySelector('input[type="radio"]').checked = true;
          
          // Se for PIX e já tiver um valor selecionado, gera o QR Code
          if (this.dataset.method === 'pix' && valorSelecionado) {
            gerarQRCodePix(valorSelecionado);
          }
        });
      });

      // Copiar chave PIX
      document.getElementById('copy-pix').addEventListener('click', function() {
        const chavePix = 'relacionamento@hph.org.br';
        navigator.clipboard.writeText(chavePix).then(() => {
          this.textContent = 'Copiado!';
          setTimeout(() => {
            this.textContent = 'Copiar Chave';
          }, 2000);
        });
      });

      // Máscaras para campos de cartão
      document.getElementById('card-number').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = value.substring(0, 19);
      });

      document.getElementById('card-expiry').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
          value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value.substring(0, 5);
      });

      document.getElementById('card-cvv').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
      });

      // Validação do formulário
      document.getElementById('donationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação do CPF
        const cpf = document.getElementById('cpf').value;
        if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
          alert('Por favor, insira um CPF válido no formato 000.000.000-00');
          return;
        }
        
        // Validação do valor
        let amount;
        if (valorSelecionado) {
          amount = parseFloat(valorSelecionado);
        } else {
          amount = parseFloat(document.getElementById('amount').value);
        }
        
        if (isNaN(amount)) {
          alert('Por favor, selecione ou digite um valor para doação');
          return;
        }
        
        if (amount <= 0) {
          alert('Por favor, insira um valor válido para doação');
          return;
        }
        
        // Validação específica para cartão de crédito
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
        if (paymentMethod === 'credit') {
          const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
          const cardExpiry = document.getElementById('card-expiry').value;
          const cardCvv = document.getElementById('card-cvv').value;
          
          if (cardNumber.length < 16) {
            alert('Por favor, insira um número de cartão válido');
            return;
          }
          
          if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
            alert('Por favor, insira uma data de validade válida no formato MM/AA');
            return;
          }
          
          if (cardCvv.length < 3) {
            alert('Por favor, insira um CVV válido');
            return;
          }
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

      // Inicializa
      atualizarOpcoesValores(metodoPagamento.value);
    });

 
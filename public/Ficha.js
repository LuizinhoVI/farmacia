
function ficha_procurar(elemento) {
    
    const div = document.querySelector('#ficha_procurar_input')
    const ficha_procurar = document.querySelector('#ficha_procurar')
    const ficha_nao_encontrada = document.querySelector('#ficha_nao_encontrada')

    if (div.value=== 'luiz') {
        ficha_procurar.style.display='block'
        ficha_nao_encontrada.style.display='none'
    }else{
        ficha_nao_encontrada.style.display='block'
        ficha_procurar.style.display='none'
        

    }


}

function ficha_menu(numero) {
    // mostra a div escolhida 
    document.querySelectorAll('.ficha_pessoa').forEach(opcao => {
    opcao.style.display = 'none';
    });
    
   
    
    
    // quando apertar esse botão vailimpar o outro botão 
    document.querySelector('.'+numero).style.display = "block";
    if (numero === "ficha_pessoa1") {
        const ficha_procurar = document.querySelector('#ficha_procurar')
     ficha_procurar.style.display="none"
        const input = document.querySelector('#ficha_procurar_input')
     input.value=null
     const ficha_nao_encontrada = document.querySelector('#ficha_nao_encontrada')
     ficha_nao_encontrada.style.display="none"
    }
    
    }
    
    function formatarCep(input) {
        // Remove todos os caracteres que não são números
        let valor = input.value.replace(/\D/g, '');
        // Adiciona o hífen na posição correta
        if (valor.length > 5) {
            valor = valor.slice(0, 5) + '-' + valor.slice(5, 8);
        }
        // Atualiza o valor do input
        input.value = valor;
    }
    async function buscarCep() {
        const cep = document.getElementById('cep').value.replace('-', '');
        const cidade = document.getElementById('cidade');
        const estado = document.getElementById('estado');
        // resultadoDiv.innerHTML = ''; // Limpa o resultado anterior

        if (cep.length === 8) {

                const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
                const data = await response.json();

                if (!data.erro) {
                //   alert(data.state)  

                    cidade.value=data.city  
                    estado.value=data.state


                } else {
                   alert("não encontrou a cidade")
                }
            
            }
        }


       async function formatarTelefone() {
            const inputTelefone = document.getElementById('ficha_telefone');
            let value = inputTelefone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        
            if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d{2})$/, '($1)');
            }
        
            inputTelefone.value = value; // Atualiza o valor do input
        }
        
       async function formatarCPF(input) {
            let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 9) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            } else if (value.length > 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{2})/, '$1.$2.$3');
            } else if (value.length > 3) {
                value = value.replace(/(\d{3})(\d+)/, '$1.$2');
            }
            
            input.value = value;
        }

         function validarCPF(input) {
            const cpf = input.value.replace(/\D/g, '');
            if (cpf.length < 11) {
                document.getElementById('cpf_resultado').innerText = '';
                return;
            }
            
            // Validação básica do CPF
            if (!isValidCPF(cpf)) {
                document.querySelector('.cpf_resultado').innerText = 0;
                alert("CPF ERRADO")
                input.value=null;
                
            } else {
                input.style.fontSize='20px'
                alert("valido")
                
            }
        }
        // faz parte da função de cima validarcpf()
        function isValidCPF(cpf) {
            if (/^(.)\1{10}$/.test(cpf)) return false; // Verifica se todos os dígitos são iguais
        
            let soma = 0;
            for (let i = 0; i < 9; i++) {
                soma += parseInt(cpf.charAt(i)) * (10 - i);
            }
            let resto = 11 - (soma % 11);
            let primeiroDigito = resto > 9 ? 0 : resto;
        
            if (parseInt(cpf.charAt(9)) !== primeiroDigito) return false;
        
            soma = 0;
            for (let i = 0; i < 10; i++) {
                soma += parseInt(cpf.charAt(i)) * (11 - i);
            }
            resto = 11 - (soma % 11);
            let segundoDigito = resto > 9 ? 0 : resto;
        
            return parseInt(cpf.charAt(10)) === segundoDigito;
        }

        function somenteNumeros(input) {
            input.value = input.value.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
        }
        function somentecredito(input) {
            input.value = input.value.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
            if (input.value > 1000) {
                input.value= null;
            }
        }
    
        // botão ver mais da ficha  ==============================
      
      function abrir_ficha() {
        
      
            const rows = document.querySelectorAll('#tableBody tr');
            const halfIndex = Math.ceil(rows.length / 2);
            rows.forEach((row, index) => {
                if (index >= halfIndex) {
                    row.classList.toggle('hidden');
                }
            });
            const button = document.querySelector('.mostrar_mais_');
            button.textContent = button.textContent === 'Mostrar mais' ? 'Mostrar menos' : 'Mostrar mais';
        
        }
// **********************************************

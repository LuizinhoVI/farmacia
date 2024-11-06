
function ficha_procurar() {
    
    const div = document.querySelector('#ficha_procurar_input')
    const ficha_procurar1 = document.querySelector('.ficha_procurar')
    const ficha_nao_encontrada = document.querySelector('#ficha_nao_encontrada')
    const maiusculo = div.value.toUpperCase();
    if (div.value == 'LUIZ' || div.value == 'luiz') {
        //console.log(div.value);
        ficha_procurar1.style.display='block'
        ficha_nao_encontrada.style.display='none'
    }else{
        ficha_nao_encontrada.style.display='block'
        ficha_procurar1.style.display='none'
        

    }


}

function nome_completo(nome) {

    nome.value = nome.value.replace(/[0-9]/g, ''); // Remove números
    
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

    async function buscarCep(input) {
        // const cep = document.querySelector('.cep').value.replace('-', '');
        const cep = input.value.replace('-', '');
        const cidade = document.querySelector('.cidade');
        const estado = document.querySelector('.estado');
        const cidade1 = document.querySelector('.cidade1');
        const estado1 = document.querySelector('.estado1');
        // resultadoDiv.innerHTML = ''; // Limpa o resultado anterior

        if (cep.length === 8) {

                const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
                const data = await response.json();

                if (!data.erro) {
                //   alert(data.state)  

                    cidade.value=data.city  
                    estado.value=data.state
                    cidade1.value=data.city  
                    estado1.value=data.state
                    
                    //console.log(data.city)
                    
                } else {
                   alert("não encontrou a cidade")
                }
            
            }
        }


       async function formatarTelefone(element) {
            const inputTelefone =  element// document.querySelector('.ficha_telefone');
            let value = inputTelefone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        console.log(element.value);
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

        function dinheiro_real(element) {

           
                let value = element.value.replace(/\D/g, ''); // Remove tudo que não é dígito
                value = (value / 100).toFixed(2).replace('.', ','); // Converte para formato monetário
                value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); // Adiciona o separador de milhar
                element.value = 'R$ ' + value; // Adiciona o símbolo de R$
        }
    
            function calcular_subtrair() {
                const inputValue = document.getElementById('moneyInput').value.replace(/[R$\s.]/g, '').replace(',', '.');
                const numericValue = parseFloat(inputValue);
    
                // Exemplo de operação: adição de 50
                const result = numericValue - 50;
    
                // Mostra o resultado formatado
                document.getElementById('result').innerHTML = `Resultado: R$ ${result.toFixed(2).replace('.', ',')}`;
            }
        
    
        // botão ver mais da ficha  ==============================
      
      function abrir_ficha() {
        
        const table = document.querySelector('.tableBody');
        const button = document.querySelector('.mostrar_mais_');

        table.classList.toggle('hidden');

        button.textContent = table.classList.contains('hidden') ? 'Ver mais...' : 'Ocultar...';
        
        }

        function validaNumero(input) {
            // Converte o valor para um número
            input.value = input.value.replace(/[^0-9]/g, '');
            const valor = Number(input.value);
            // Se o valor for negativo, redefine para vazio
            if (valor <= 0 ) {
                input.value = null;
            }
        }

        function login(input) {
            input.value = input.value.replace(/[^a-zA-Z0-9]/g, '');
            console.log(input.value)

   

            if(input.value === 'luiz'){
                setTimeout(function(){


                    input.classList.toggle('login_erro')
                    input.placeholder = "Login já existe"
                    input.value = ""
                    
                }
                    ,3000);
              
            } else {

                setTimeout(function(){
                     input.placeholder = ""
                    input.style.color = "green"
                    input.placeholder = "Login"}
                ,3000);

               
            }


            // setTimeout( function () {
            //     verificar_login()
            // } ,3000)
        }
        
        function verificar_login() {
        
        const login_atual = document.querySelector('.ficha_procurar_login')
            alert('teste')
        if(login_atual.value == 'luiz'){
            login_atual.classList.toggle('login_erro')
            login_atual.placeholder = "Login já existe"
            login_atual.value = ""
          
        }else{
            login_atual.style.color = "green"
        }

        }



// **********************************************

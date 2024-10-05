


function ficha_menu(numero) {
    // mostra a div escolhida 
    document.querySelectorAll('.ficha_pessoa').forEach(opcao => {
    opcao.style.display = 'none';
    });
    
   
    
    // Mostra a opção selecionada
    
    document.querySelector('.'+numero).style.display = "block";
    
    
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
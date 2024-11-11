
function formatarDinheiro(input) {
    // Remove tudo que não é número
    let valor = input.value.replace(/\D/g, '');

    // Formata o valor como dinheiro
    valor = (valor / 100).toFixed(2).replace('.', ',');
    valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Atualiza o campo de entrada

    input.value = valor;
    
}


function pagamento_data_hora() {
    const agora = new Date();
    const data = agora.toLocaleDateString('pt-BR'); // Formato da data
    const hora = agora.toLocaleTimeString('pt-BR'); 



    // Pega todos os inputs dentro da div de resultado
    const inputs = document.querySelectorAll('.hora');
    for (let index = 0; index < inputs.length; index++) {
        

            
 const mostrarhora = inputs[index].textContent=hora; // Acessa o valor do terceiro input
        document.querySelector('.mostrar5').textContent += mostrarhora; // Mostra no HTML 
    }
    const inputs1 = document.querySelectorAll('.data');

    for (let index = 0; index < inputs1.length; index++) {
        
    const mostrardata = inputs1[index].textContent=data; // Acessa o valor do terceiro input
        document.querySelector('.mostrar6').textContent += mostrardata; // Mostra no HTML   
    }


}
     

function data_hora_atualizada() {
      
    const agora = new Date();

        // Obtém a data e a hora
        const data = agora.toLocaleDateString('pt-BR'); // Formato da data
        const hora = agora.toLocaleTimeString('pt-BR'); // Formato da hora

        
    // Seleciona todos os elementos com a classe "data" e "hora"
            const divs = document.querySelectorAll('.data, .hora, .hora_de_pagamento, .data_de_pagamento');

           


            // Atualiza o texto
            divs[0].textContent = data; // Para a primeira div (data)
            divs[1].textContent =hora; // Para a segunda div (hora)

            divs[2].textContent =data; // Para a segunda div (data)
            divs[3].textContent =hora; // Para a segunda div (hora)

}
 setInterval(data_hora_atualizada, 1000);


function option() {

     // Pega todos os inputs dentro da div de resultado
    const inputs = document.querySelectorAll('.option');
    for (let index1 = 0; index1 < inputs.length; index1++) {
        
        const terceiroValor = inputs[index1].value; // Acessa o valor do terceiro input
        
        document.querySelector('.mostrar2').textContent += terceiroValor; // Mostra no HTML
        
        // alert(terceiroValor);           
        
                }
}





        
function pagamento_nome() {
    
    // Pega todos os inputs dentro da div de resultado
    const inputs = document.querySelectorAll('.nome_procudo');
    for (let index1 = 0; index1 < inputs.length; index1++) {
        
        const terceiroValor = inputs[index1].value; // Acessa o valor do terceiro input
        
        document.querySelector('.mostrar1').textContent += terceiroValor; // Mostra no HTML
        
        // alert(terceiroValor);           
        
                }



    
  

}
function pagamento_total() {
    
    // Pega todos os inputs dentro da div de resultado
    const inputs = document.querySelectorAll('.pagamento_valor');



    for (let index1 = 0; index1 < inputs.length; index1++) {
        
        const terceiroValor = inputs[index1].value; // Acessa o valor do terceiro input
        
        document.querySelector('.mostrar4').textContent += terceiroValor; // Mostra no HTML
        
        // alert(terceiroValor);           
        
                }
}
function pagamento_valor() {
    
    // Pega todos os inputs dentro da div de resultado
    const inputs = document.querySelectorAll('.pagamento_valor');



    for (let index1 = 0; index1 < inputs.length; index1++) {
        
        const terceiroValor = inputs[index1].value; // Acessa o valor do terceiro input
        
        document.querySelector('.mostrar4').textContent += terceiroValor; // Mostra no HTML
        
        // alert(terceiroValor);           
        
                }
}

  // Função para converter o valor monetário para número
  function converterParaNumero(numerico_valor) {
    // Remove os pontos de milhar e substitui a vírgula por ponto
    let valorConvertido = numerico_valor.replace(/\./g, '').replace(',', '.');
    return parseFloat(valorConvertido);
}

//  ------------------------------------------------------------------------- 
 // Função para formatar o valor como moeda (Real)
 function pagamento_formatar_dinheiro(input) {
    let valor = input.value.replace(/[^\d]/g, ''); // Remove tudo o que não for número

    // Formata para a moeda brasileira (R$)
    if (valor.length > 2) {
        valor = valor.replace(/(\d)(\d{2})$/, '$1,$2'); // Adiciona a vírgula
        valor = valor.replace(/(\d)(\d{3})(\d)/, '$1.$2.$3'); // Adiciona o ponto para milhar
    }

    input.value = "R$ " + valor;
}



// Função auxiliar para formatar o total como moeda
function formatarTotal(valor) {
    valor = valor.toFixed(2).replace(".", ",");
    let [inteiro, decimal] = valor.split(",");
    inteiro = inteiro.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return "R$ " + inteiro + "," + decimal;
}
// ---------------------------------------------------------------------------
  

function removerclass() {
    const divs = document.querySelectorAll('.adicionar_produto'); // Seleciona todas as divs clonadas
    // Mantém apenas a primeira div
    for (let i = 1; i < divs.length; i++) {
        divs[i].remove(); // Remove as divs a partir da segunda
    }
}
function limpar_input(){
     document.querySelector('.nome_procudo').value =null;
 
     document.querySelector('.pagamento_valor').value= null;


}
// Função para somar os valores dos inputs com a classe "valor"
function somarValores() {
    // Obter todos os inputs com a classe "valor"
    const inputs = document.querySelectorAll('.pagamento_valor');
    
    let soma = 0;

    // Iterar sobre os inputs e somar seus valores
    inputs.forEach(input => {
        soma += parseFloat(input.value.replace(',', '.')) || 0;  // Converte o valor para número, tratando ',' como '.' 
    });

    // Atualizar o valor do input "resultado", formatando como moeda
  document.querySelector('.varlor_da_minha_ficha').value = formatarMoeda(soma);
  
  console.log(formatarMoeda(soma))
}


function salvar() {
    const checkbox = document.querySelector('.verificar_compra');
    const nomeproduto = document.querySelector('.nome_procudo');
   
    const pagamento_valor1 = document.querySelector('.pagamento_valor');


    function limpar_produto() {
        
        const divs = document.querySelectorAll('.ficha_tabela');
        
        // Remove todas as divs, exceto a primeira
        divs.forEach((div, index) => {
            if (index !== 0) {
                div.remove();
              
            }
        });

       
    }

    function nomes_produtos() {
        
    
    const inputs = document.querySelectorAll('.nome_procudo');
    let todosPreenchidos = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            todosPreenchidos = false;
        }
    });

   
    return todosPreenchidos;     
}
   
  
    // console.log('Checkbox encontrado:', checkbox); 
    if (checkbox.checked && nomeproduto.value && pagamento_valor1.value && nomes_produtos() ) {
        // console.log('Checkbox está marcado:', checkbox.checked);
        
        
       
        pagamento_nome();
        option();
        pagamento_valor();
        pagamento_data_hora();
        removerclass();
        somarValores();

        checkbox.checked=false;
        limpar_input();
        limpar_produto();
       // const limpar =document.querySelectorAll('.pagamento_valor,.nome_procudo')
    } else {
        alert('Há campos não preenchidos!' );
        
    }
}



let total = 100.50; // Valor inicial
let resto = total; // Resto inicial

function formatarMoeda(valor) {

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valor);

}
let pagamento_pegar_valor = 0
let pagamento_valor_ficha = 0

function pagamento(meio_de_pagamento) {

    const valorInput = document.getElementById('valor').value;
    const valor = parseFloat(valorInput.replace(/\./g, '').replace(',', '.')); // Converte o valor

    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    if (valor > resto) {
        alert("Valor maior que o restante disponível.");
        document.getElementById('valor').value = null; // Limpa o 
        return;
    }

    resto -= valor; // Subtrai o valor do resto

    document.querySelector('#pagamento_falta_pagar').innerText = ` ${formatarMoeda(resto)}`;
    document.getElementById('resultado').innerText = `Resto: ${formatarMoeda(resto)}`;
    document.getElementById('valor').value = ''; // Limpa o input

    //console.log(resto)
   
    const pagamento_cpf = document.querySelector('.pagamento_mostrar_cpf').innerText;
    const pagamento_data = document.querySelector('.pagamento_mostrar_data').innerText;
    const pagamento_hora = document.querySelector('.pagamento_mostrar_hora').innerText;
    const pagamento_nome = document.querySelector('.pagamento_mostrar_nome').innerText;
    const pagamento_limite = document.querySelector('.pagamento_mostrar_limite').innerText;

    // vai passar para a minhão função os valores da pagina de pagamento da ficha 
  enviar_pagamento_para_historico(formatarMoeda(resto),formatarMoeda(valor),meio_de_pagamento.innerText,"Pagamento",pagamento_cpf,pagamento_hora,pagamento_data,pagamento_nome,pagamento_limite)

}

// vai deixar no formato do dinheiro toda hora que o valor for atualizado
window.onload = function() {
    document.getElementById('resultado').innerText = `Resta: ${formatarMoeda(resto)}`;
    document.querySelector('#pagamento_falta_pagar').innerText = `Resta: ${formatarMoeda(resto)}`;


};






function enviar_pagamento_para_historico(ficha_1,valor_1,tipo_1,status_1,cpf_1,hora_1,data_1,nome_1,limite_1) {
    

//alert("ficha"+ficha+ "pagamento "+ valor_1 + "tipo "+tipo_1 )

 // Criando uma nova linha na tabela
 const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
 const novaLinha = tabela.insertRow();

// Criando as células da linha
const cpf = novaLinha.insertCell(0);
const nome = novaLinha.insertCell(1);
const status = novaLinha.insertCell(2);
const valor = novaLinha.insertCell(3);
const data = novaLinha.insertCell(4);
const hora = novaLinha.insertCell(5);
const tipo = novaLinha.insertCell(6);
const limite = novaLinha.insertCell(7);
const ficha_valor = novaLinha.insertCell(8);

  // Adicionando os dados nas células
  cpf.textContent = cpf_1;
  nome.textContent = nome_1;
  status.textContent = status_1;
  valor.textContent = valor_1;
  data.textContent = data_1;
  hora.textContent = hora_1;
  tipo.textContent = tipo_1;
  limite.textContent = limite_1;
  ficha_valor.textContent = ficha_1;

 // Adicionando um id para a linha e a classe de tabela
// limite.setAttribute('class','');

 limite.setAttribute('class', 'escondido');
 ficha_valor.setAttribute('class', 'escondido');
 novaLinha.setAttribute('class', 'tr');

 novaLinha.onclick = function(){
 
    historico_selecionado(this);

 }


}


//  function historico_selecionado(linha) {
//     const abrir_cupom = document.querySelector('.cupom_de_pagamento')

//     const cpf = document.querySelector('.historico_cpf')
//     const nome_cupom = document.querySelector('.historico_nome_completo')
//     const historico_status = document.querySelector('.historico_status')
//     const valor = document.querySelector('.historico_valor')
//     const data = document.querySelector('.historico_data')
//     const hora = document.querySelector('.historico_hora')
//     const tipo = document.querySelector('.historico_tipo')
//     const limite = document.querySelector('.historico_limite')
    
//     alert()

//     // Obtém a célula da coluna "Nome" (que é a segunda célula da linha)
 
    
//     cpf.innerHTML = linha.cells[0].innerHTML;
//     nome_cupom.innerHTML = linha.cells[1].innerHTML;
//     historico_status.innerHTML= linha.cells[2].innerHTML;
//      valor.innerHTML = linha.cells[3].innerHTML;
//      data.innerHTML = linha.cells[4].innerHTML;
//      hora.innerHTML = linha.cells[5].innerHTML;
//      tipo.innerHTML = linha.cells[6].innerHTML;
//     // limite.innerHTML = linha.cells[7].innerHTML;

    
   

//     abrir_cupom.style.display="block";

//   }



function limite(teste) {
    const number = parseFloat(teste.value.replace(',', '.'));
   if (number > total ) {
       teste.value = null
    }


}



function pagamento_ficha_mostrar() {
        
    const table = document.getElementById('tableBody1');
    const button = document.querySelector('.mostrar_mais_');

    table.classList.toggle('hidden');

    button.textContent = table.classList.contains('hidden') ? 'Ver mais...' : 'Ocultar...';
    
    }

    
function pagamento_procurar_ficha() {
 
    const div = document.querySelector('#pagamento_procurar_ficha2')
    const ficha_procurar1 = document.querySelector('.pagamento_procurar_ficha1')
    const ficha_nao_encontrada = document.querySelector('#ficha_nao_encontrada1')
    const maiusculo = div.value.toUpperCase();
   // console.log(div.value);
    if (div.value == 'LUIZ' || div.value == 'luiz') {
        ficha_procurar1.style.display='block'
        ficha_nao_encontrada.style.display='none'
    }else{
        ficha_nao_encontrada.style.display='block'
        ficha_procurar1.style.display='none'
        

    }


}

function adicionar_produto_para_historico() {
    
    
    const cpf = document.querySelector('.ficha_procurar_cpf').value;
    const data = document.querySelector('.data').innerText;
    const hora = document.querySelector('.hora').innerText;
    const nome = document.querySelector('.ficha_procurar_nome').value;
    const limite = document.querySelector('.ficha_procurar_limite').value;
    const falta_pagar = document.querySelector('.ficha_procurar_pagar').value;
    const nome_remedio = document.querySelector('.nome_procudo').value;

    alert(limite+""+nome+""+hora+""+data +""+falta_pagar )
    
    //enviar_pagamento_para_historico()

}


 // Função para formatar o valor em Real (R$)
 function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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

function adicionar_produto_para_historico() {
   
    const cpf = document.querySelector('.ficha_procurar_cpf').value;
    const preco = document.querySelector('.pagamento_valor').value;
    const data = document.querySelector('.data').innerText;
    const hora = document.querySelector('.hora').innerText;
    const nome = document.querySelector('.ficha_procurar_nome').value;
    const limite = document.querySelector('.ficha_procurar_limite').value;
    const falta_pagar = document.querySelector('.varlor_da_minha_ficha').value;
    const nome_remedio = document.querySelector('.nome_procudo').value;
   
    


   // alert("limite da ficha"+limite+"nome"+nome+"hora:"+hora+"data:"+data +"falta pagar:"+falta_pagar +"nome_remedio"+nome_remedio+"cpf:"+cpf+"preço:"+preco)
   

   
   enviar_ficha_para_historico(nome,cpf,data,hora,limite,falta_pagar,nome_remedio,preco);
   
 

 
}







function enviar_ficha_para_historico(nome_,cpf_,data_,hora_,limite_,pagar_,remedio_,preco_) {
 

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
    
   // console.log(pagar_    )

  

      // Adicionando os dados nas células
      nome.textContent = nome_;
      cpf.textContent = cpf_;
      status.textContent = remedio_;
      valor.textContent = preco_ ;
      data.textContent = data_;
      hora.textContent = hora_;
      tipo.textContent = "Ficha 📄";
      limite.textContent = limite_;
      ficha_valor.textContent =pagar_;
      
     // console.log(preco_)


     // Adicionando um id para a linha e a classe de tabela
    // limite.setAttribute('class','');
    
     limite.setAttribute('class', 'escondido');
     ficha_valor.setAttribute('class', 'escondido');
     novaLinha.setAttribute('class', 'tr');
    
     novaLinha.onclick = function(){
     
        historico_selecionado(this);
    
     }
    
    
    }







function formatarValor(valor) {
    // Remover "R$", espaços e vírgulas (substituindo por ponto)
    return parseFloat(valor.replace('R$', '').replace(/\s/g, '').replace(',', '.')) || 0;
}
let ficha_para_pgar=0;

function somarValores() {
    // Selecionar todos os inputs com a classe "valor"
    const valor_pra_pagar = document.querySelector('.varlor_da_minha_ficha')

    const inputs = document.querySelectorAll('.pagamento_valor');
    let soma = 0;

    // Iterar sobre os inputs e somar os valores
    inputs.forEach(input => {

        soma += formatarValor(input.value) ; // Formatar o valor antes de somar
        ficha_para_pgar = soma

    });
    
    // Atribuir a soma ao input de resultado, formatado como R$
    valor_pra_pagar.value = `R$ ${soma.toFixed(2).replace('.', ',')}`;
    console.log(ficha_para_pgar)

}


    // Chama a função para calcular a soma assim que a página for carregada
   
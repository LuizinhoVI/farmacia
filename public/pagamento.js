let id =1;
function adicionar_mais() {
   
    document.querySelector('.contador_de_id').innerHTML=id++;
    
    const mais = document.querySelector("#adicionar_produto");
    const copiar = mais.cloneNode(true);

    document.getElementById("colar").appendChild(copiar);
    
    

}


function quantidade() {

    // Pega todos os inputs dentro da div de resultado
    const inputs = document.querySelectorAll('.pagamento_quantidade');
        for (let index = 0; index <= inputs.length; index++) {

            
 const terceiroValor = inputs[index].value; // Acessa o valor do terceiro input
        document.querySelector('.mostrar3').textContent += terceiroValor; // Mostra no HTML


        }
    }
        function pagamento_nome() {

            // Pega todos os inputs dentro da div de resultado
            const inputs = document.querySelectorAll('.pagamento_quantidade');
                for (let index = 0; index <= inputs.length; index++) {
        
                    
         const terceiroValor = inputs[index].value; // Acessa o valor do terceiro input
                document.querySelector('.mostrar3').textContent += terceiroValor; // Mostra no HTML
        
        
                }


    // Se houver pelo menos 3 inputs, acessa o valor do terceiro
    if (inputs.length >= 3) {


        const terceiroValor = inputs[2].value; // Acessa o valor do terceiro input
        document.querySelector('.mostrar3').textContent = terceiroValor; // Mostra no HTML
    }
    
  

}


function salvar() {
    const checkbox = document.querySelector('.verificar_compra');
    // console.log('Checkbox encontrado:', checkbox); 
    if (checkbox.checked) {
        // console.log('Checkbox está marcado:', checkbox.checked);

        quantidade();
        pagamento_nome();

       








    } else {
        alert('Você deve aceitar os termos para Salvar os produtos.' );
        
    }
}
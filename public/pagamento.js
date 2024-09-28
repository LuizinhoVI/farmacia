let id =1;
function adicionar_mais() {
   
    document.querySelector('.contador_de_id').innerHTML=id++;
    
    const mais = document.querySelector("#adicionar_produto");
    const copiar = mais.cloneNode(true);

    document.getElementById("colar").appendChild(copiar);
    
    

}

function option() {
    const option=document.querySelector('.option')

    const pegar_option =option.value

    alert("o valor da celeção"+pegar_option);

}


function quantidade() {

    // Pega todos os inputs dentro da div de resultado
    const inputs = document.querySelectorAll('.pagamento_quantidade');
        for (let index = 0; index < inputs.length; index++) {

            
 const terceiroValor = inputs[index].value; // Acessa o valor do terceiro input
        document.querySelector('.mostrar3').textContent += terceiroValor; // Mostra no HTML


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


function salvar() {
    const checkbox = document.querySelector('.verificar_compra');
    // console.log('Checkbox encontrado:', checkbox); 
    if (checkbox.checked) {
        // console.log('Checkbox está marcado:', checkbox.checked);
        
        
        quantidade();
        pagamento_nome();
        option()
       








    } else {
        alert('Você deve aceitar os termos para Salvar os produtos.' );
        
    }
}
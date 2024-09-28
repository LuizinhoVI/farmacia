
function pagamento_data_hora() {

    // Pega todos os inputs dentro da div de resultado
    const inputs = document.querySelectorAll('.data');

    alert(inputs.value  )
    for (let index = 0; index < inputs.length; index++) {
        
            
 const terceiroValor = inputs[index].value; // Acessa o valor do terceiro input
        document.querySelector('.mostrar5').textContent += terceiroValor; // Mostra no HTML

    }
}
     
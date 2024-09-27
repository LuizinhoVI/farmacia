let id =0;
function adicionar_mais() {
   
    // const produto = document.createElement("div");
    // produto.className='w3-container';
    // produto.


   
    
    
    


    // faz criar um clone da div 
    const mais = document.querySelector("#adicionar_produto");
    document.querySelector('.contador_de_id').innerHTML=id++;
    const copiar = mais.cloneNode(true);

    document.getElementById("colar").appendChild(copiar);
    
    

}



function salvar() {
    const checkbox = document.querySelector('.verificar_compra');
    // console.log('Checkbox encontrado:', checkbox); 
    if (checkbox.checked) {
        // console.log('Checkbox está marcado:', checkbox.checked);
     


       const tipo = document.querySelectorAll('nome_procudo');


       

        console.log(tipo[1].textcontent);







    } else {
        alert('Você deve aceitar os termos para Salvar os produtos.' );
        
    }
}
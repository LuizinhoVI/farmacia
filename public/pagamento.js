// let id =1;
function adicionar_mais() {
   
    document.querySelector('.contador_de_id').innerHTML=id++;
    
    const mais = document.querySelector("#adicionar_produto");
    const copiar = mais.cloneNode(true);

    document.getElementById("colar").appendChild(copiar);
    
    

}
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
            const divs = document.querySelectorAll('.data, .hora');

           


            // Atualiza o texto
            divs[0].textContent = data; // Para a primeira div (data)
            divs[1].textContent =hora; // Para a segunda div (hora)

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
function pagamento_valor() {
    
    // Pega todos os inputs dentro da div de resultado
    const inputs = document.querySelectorAll('.pagamento_valor');
    for (let index1 = 0; index1 < inputs.length; index1++) {
        
        const terceiroValor = inputs[index1].value; // Acessa o valor do terceiro input
        
        document.querySelector('.mostrar4').textContent += terceiroValor; // Mostra no HTML
        
        // alert(terceiroValor);           
        
                }
}


function removerclass() {
    const divs = document.querySelectorAll('.adicionar_produto'); // Seleciona todas as divs clonadas
    // Mantém apenas a primeira div
    for (let i = 1; i < divs.length; i++) {
        divs[i].remove(); // Remove as divs a partir da segunda
    }
}


function salvar() {
    const checkbox = document.querySelector('.verificar_compra');
    // console.log('Checkbox encontrado:', checkbox); 
    if (checkbox.checked) {
        // console.log('Checkbox está marcado:', checkbox.checked);
        
        
        quantidade();
        pagamento_nome();
        option();
        pagamento_valor();
        pagamento_data_hora();
      
        removerclass();




        checkbox.checked=false;
        const limpar =document.querySelectorAll('.pagamento_valor,.nome_procudo')
    } else {
        alert('Você deve aceitar os termos para Salvar os produtos.' );
        
    }
}

window.onscroll = function() {
    fixarbarra();
};

var div = document.getElementById("procurar_ficha");
var ficha = document.getElementById("ficha");
var sticky = div.offsetTop;

function fixarbarra() {
    if (window.pageYOffset > sticky) {
        div.style.position = "fixed";
        div.style.top = "50px";
        div.style.width = "70%";
        div.style.left = "50%";
        div.style.transform = "translateX(-50%)";
        div.style.zIndex = "3";
        ficha.style.position = "relative";
        ficha.style.top = "120px";
    } else {
        div.style.position = "relative";
        div.style.width = "";
        div.style.top = "";
        ficha.style.position = "";
        ficha.style.top = "";

        // div.style.width = "80%";
    }
}

function pagamento_ver_mais() {
    const mais = document.querySelectorAll('.mostrar');
    mais.forEach((elemento) => {
        elemento.classList.remove('mostrar'); // Remove a classe que oculta
    });
    const mostrar = document.querySelector('#pagamento_ver_mais');
    const remover =document.querySelector('#pagamento_remover');
  
    remover.style.display="block"
    mostrar.style.display="none"  

 
}

function pagamento_recolher() {
    
    const divs = document.querySelectorAll('.remover'); // Seleciona todas as divs com a classe 'minha-div'
    
    divs.forEach((div) => {
        div.classList.add('mostrar'); // Adiciona a classe 'nova-classe' a cada div
   

    });

    const mostrar = document.querySelector('#pagamento_ver_mais');
    const remover = document.querySelector('#pagamento_remover');




    remover.style.display="none"
    mostrar.style.display="block"  

    

}




function test() {

        // Obter o valor atual da div
        const divValor = document.getElementById('valor');
        let valorAtual = parseFloat(divValor.textContent);
        
        // Obter o valor do input
        const inputValor = document.getElementById('inputValor');
        let valorSubtrair = parseFloat(inputValor.value) || 0; // Define 0 se não for um número
        
        // Fazer a subtração
        let resultado = valorAtual - valorSubtrair;
        
        // Atualizar a div com o valor restante
        divValor.textContent = resultado >= 0 ? resultado : 0; // Garante que não fique negativo
    
    
}
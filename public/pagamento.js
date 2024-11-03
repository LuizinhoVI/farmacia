
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
function limpar_input(){
     document.querySelector('.nome_procudo').value =null;
     document.querySelector('.pagamento_quantidade').value = null;
     document.querySelector('.pagamento_valor').value= null;


}

function salvar() {
    const checkbox = document.querySelector('.verificar_compra');
    const nomeproduto = document.querySelector('.nome_procudo');
    const pagamento_quantidade = document.querySelector('.pagamento_quantidade');
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
   
   // console.log(pagamento_valor1.value);
    // console.log('Checkbox encontrado:', checkbox); 
    if (checkbox.checked && nomeproduto.value && pagamento_quantidade.value && pagamento_valor1.value && nomes_produtos() ) {
        // console.log('Checkbox está marcado:', checkbox.checked);
        
        
        quantidade();
        pagamento_nome();
        option();
        pagamento_valor();
        pagamento_data_hora();
        removerclass();

        checkbox.checked=false;
        limpar_input();
        limpar_produto();
       // const limpar =document.querySelectorAll('.pagamento_valor,.nome_procudo')
    } else {
        alert('Há campos não preenchidos!' );
        
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
        ficha.style.top = "200px";
        
       

    } else {
        div.style.position = "relative";
        div.style.width = "";
        div.style.top = "";
        ficha.style.position = "";
        ficha.style.top = "";
        

        // div.style.width = "80%";
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

function pagamento() {

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

}

window.onload = function() {
    document.getElementById('resultado').innerText = `Resto: ${formatarMoeda(resto)}`;
    document.querySelector('#pagamento_falta_pagar').innerText = `Resto: ${formatarMoeda(resto)}`;
};


function limite(teste) {
    const number = parseFloat(teste.value.replace(',', '.'));
   if (number > total ) {
       teste.value = null
    }


}



function pagamento_ficha_mostrar() {
        
    const table = document.getElementById('tableBody1');
    const button = document.querySelector('.mostrar_mais_1');

    table.classList.toggle('hidden');

    button.textContent = table.classList.contains('hidden') ? 'Ver mais...' : 'Ocultar...';
    
    }
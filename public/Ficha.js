


function ficha_menu(numero) {
    // mostra a div escolhida 
    document.querySelectorAll('.ficha_pessoa').forEach(opcao => {
    opcao.style.display = 'none';
    });
    
   
    
    // Mostra a opção selecionada
    
    document.querySelector('.'+numero).style.display = "none";
    
    
    }
    
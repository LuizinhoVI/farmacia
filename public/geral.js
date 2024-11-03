


function menu(numero,escolha) {
    // mostra a div escolhida 
    document.querySelectorAll('.esconder').forEach(opcao => {
    opcao.style.display = 'none';
    });
    
    document.querySelectorAll('.s3').forEach(opcao => {
    opcao.classList.remove("w3-green");
    
    });
    
    // Mostra a opção selecionada
    
    document.getElementById(numero).style.display = 'block';
    
    //const nome = document.querySelector("."+escolha);
    
    //nome.classList.add("w3-green");
    
    }
    
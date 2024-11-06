


function menu(numero,escolha) {
    // mostra a div escolhida 
    document.querySelectorAll('.esconder').forEach(opcao => {
    opcao.style.display = 'none';

    document.querySelector('#ficha_procurar_input').value=null
    });
    
    document.querySelectorAll('.s3').forEach(opcao => {
    opcao.classList.remove("w3-green");
    
    });

    
    document.getElementById(numero).style.display = 'block';
    
   // const nome = document.querySelector("."+escolha);
    
   // nome.classList.add("w3-green");
    
    }
    
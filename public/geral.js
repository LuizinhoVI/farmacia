
document.getElementById("menu2").style.display="block";

function menu(numero) {
    // mostra a div escolhida 
    document.querySelectorAll('.esconder').forEach(opcao => {
        opcao.style.display = 'none';
    });

        // Mostra a opção selecionada
        document.getElementById(numero).style.display = 'block';
}

function retorno_ficha_cadastro() {
    const nome = document.querySelector('.ficha_cadastro_nome').value;
    const cpf = document.querySelector('.cpf_resultado').value;
    const email = document.querySelector('.ficha_cadastro_email').value;
    const telefone = document.querySelector('.ficha_cadastro_telefone').value;
    const data = document.querySelector('.ficha_cadastro_data').value;


alert(nome+cpf+email+telefone+data);
}
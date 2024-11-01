function retorno_ficha_cadastro() {
    const nome = document.querySelector('.ficha_cadastro_nome').value;
    const cpf = document.querySelector('.cpf_resultado').value;
    const email = document.querySelector('.ficha_cadastro_email').value;
    const telefone = document.querySelector('.ficha_cadastro_telefone').value;
    const data = document.querySelector('.ficha_cadastro_data').value;


}


function ficha_limpar_cadastro() {

     document.querySelector('.ficha_cadastro_nome').value=null;
   document.querySelector('.cpf_resultado').value=null;
    document.querySelector('.ficha_cadastro_email').value=null;
     document.querySelector('.ficha_cadastro_telefone').value=null;
     document.querySelector('.ficha_cadastro_data').value=null;



}

function ficha_cadastrar_pessoa() {

    const nome = document.querySelector('.ficha_cadastro_nome').value;
    const cpf = document.querySelector('.cpf_resultado').value;
    const email = document.querySelector('.ficha_cadastro_email').value;
    const telefone = document.querySelector('.ficha_cadastro_telefone').value;
    const input1 = document.querySelector('.ficha_cadastro_data').value;
    const endereco = document.querySelector('.ficha_cadastro_endereco').value;
    const numero_casa = document.querySelector('.ficha_cadastro_numero_casa').value;
    const referencia = document.querySelector('.ficha_cadastro_referencia').value;
    const cep = document.querySelector('.ficha_cadastro_cep').value;

    const data1 = new Date(input1);
    const hoje = new Date();

    //const dia = data1.getDate();
    //const mes = data1.getMonth() + 1; // Os meses vão de 0 a 11
    const data = data1.getFullYear();
    const novo_ano = hoje.getFullYear();

    const ano = novo_ano - data ;
    
    //console.log(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`);

if (nome && cpf && telefone && ano && endereco && numero_casa && referencia) {

    
//alert(nome+cpf+email+telefone+data);
console.log("nome:"+nome);
console.log("cpf:"+cpf);
console.log("email:"+email);
console.log("telefone:"+telefone);
console.log("data:"+ ano);
console.log("endereço:"+ endereco);
console.log("numero da casa :"+ numero_casa);
console.log("referencia :"+ referencia);
console.log("cep :"+ cep);
}else{
    alert('Complete os dados que falta !')
    
}


}
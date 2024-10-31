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
    const data = document.querySelector('.ficha_cadastro_data').value;

    const input1 = document.getElementById('dataInput').value;
    const data1 = new Date(input1);

    const dia = data.getDate();
    const mes = data.getMonth() + 1; // Os meses vão de 0 a 11
    const ano = data.getFullYear();


if (nome && cpf && data && telefone) {

    
//alert(nome+cpf+email+telefone+data);
console.log("nome:"+nome);
console.log("cpf:"+cpf);
console.log("email:"+email);
console.log("telefone:"+telefone);
console.log("data:"+data);
}else{
    alert('não tem nome ')
    
}


}
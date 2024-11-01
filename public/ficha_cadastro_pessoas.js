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
    const cidade = document.querySelector('.ficha_cadastro_cidade').value;
    const estado = document.querySelector('.ficha_cadastro_estado').value;
    const login = document.querySelector('.ficha_cadastro_login').value;
    const credito = document.querySelector('.ficha_cadastro_credito').value;
    const senha = document.querySelector('.ficha_cadastro_senha').value;

    const data1 = new Date(input1);
    const hoje = new Date();

    //const dia = data1.getDate();
    //const mes = data1.getMonth() + 1; // Os meses vão de 0 a 11
    const data = data1.getFullYear();
    const novo_ano = hoje.getFullYear();

    const ano = novo_ano - data ;
    
    //console.log(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`);

if (nome && cpf &&  telefone && ano && endereco &&  referencia && cep && cidade && estado && login && credito && senha) {


    

    let numero_da_casa = null

    if (numero_casa == '') {
    numero_da_casa = 'sem numero ';
    }else{
       numero_da_casa = numero_casa
    }

//alert(nome+cpf+email+telefone+data);
console.log("nome:"+nome);
console.log("cpf:"+cpf);
console.log("email:"+email);
console.log("telefone:"+telefone);
console.log("data:"+ ano);
console.log("endereço:"+ endereco);
console.log("numero da casa :"+ numero_da_casa);
console.log("referencia :"+ referencia);
console.log("cep :"+ cep);
console.log("cidade :"+ cidade);
console.log("estado :"+ estado);
console.log("login:"+ login);
console.log("credito:"+ credito);
console.log("senha:"+ senha);

}else{
    alert('Complete os dados que falta !')
    
}


}

function ficha_editar(elemento) {
    const salvar = document.querySelector('.ficha_editar_salvar');
    
    console.log(elemento.value);
    if (elemento.value) {
        
        elemento.style.color='red'
        salvar.disabled= false ;
        salvar.style.cursor='pointer';
        
    }else{
        elemento.style.color='black'
        salvar.disabled= false ;
        salvar.style.cursor='pointer';
    } 
}

function salvar_edition() {
    const salvar = document.querySelector('.ficha_editar_salvar');
    const nome = document.querySelector('.ficha_procurar_nome').value;
    const limite = document.querySelector('.ficha_procurar_limite').value;
    const pagar = document.querySelector('.ficha_procurar_pagar').value;
    const cpf = document.querySelector('.ficha_procurar_cpf').value;
    const data = document.querySelector('.ficha_procurar_data').value;
    const login = document.querySelector('.ficha_procurar_login').value;   
    const telefone = document.querySelector('.ficha_procurar_telefone').value;   
    const email = document.querySelector('.ficha_procurar_email').value;   
    const rua = document.querySelector('.ficha_procurar_rua').value;   
    const referencia = document.querySelector('.ficha_procurar_referencia').value;   
    const cep = document.querySelector('.ficha_procurar_cep').value;   
    const estado = document.querySelector('.ficha_procurar_estado').value;   
    const cidade = document.querySelector('.ficha_procurar_cidade').value;   
    



    

}
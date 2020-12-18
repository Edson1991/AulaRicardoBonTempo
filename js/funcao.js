
//var empresa="Gama Academy";
//var mensagem="Sejam todos bem vindos!!!";

//alert ("Sejam todos bem vindos!!!");
//alert(empresa + "\n"+ mensagem);  

// var nome = prompt ("Gama Academy - Sejam bem vindo, por favor informe o seu nome:");
//  alert ("Muito prazer "+nome+ "!!!"+"\n" +"Você está convidado a fazer parte do nosso suuuper time!!");

function msn(){
alert("Rapa como você é curioso!!")
}    

function validar(){
var nome=formuser.nome.value;
var email=formuser.email.value
var senha=formuser.senha.value;

if(nome==""){
    alert ("Campo nome obrigatório");
    formuser.nome.focus();
    return false;
}

if(email=="" || email.indexOf('@')==-1){
    alert ("Campo email obrigatório - Ex: nome@email.com");
    formuser.email.focus();
    return false;
}

if(senha=="" || senha.length <=5){
    alert ("Campo senha obrigatório e deve ter no minimo 6 caracteres");
    formuser.senha.focus();
    return false;
}
alert ("Prezado(a) "+nome+ " neste momento iremos lhe enviar os nossos portifolios de cursos para o e-mail: "+email);
}



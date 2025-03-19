function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "joao" && senha == "123"){
        alert('Bem vindo de volta, Professorar!');
        location.href = "/home.html";
    }else{
        alert('Usuário ou senha incorretos!')
    }
}

function agendarConsulta() {
    alert("Consulta agendada");
}
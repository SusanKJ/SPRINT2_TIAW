function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { contatos: [ 
                        {nome: "João Lucas Guimarães", telefone: "31-98795-5587", profissao:"Educador Físico", Dia:"Segunda-feira", HoraDe:"9h", HoraAs:"15h"}, 
                        {nome: "Elena Silva Casto", telefone: "31-98795-5547", profissao: "Nutricionista", Dia:"Quarta-feira", HoraDe:"9h", HoraAs:"15h"}, 
                        {nome: "Pedro Gomes Araujo", telefone: "31-98795-6577", profissao: "Fisioterapeuta", Dia:"Quinta-feira", HoraDe:"9h", HoraAs:"15h"} 
                    ]}
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirContato (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strNome = document.getElementById ('campoNome').value;
    let strTelefone = document.getElementById('campoTelefone').value;
    let strProfissao = document.getElementById('campoProfissao').value;
    let strDia = document.getElementById('campoDia').value;
    let strHoraDe = document.getElementById('campoHoraDe').value;
    let strHoraAs = document.getElementById('campoHoraAs').value;
    let novoContato = {
        nome: strNome,
        telefone: strTelefone,
        profissao: strProfissao,
        Dia: strDia,
        HoraDe: strHoraDe,
        HoraAs: strHoraAs
    };
    objDados.contatos.push (novoContato);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela
    imprimeDados ();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    for (let i=0; i< objDados.contatos.length; i++) {
        strHtml += `<p>${objDados.contatos[i].nome} - ${objDados.contatos[i].telefone} - ${objDados.contatos[i].profissao} - ${objDados.contatos[i].Dia} - ${objDados.contatos[i].HoraDe} - ${objDados.contatos[i].HoraAs}</p>`
    }

    tela.innerHTML = strHtml;
}

// Configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById ('btnIncluirContato').addEventListener ('click', incluirContato);


const cachorros = require('./database/cachorros.json');
let fs = require('fs')

function salvar(){

}

function buscar(id){
    const cachorro  = cachorros.find(cachorro=>cachorro.id == id);    
    if(!cachorro){
        return `Não existe cachorro com o id ${id}`
    }
    return cachorro
}

function listar(){
    console.table(cachorros);   
}

function descrever(){
    
}

function adicionar(){
    
}

function vacina(){

}

function atribuirServico(){

}

function remover(){
    
}

let funcoes = module.exports = {
    listar
}
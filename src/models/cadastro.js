import React, { Component } from 'react';

function validarSenha(senha) {
    if (senha.length < 6 ||  senha.length > 10){
      return{valido:false, texto:"Senha deve ter de 6 a 10 Dígitos"}
    }else{
      return{valido:true, texto:""};
    }
}

function validarCpf(cpf) {
    cpf = cpf.replace(/\D/g, '')
    const multiplicador = 10
    return checaDigitoVerificador(cpf, multiplicador)
}
  
function checaDigitoVerificador(cpf, multiplicador){
  let multiplicadorInicial = multiplicador
  let soma = 0
  const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
  const digitoVerificador = cpf.charAt(multiplicador - 1)

  if(multiplicador >= 12) {
    const cpfJoin = cpfSemDigitos.join('');
    if(cpfJoin === cpf){
      return{valido:true, texto:""};
    }
  }
  
  for(let contador = 0; multiplicadorInicial > 1 ; multiplicadorInicial--) {
    soma = soma + cpfSemDigitos[contador] * multiplicadorInicial;
    contador++;
  }
  if(digitoVerificador == confirmaDigito(soma)) {
    return checaDigitoVerificador(cpf, multiplicador + 1)
  } 
     
  return{valido:false, texto:"CPF Inválido"};
}
  
function confirmaDigito(soma) {
  soma = 11 - (soma % 11)
  if (soma > 10 ){
    return soma=0
  }
  return soma
}
export {validarSenha, validarCpf};
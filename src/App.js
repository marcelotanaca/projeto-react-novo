import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@material-ui/core';
import "fontsource-roboto";
import {validarCpf, validarSenha}  from "./models/cadastro";
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component{
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align='center' >Formulário de Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{cpf:validarCpf, senha:validarSenha}}>
          <FormularioCadastro aoEnviar={aoEnviarForm}/>
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}
function aoEnviarForm(dados){

}
 
/*function validarCpf(cpf) {
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
}*/

export default App;

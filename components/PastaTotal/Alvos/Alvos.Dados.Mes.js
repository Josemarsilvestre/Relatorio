import * as React from 'react';
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import '../../i18n/i18n';
import {useTranslation} from 'react-i18next';

//My files
import Estilos_Alvo from './Estilos.module.Alvo'

//Language

export default function Dados_Mes({segunda, terca, quarta, quinta, sexta, sabado, domingo, seg, ter, quar, quin, sext, sab, dom}) {

  const { languages } = useSelector(state => state.reducerLanguages);

  const month = new Date().getMonth()+1;
  const year = new Date().getFullYear();
  const ultimodia = new Date(year, month, 0).getDate()
  
  const semana = (segunda === true ? (parseInt(seg) > 0 ? parseInt(seg) : 0): 0) + (terca === true ? (parseInt(ter) > 0 ? parseInt(ter) : 0): 0) + (quarta === true ? (parseInt(quar) > 0 ? parseInt(quar) : 0): 0) + (quinta === true ? (parseInt(quin) > 0 ? parseInt(quin) : 0): 0) + (sexta === true ? (parseInt(sext) > 0 ? parseInt(sext) : 0): 0) + (sabado === true ? (parseInt(sab) > 0 ? parseInt(sab) : 0): 0) + (domingo === true ? (parseInt(dom) > 0 ? parseInt(dom) : 0): 0);

  const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const d = new Date(year, month, 0); // DIA DA SEMANA
  let dayName = dias[d.getDay()];

  const {t, i18n} = useTranslation();

  return(
    <>
      <Text style={Estilos_Alvo.textMes}>{t('mes')}: {
        ultimodia == 28 ? (semana + semana + semana + semana) : (
        ultimodia == 29 ? (
          dayName == "Segunda" ? (semana + semana + semana + semana) + (parseInt(seg) > 0 ? parseInt(seg): 0)  : 
          dayName == "Terça" ? (semana + semana + semana + semana) + (parseInt(ter) > 0 ? parseInt(ter): 0)    : 
          dayName == "Quarta" ? (semana + semana + semana + semana) + (parseInt(quar) > 0 ? parseInt(quar): 0) : 
          dayName == "Quinta" ? (semana + semana + semana + semana) + (parseInt(quin) > 0 ? parseInt(quin): 0) : 
          dayName == "Sexta" ? (semana + semana + semana + semana) + (parseInt(sext) > 0 ? parseInt(sext): 0)  : 
          dayName == "Sábado" ? (semana + semana + semana + semana) + (parseInt(sab) > 0 ? parseInt(sab): 0)   : 
          dayName == "Domingo" ? (semana + semana + semana + semana) + (parseInt(dom) > 0 ? parseInt(dom): 0)  : 
          "Erro") : (  
        ultimodia == 30 ? (
          dayName == "Segunda" ? (semana + semana + semana + semana) + (parseInt(dom) > 0 ? parseInt(dom): 0) + (parseInt(seg) > 0 ? parseInt(seg): 0) : // Ele diz que o dayName é segunda
          dayName == "Terça" ? (semana + semana + semana + semana) + (parseInt(seg) > 0 ? parseInt(seg): 0) + (parseInt(ter) > 0 ? parseInt(ter): 0):
          dayName == "Quarta" ? (semana + semana + semana + semana) + (parseInt(ter) > 0 ? parseInt(ter): 0) + (parseInt(quar) > 0 ? parseInt(quar): 0) : 
          dayName == "Quinta" ? (semana + semana + semana + semana) + (parseInt(quar) > 0 ? parseInt(quar) : 0) + (parseInt(quin) > 0 ? parseInt(quin) : 0) : 
          dayName == "Sexta" ? (semana + semana + semana + semana) + (parseInt(quin) > 0 ? parseInt(quin): 0) + (parseInt(sext) > 0 ? parseInt(sext): 0) :          
          dayName == "Sábado" ? (semana + semana + semana + semana) + (parseInt(sext) > 0 ? parseInt(sext): 0) + (parseInt(sab) > 0 ? parseInt(sab): 0) : 
          dayName == "Domingo" ? (semana + semana + semana + semana) + (parseInt(sab) > 0 ? parseInt(sab): 0) + (parseInt(dom) > 0 ? parseInt(dom): 0) : 
          "Erro"): 
        ultimodia == 31 ? (
          dayName == "Segunda" ? (semana + semana + semana + semana) + (parseInt(sab) > 0 ? parseInt(sab) : 0) + (parseInt(dom) > 0 ? parseInt(dom) : 0) + (parseInt(seg) > 0 ? parseInt(seg) : 0) : 
          dayName == "Terça" ? (semana + semana + semana + semana) + (parseInt(dom) > 0 ? parseInt(dom) : 0) + (parseInt(seg) > 0 ? parseInt(seg) : 0) + (parseInt(ter) > 0 ? parseInt(ter) : 0) : 
          dayName == "Quarta" ? (semana + semana + semana + semana) + (parseInt(seg) > 0 ? parseInt(seg) : 0) + (parseInt(ter) > 0 ? parseInt(ter) : 0) + (parseInt(quar) > 0 ? parseInt(quar) : 0) : 
          dayName == "Quinta" ? (semana + semana + semana + semana) + (parseInt(ter) > 0 ? parseInt(ter) : 0) + (parseInt(quar) > 0 ? parseInt(quar) : 0) + (parseInt(quin) > 0 ? parseInt(quin) : 0): 
          dayName == "Sexta" ? (semana + semana + semana + semana) + (parseInt(quar) > 0 ? parseInt(quar) : 0) + (parseInt(quin) > 0 ? parseInt(quin) : 0) + (parseInt(sext) > 0 ? parseInt(sext) : 0) : 
          dayName == "Sábado" ? (semana + semana + semana + semana) + (parseInt(quin) > 0 ? parseInt(quin) : 0) + (parseInt(sext) > 0 ? parseInt(sext) : 0) + (parseInt(sab) > 0 ? parseInt(sab) : 0) : 
          dayName == "Domingo" ? (semana + semana + semana + semana) + (parseInt(sext) > 0 ? parseInt(sext) : 0) + (parseInt(sab) > 0 ? parseInt(sab) : 0) + (parseInt(dom) > 0 ? parseInt(dom) : 0) : 
          "Erro"): "Erro"))
        }h</Text>
    </>
  )
}
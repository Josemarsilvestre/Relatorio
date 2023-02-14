import * as React from 'react';
import { Text } from 'react-native'
import '../../i18n/i18n';
import {useTranslation} from 'react-i18next';

//My files
import Estilos_Alvo from './Estilos.module.Alvo'

export default function Dados({segunda, terca, quarta, quinta, sexta, sabado, domingo, seg, ter, quar, quin, sext, sab, dom}) {

  const {t, i18n} = useTranslation();

  return(
    <>
      <Text style={Estilos_Alvo.textSemana}>{t('semana')}: {(segunda === true ? (parseInt(seg) > 0 ? parseInt(seg) : 0): 0) + (terca === true ? (parseInt(ter) > 0 ? parseInt(ter) : 0): 0) + (quarta === true ? (parseInt(quar) > 0 ? parseInt(quar) : 0): 0) + (quinta === true ? (parseInt(quin) > 0 ? parseInt(quin) : 0): 0) + (sexta === true ? (parseInt(sext) > 0 ? parseInt(sext) : 0): 0) + (sabado === true ? (parseInt(sab) > 0 ? parseInt(sab) : 0): 0) + (domingo === true ? (parseInt(dom) > 0 ? parseInt(dom) : 0): 0)}h</Text>
    </>
  )
}
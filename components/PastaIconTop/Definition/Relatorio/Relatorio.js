import * as React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import { scale } from 'react-native-size-matters';
import { useSelector } from 'react-redux'
import '../../../i18n/i18n';
import {useTranslation} from 'react-i18next';

//My files imported
import Estilos_Send_Relatorio from './Estilos.module.Envio'

export default function Relatorio(){

  const {t, i18n} = useTranslation();
  
  return (
    <View>  
      <View>
        <Text style={[Estilos_Send_Relatorio.Definition_Title, {color: '#006400', fontSize: scale(18)}]}>{t('messageRelatorio')}</Text>
      </View>
      <TouchableOpacity>
        <Text style={[Estilos_Send_Relatorio.Definition_Title, {marginBottom: scale(1)}]}>{t('startMessage')}</Text>
        <Text style={[Estilos_Send_Relatorio.Definition_Title, {marginTop: scale(5), fontSize: scale(13), color: "#000000" + "90"}]}>{t('prezado')}</Text>
      </TouchableOpacity>
        
        <View style={Estilos_Send_Relatorio.UnderlineTop}></View> 
      <TouchableOpacity>
        <Text style={[Estilos_Send_Relatorio.Definition_Title, {marginBottom: scale(1)}]}>{t('lastMessage')}</Text>
        <Text style={[Estilos_Send_Relatorio.Definition_Title, {marginTop: scale(5), fontSize: scale(13), color: "#000000" + "90"}]}>{t('atenciosamente')}</Text>
      </TouchableOpacity>
        <View style={Estilos_Send_Relatorio.UnderlineTop}></View>
    </View>
  )
}
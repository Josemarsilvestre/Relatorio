import React, { useState, useRef, useEffect } from 'react'
import {Text, View, TouchableOpacity, ScrollView} from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { setLanguages } from '../../PastaDetalhes/store/actions/languageActions'
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../../i18n/i18n';
import {useTranslation} from 'react-i18next';

//My files imported
import Estilos_Definition from './Estilos.module.Defi'

export default function Settings({ navigation }){
  const {t, i18n} = useTranslation();

  useEffect(() => {
        getData();
    }, [])
    
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@languages')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        // error reading value
      }
    }
  
  return (
    <View>  
      <TouchableOpacity onPress={() => navigation.navigate('Idioma')}> 
        <Text style={Estilos_Definition.Definition_Title}>{t('language')}</Text>
      </TouchableOpacity>
        <View style={Estilos_Definition.UnderlineTop}></View>
      <TouchableOpacity onPress={() => navigation.navigate('Relatorio')}>
        <Text style={Estilos_Definition.Definition_Title}>{t('sendRela')}</Text>
      </TouchableOpacity>
        <View style={Estilos_Definition.UnderlineTop}></View>
    </View>
  ); 
}

/**=================== Geral
 * 
 * <View style={Estilos_Definition.UnderlineTop}></View>
      <TouchableOpacity onPress={() => navigation.navigate('Geral')}>
        <Text style={Estilos_Definition.Definition_Title}>Geral</Text>
      </TouchableOpacity> */
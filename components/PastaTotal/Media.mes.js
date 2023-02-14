import * as React from "react";
import { View, Text } from "react-native";
import '../i18n/i18n';
import {useTranslation} from 'react-i18next';

//My files
import Estilos_Total from "./Estilos.module.Total";

export default function MediaMes() {

  const {t, i18n} = useTranslation();

  const months = [
    `${t('janeiro')}`,
    `${t('fevereiro')}`,
    `${t('marco')}`,
    `${t('abril')}`,
    `${t('maio')}`,
    `${t('junho')}`,
    `${t('julho')}`,
    `${t('agosto')}`,
    `${t('setembro')}`,
    `${t('outubro')}`,
    `${t('novembro')}`,
    `${t('dezembro')}`,
  ];
  const d = new Date();
  {/**let monthName = months[d.getMonth()]; */}
  const year = new Date().getFullYear();

  return (
    <View>
        <Text style={Estilos_Total.lastLetra}>
        {t('De')} {months[d.getMonth() - 6]} {t('A')} {months[d.getMonth() -1]} {t('De')} {year} 
        </Text>
    </View>
  );
}

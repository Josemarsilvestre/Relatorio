import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters';
import DatePicker from 'react-native-neat-date-picker'
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';

import Estilos_EstudantesDetals from '../../PastaDetalhes/DetalhesEstudantes/Estilos.Estudantes.Detalhes';

export default function DatadoEstudo2({props, setProps}){
  const { languages } = useSelector(state => state.reducerLanguages);
  const {t, i18n} = useTranslation();
  
  const date = new Date().getDate();

  const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = (output) => {
    // You should close the modal in here
    setShowDatePicker(false)

    // The parameter 'output' is an object containing date and dateString (for single mode).
    // For range mode, the output contains startDate, startDateString, endDate, and EndDateString
    console.log(output.date) //console.log(output.date) console.log(output.dateString)
    setProps(output.dateString)
  }

  const colorOptions = {
    headerColor:'#1D3825',
    backgroundColor:'#FFF',
    weekDaysColor: '#2E8B57',
    selectedDateBackgroundColor: '#1D3825',
    confirmButtonColor: '#2E8B57'
  }
  
    return (
      <View>
        <View>
          <TouchableOpacity style={Estilos_EstudantesDetals.inputData2} onPress={openDatePicker}>
              <Text style={props!=''? {color: '#000000'} : {color: '#000000' + '70'}}>{props!=''? props : `${t('selecDate')}`}</Text>
          </TouchableOpacity> 
        </View>
        
        <View style={styles.container}>
          <DatePicker
            isVisible={showDatePicker}
            mode={'single'}
            onCancel={onCancel}
            onConfirm={onConfirm}
            language={`${languages}`}
            dateStringFormat={'dd-mm-yyyy'}
            colorOptions={colorOptions}
            modalStyles={{marginTop: scale(5)}}
          />
      </View>
    </View>
    )
}
 
const styles = ScaledSheet.create({
  container: {
    marginTop:'-300@s',
    paddingBottom: '300@s'
  }
})
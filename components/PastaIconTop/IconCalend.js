import React, { useState } from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import DatePicker from 'react-native-neat-date-picker'
import Icon from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux';
import { scale, ScaledSheet } from 'react-native-size-matters';

//My files 
export default function Calend(){
  
  const { languages } = useSelector(state => state.reducerLanguages);

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
    console.log(output.dateString)

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
        <TouchableOpacity style={{marginRight: scale(25)}} onPress={()=> openDatePicker()}>
          <Icon name="calendar" size={scale(28)} color="#fff"/>
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
            modalStyles={{marginLeft: scale(46)}}
          />
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    marginLeft:'-253@s',
    marginTop:'-50@s',
    paddingRight: '266@s'
  }
})
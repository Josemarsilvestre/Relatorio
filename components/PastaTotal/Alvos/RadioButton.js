import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function RadioButton({PROP, value, setValue}) {

  return (
    <View>
      {PROP.map(res => {
        return (
          <View key={res.key} style={styles.container}>
            <Text style={styles.radioText}>{res.text}</Text>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {setValue(res.key)}}>
              {value == res.key && <View style={styles.selectedRb} />} 
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

//res.key
const styles = StyleSheet.create({
	container: {
    marginBottom: scale(35),
    alignItems: 'center',
    flexDirection: 'row',
		justifyContent: 'space-between',
	},
  radioText: {
    marginRight: scale(35),
    fontSize: scale(18),
    color: '#000',
    //fontWeight: '600'
  },
	radioCircle: {
		height: scale(25),
		width: scale(25),
		borderRadius: scale(100),
		borderWidth: scale(2),
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: scale(15),
		height: scale(15),
		borderRadius: scale(50),
		backgroundColor: '#3740ff',
    }
});

/**
  <Text> Selecionado: {value} </Text> */
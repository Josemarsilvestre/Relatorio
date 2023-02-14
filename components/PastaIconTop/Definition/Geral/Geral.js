import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

//My files imported
import Estilos_Geral from './Estilos.module.geral'


export default function Geral({ navigation }){
  
  return (
    <View>  
      <TouchableOpacity> 
        <Text style={Estilos_Geral.Definition_Title}>Oi</Text>
      </TouchableOpacity>
        <View style={Estilos_Geral.UnderlineTop}></View>
      <TouchableOpacity>
        <Text style={Estilos_Geral.Definition_Title}>Oi</Text>
      </TouchableOpacity>
        <View style={Estilos_Geral.UnderlineTop}></View>
      <TouchableOpacity>
        <Text style={Estilos_Geral.Definition_Title}>Oi</Text>
      </TouchableOpacity>
        <View style={Estilos_Geral.UnderlineTop}></View>
    </View>
  );
}
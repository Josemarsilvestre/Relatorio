import React from "react";
import { View, Text, TextInput } from "react-native";
import { scale } from 'react-native-size-matters';
import CheckBox from "expo-checkbox";
import '../../../i18n/i18n';
import {useTranslation} from 'react-i18next';

//My files imported
import styles from './Chebox.module'

export default function App({segunda, setSegunda, terca, setTerca, quarta, setQuarta, quinta, setQuinta, sexta, setSexta, sabado, setSabado, domingo, setDomingo, seg, setSeg, ter, setTer, quar, setQuar, quin, setQuin, sext, setSex, sab, setSab, dom, setDom}) {

  const onTextChanged = (value) =>{
    // code to remove non-numeric characters from text
    const valor = value.replace(/[^0-9]/g, '')
    setSeg(valor)
  }
   
  const onTextChanged2 = (value) =>{
    const valor = value.replace(/[^0-9]/g, '')
    setTer(valor)
  }

  const onTextChanged3 = (value) =>{
    const valor = value.replace(/[^0-9]/g, '')
    setQuar(valor)
  }

  const onTextChanged4 = (value) => {
    const valor = value.replace(/[^0-9]/g, '')
    setQuin(valor)
  }

  const onTextChanged5 = (value) =>{
    const valor = value.replace(/[^0-9]/g, '')
    setSex(valor)
  }

  const onTextChanged6 = (value) =>{
    const valor = value.replace(/[^0-9]/g, '')
    setSab(valor)
  }

  const onTextChanged7 = (value) =>{
    const valor = value.replace(/[^0-9]/g, '')
    setDom(valor)
  }

  const {t, i18n} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <CheckBox
          value={segunda}
          style={{width: scale(23), height: scale(23)}}
          onValueChange={() => setSegunda(!segunda)}
          color={segunda ? "#4630EB" : undefined}
        />

        <Text style={styles.text}>
          {t('segunda')}
        </Text>
        
        <TextInput 
          style={[styles.input, {backgroundColor: segunda === true? '#d3d3d3' : '#E7E7E7'}, {color: segunda === true? '#2E8B57' : '#c0c0c0'}]}         
          keyboardType={"numeric"}
          onChangeText={(value) => onTextChanged(value)}
          value={`${seg}`}
          maxLength={1}
          textAlign={"center"}
          editable={segunda}
          selectTextOnFocus={segunda}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          value={terca}
          style={{width: scale(23), height: scale(23)}}
          onValueChange={() => setTerca(!terca)}
          color={terca ? "#4630EB" : undefined}
        />

        <Text style={styles.text}>
          {t('terca')}
        </Text>

        <TextInput 
          style={[styles.input, {backgroundColor: terca === true? '#d3d3d3' : '#E7E7E7'}, {color: terca === true? '#2E8B57' : '#c0c0c0'}]}           
          keyboardType={"numeric"}
          onChangeText={(value) => onTextChanged2(value)}
          value={`${ter}`}
          maxLength={1}
          textAlign={"center"}
          editable={terca}
          selectTextOnFocus={terca}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          value={quarta}
          style={{width: scale(23), height: scale(23)}}
          onValueChange={() => setQuarta(!quarta)}
          color={quarta ? "#4630EB" : undefined}
        />

        <Text style={styles.text}>
        {t('quarta')}
        </Text>

        <TextInput 
          style={[styles.input, {backgroundColor: quarta === true? '#d3d3d3' : '#E7E7E7'}, {color: quarta === true? '#2E8B57' : '#c0c0c0'}]}          
          keyboardType={"numeric"}
          onChangeText={(value) => onTextChanged3(value)}
          value={`${quar}`}
          maxLength={1}
          textAlign={"center"}
          editable={quarta}
          selectTextOnFocus={quarta}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          value={quinta}
          style={{width: scale(23), height: scale(23)}}
          onValueChange={() => setQuinta(!quinta)}
          color={quinta ? "#4630EB" : undefined}
        />

        <Text style={styles.text}>
        {t('quinta')}
        </Text>

        <TextInput 
          style={[styles.input, {backgroundColor: quinta === true? '#d3d3d3' : '#E7E7E7'}, {color: quinta === true? '#2E8B57' : '#c0c0c0'}]}            
          keyboardType={"numeric"}
          onChangeText={(value) => onTextChanged4(value)}
          value={`${quin}`}
          maxLength={1}
          textAlign={"center"}
          editable={quinta}
          selectTextOnFocus={quinta}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          value={sexta}
          style={{width: scale(23), height: scale(23)}}
          onValueChange={() => setSexta(!sexta)}
          color={sexta ? "#4630EB" : undefined}
        />

        <Text style={styles.text}>
        {t('sexta')}
        </Text>

        <TextInput 
          style={[styles.input, {backgroundColor: sexta === true? '#d3d3d3' : '#E7E7E7'}, {color: sexta === true? '#2E8B57' : '#c0c0c0'}]}         
          keyboardType={"numeric"}
          onChangeText={(value) => onTextChanged5(value)}
          value={`${sext}`}
          maxLength={1}
          textAlign={"center"}
          editable={sexta}
          selectTextOnFocus={sexta}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          value={sabado}
          style={{width: scale(23), height: scale(23)}}
          onValueChange={() => setSabado(!sabado)}
          color={sabado ? "#4630EB" : undefined}
        />

        <Text style={styles.text}>
        {t('sabado')}
        </Text>

        <TextInput 
          style={[styles.input, {backgroundColor: sabado === true? '#d3d3d3' : '#E7E7E7'}, {color: sabado === true? '#2E8B57' : '#c0c0c0'}]}          
          keyboardType={"numeric"}
          onChangeText={(value) => onTextChanged6(value)}
          value={`${sab}`}
          maxLength={1}
          textAlign={"center"}
          editable={sabado}
          selectTextOnFocus={sabado}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          value={domingo}
          style={{width: scale(23), height: scale(23)}}
          onValueChange={() => setDomingo(!domingo)}
          color={domingo ? "#4630EB" : undefined}
        />

        <Text style={styles.text}>
        {t('domingo')}
        </Text>

        <TextInput 
          style={[styles.input, {backgroundColor: domingo === true? '#d3d3d3' : '#E7E7E7'}, {color: domingo === true? '#2E8B57' : '#c0c0c0'}]}          
          keyboardType={"numeric"}
          onChangeText={(value) => onTextChanged7(value)}
          value={`${dom}`}
          maxLength={1}
          textAlign={"center"}
          editable={domingo}
          selectTextOnFocus={domingo}
        />
      </View>
    </View>
  );
}
import React, { useEffect } from 'react';
import {Text, View, TextInput, ScrollView, SafeAreaView, TouchableOpacity, ToastAndroid, Alert } from 'react-native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign'
import { CheckBox } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'
import { updateBloco } from '../store/actions/Actions.Informa';
import '../../i18n/i18n';
import {useTranslation} from 'react-i18next';


//My imported files
import Estilos_InformaDetalhes from './Estilos.Informa.Detalhes'
import IconCheck from './IconCheck'
import IconNoCheck from './IconNoCheck'
 
export default function Informa2({navigation, route}){

  const {t, i18n} = useTranslation();

  const [hour, setHour] = React.useState(""); 
  const [minuts, setMinuts] = React.useState(""); 
  const [pub, setPub] = React.useState("");    
  const [video, setVideo] = React.useState(""); 
  const [revi, setRevi] = React.useState(""); 
  const [studient, setStudient] = React.useState(""); 
  const [texto, setTexto] = React.useState("");
  const [task, setTask] = React.useState(blocos);
  const [check1, setCheck1] = React.useState(false); 

  const dispatch = useDispatch();
  const { blocos } = useSelector(state => state.bloco);

  useEffect(() => {
    setHour(route.params.hour)
    setMinuts(route.params.minuts)
    setPub(route.params.pub) 
    setVideo(route.params.video)
    setRevi(route.params.revi)
    setStudient(route.params.studient)
    setTexto(route.params.texto)
    setTask(blocos)
    setCheck1(route.params.check1);

    blocos.hour = hour
    blocos.minuts = minuts
    blocos.pub = pub
    blocos.video = video
    blocos.revi = revi
    blocos.studient = studient
    blocos.texto = texto
    blocos.check1 = check1
  }, [blocos])
  
  const updateTaskHandler = () => {
    const updatedBloco = {
      ...task,
      hour,
      minuts,
      pub,
      video, 
      revi,
      studient,
      texto,
      check1,
    };

    dispatch(updateBloco(
      updatedBloco,
      () => {
        navigation.goBack();
        ToastAndroid.show(`${t('atualizado')}`, ToastAndroid.LONG);
      },
      () => {
        ToastAndroid.show(`${t('deleteMessage')}`, ToastAndroid.LONG);
      },
    ));
  };

  const aviso = () => {
    if (blocos.hour === hour && blocos.minuts === minuts && blocos.pub === pub && blocos.video === video && blocos.revi === revi && blocos.studient === studient && blocos.texto === texto) {
      return navigation.goBack()
    }

    Alert.alert(
      `${t('atencion')}`,
      `${t('aviso2')}`,
      [
        {
          text: `${t('no')}`,
          onPress: () => navigation.goBack(),
        },
        {
          text: `${t('yes')}`,
          onPress: () => updateTaskHandler(),
        },
      ],
      {
        cancelable: true,
    })
  }

  const onTextChanged = (value) =>{
    // code to remove non-numeric characters from text
    const valor = value.replace(/[^0-9]/g, '')
    setHour(valor)
  }

  const onTextChanged2 = (value) =>{
    const valor = value.replace(/[^0-9]/g, '')
    setMinuts(valor)
  }

  const onTextChanged3 = (value) =>{
    const valor = value.replace(/[^0-9]/g, '')
    setPub(valor)
  }

  const onTextChanged4 = (value) => {
    const valor = value.replace(/[^0-9]/g, '')
    setVideo(valor)
  }

  const onTextChanged5 = (value) =>{
    const valor = value.replace(/[^0-9]/g, '')
    setRevi(valor)
  }

  const onTextChanged6 = (value) =>{
    const valor = value.replace(/[^0-9]/g, '')
    setStudient(valor)
  }

  const Incrementar = () =>{
    if(hour == " "){
      setHour(1)
    }
    else if(hour == ""){
      setHour(1)
    }
    else if(isNaN(hour)){
      setHour(1)
    }
    else{
      const valor = parseInt(hour) + 1
      setHour(valor)
    }
  }; 

  const Decrementar = () => {
    if(hour == " "){
      setHour(" ")
    }
    else if(hour == ""){
      setHour("")
    }
    else if(isNaN(hour)){
      setHour("")
    }
    else if ((parseInt(hour)) <= 0){
      setHour(0)
    }
    else{
      const valor = parseInt(hour) - 1
      setHour(valor)
    }
  }

  const Incrementar2 = () => {
    if(minuts == " "){
      setMinuts(1)
    }
    else if(minuts == ""){
      setMinuts(1)
    }
    else if(isNaN(minuts)){
      setMinuts(1)
    }
    else{
      const valor = parseInt(minuts) + 1
      setMinuts(valor)
    }
  };

  const Decrementar2 = () => {
    if(minuts == " "){
      setMinuts(" ")
    }
    else if(minuts == ""){
      setMinuts("")
    }
    else if(isNaN(minuts)){
      setMinuts(" ")
    }
    else if ((parseInt(minuts)) <= 0){
      setMinuts(0)
    }
    else{
      const valor = parseInt(minuts) - 1
      setMinuts(valor)
    }
  };

  const Incrementar3 = () => {
    if(pub == " "){
      setPub(1)
    }
    else if(pub == ""){
      setPub(1)
    }
    else if(isNaN(pub)){
      setPub(1)
    }
    else{
      const valor = parseInt(pub) + 1
      setPub(valor)
    }
  };

  const Decrementar3 = () => {
    if(pub == " "){
      setPub(" ")
    }
    else if(pub == ""){
      setPub("")
    }
    else if(isNaN(pub)){
      setPub(" ")
    }
    else if ((parseInt(pub)) <= 0){
      setPub(0)
    }
    else{
      const valor = parseInt(pub) - 1
      setPub(valor)
    }
  };

  const Incrementar4 = () => {
    if(video == " "){
      setVideo(1)
    }
    else if(video == ""){
      setVideo(1)
    }
    else if(isNaN(video)){
      setVideo(1)
    }
    else{
      const valor = parseInt(video) + 1
      setVideo(valor)
    }
  };

  const Decrementar4 = () => {
    if(video == " "){
      setVideo(" ")
    }
    else if(video == ""){
      setVideo("")
    }
    else if(isNaN(video)){
      setVideo(" ")
    }
    else if ((parseInt(video)) <= 0){
      setVideo(0)
    }
    else{
      const valor = parseInt(video) - 1
      setVideo(valor)
    }
  };

  const Incrementar5 = () => {
    if(revi == " "){
      setRevi(1)
    }
    else if(revi == ""){
      setRevi(1)
    }
    else if(isNaN(revi)){
      setRevi(1)
    }
    else{
      const valor = parseInt(revi) + 1
      setRevi(valor)
    }
  };

 const Decrementar5 = () => {
    if(revi == " "){
      setRevi(" ")
    }
    else if(revi == ""){
      setRevi("")
    }
    else if(isNaN(revi)){
      setRevi(" ")
    }
    else if ((parseInt(revi)) <= 0){
      setRevi(0)
    }
    else{
      const valor = parseInt(revi) - 1
      setRevi(valor)
    }
  };

  const Incrementar6 = () => {
    if(studient == " "){
      setStudient(1)
    }
    else if(studient == ""){
      setStudient(1)
    }
    else if(isNaN(studient)){
      setStudient(1)
    }
    else{
      const valor = parseInt(studient) + 1
      setStudient(valor)
    }
  };

  const Decrementar6 = () => {
    if(studient == " "){ 
      setStudient(" ")
    }
    else if(studient == ""){
      setStudient("")
    }
    else if(isNaN(studient)){
      setStudient(" ")
    }
    else if ((parseInt(studient)) <= 0){
      setStudient(0)
    }
    else{
      const valor = parseInt(studient) - 1
      setStudient(valor)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5"}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginHorizontal: 0, backgroundColor: "#E5E5E5"}}>
          <View>
              <Text style={Estilos_InformaDetalhes.Estudantes_Title}>
                {t('time')}
              </Text>

              <View>
                <View>
                    <TextInput 
                      style={Estilos_InformaDetalhes.input}
                      keyboardType={"numeric"}
                      onChangeText={(value) => onTextChanged(value)}
                      value={`${hour}`}
                      maxLength={4}
                      textAlign={"center"}
                    />
                  </View>
                <View>
                      <View style={Estilos_InformaDetalhes.Horas}>
                          <Text style={Estilos_InformaDetalhes.HoraStyle}>{t('hours')}</Text>
                      </View>
 
                      <View style={Estilos_InformaDetalhes.plus}> 
                        <TouchableOpacity onPress={Incrementar}>
                          <Icon
                            name="plus"
                            size={scale(23)}
                            style={{ marginLeft: scale(10), marginTop: scale(7), color:"#000000" + "70"}}
                          />
                        </TouchableOpacity>
                      </View>

                      <View style={Estilos_InformaDetalhes.minus}> 
                        <TouchableOpacity onPress={Decrementar}>
                          <Icon
                            name="minus"
                            size={scale(23)}
                            style={{ marginLeft: scale(10), marginTop: scale(7), color:"#000000" + "70"}}
                          />
                        </TouchableOpacity>
                      </View>      
                  </View>

                <View>
                  <TextInput 
                    style={[Estilos_InformaDetalhes.input, {backgroundColor: check1 === true? '#d3d3d3' : '#fff'}, {color: check1 === true? '#c0c0c0' : '#2E8B57'}]} 
                    keyboardType={"numeric"}
                    onChangeText={(value) => onTextChanged2(value)}
                    value={`${minuts}`}
                    maxLength={4}
                    textAlign={"center"}
                    editable={!check1}
                    selectTextOnFocus={!check1}
                  />
                </View>

                <View>
                      <View style={[Estilos_InformaDetalhes.Horas, {backgroundColor: check1 === true? '#d3d3d3' : '#fff'}]}>
                          <Text style={Estilos_InformaDetalhes.HoraStyle}>{t('minuts')}</Text>
                      </View>

                      <View style={[Estilos_InformaDetalhes.plus, {backgroundColor: check1 === true? '#d3d3d3' : '#F5F5F5'}]}>
                        <TouchableOpacity onPress={Incrementar2} disabled={check1}>
                          <Icon
                            name="plus"
                            size={scale(23)}
                            style={[Estilos_InformaDetalhes.botao, {color: check1 === true? '#000000' + "20" : '#000000' + "70"}]}
                          />
                        </TouchableOpacity>
                      </View>
                      
                      <View style={[Estilos_InformaDetalhes.minus, {backgroundColor: check1 === true? '#d3d3d3' : '#F5F5F5'}]}>
                        <TouchableOpacity onPress={Decrementar2} disabled={check1}>
                          <Icon
                            name="minus"
                            size={scale(23)}
                            style={[Estilos_InformaDetalhes.botao, {color: check1 === true? '#000000' + "20" : '#000000' + "70"}]}
                          />
                        </TouchableOpacity>
                      </View>
                  </View>
              </View>

              <View 
                style={{
                  right: scale(0),
                  width: scale(337),
                  height: scale(70),
                  margin: scale(11),
                  marginLeft: scale(7),
                  marginBottom: scale(0),
                }}>
                  <CheckBox
                    center
                    title={`${t('project')}`}
                    checked={check1}
                    onPress={() => setCheck1(!check1)}
                  />
              </View>

              <Text style={Estilos_InformaDetalhes.Estudantes_Title}>
                {t('titleTop')}
              </Text>

              <View>
                <View>
                  <TextInput  
                    style={[Estilos_InformaDetalhes.input, {backgroundColor: check1 === true? '#d3d3d3' : '#fff'}, {color: check1 === true? '#c0c0c0' : '#2E8B57'}]}                            
                    keyboardType={"numeric"}
                    onChangeText={(value) => onTextChanged3(value)}
                    value={`${pub}`}
                    maxLength={4}
                    textAlign={"center"}
                    editable={!check1}
                    selectTextOnFocus={!check1}
                  />
                </View>

                <View>
                      <View style={[Estilos_InformaDetalhes.Horas, {backgroundColor: check1 === true? '#d3d3d3' : '#fff'}]}>
                          <Text style={Estilos_InformaDetalhes.HoraStyle}>{t('pub')}</Text>
                      </View>

                      <View style={[Estilos_InformaDetalhes.plus, {backgroundColor: check1 === true? '#d3d3d3' : '#F5F5F5'}]}>
                        <TouchableOpacity onPress={Incrementar3} disabled={check1}>
                          <Icon
                            name="plus"
                            size={scale(23)}
                            style={[Estilos_InformaDetalhes.botao, {color: check1 === true? '#000000' + "20" : '#000000' + "70"}]}
                          />
                        </TouchableOpacity>
                      </View>
                      
                      <View style={[Estilos_InformaDetalhes.minus, {backgroundColor: check1 === true? '#d3d3d3' : '#F5F5F5'}]}>
                        <TouchableOpacity onPress={Decrementar3} disabled={check1}>
                          <Icon
                            name="minus"
                            size={scale(23)}
                            style={[Estilos_InformaDetalhes.botao, {color: check1 === true? '#000000' + "20" : '#000000' + "70"}]}
                          />
                        </TouchableOpacity>
                      </View>
                  </View>

                <View>
                  <TextInput 
                    style={[Estilos_InformaDetalhes.input, {backgroundColor: check1 === true? '#d3d3d3' : '#fff'}, {color: check1 === true? '#c0c0c0' : '#2E8B57'}]}  
                    keyboardType={"numeric"}
                    onChangeText={(value) => onTextChanged4(value)}
                    value={`${video}`}
                    maxLength={4}
                    textAlign={"center"}
                    editable={!check1}
                    selectTextOnFocus={!check1}
                  />
                </View>

                <View>
                      <View style={[Estilos_InformaDetalhes.Horas, {backgroundColor: check1 === true? '#d3d3d3' : '#fff'}]}>
                          <Text style={Estilos_InformaDetalhes.HoraStyle}>{t('videos')}</Text>
                      </View>

                      <View style={[Estilos_InformaDetalhes.plus, {backgroundColor: check1 === true? '#d3d3d3' : '#F5F5F5'}]}>
                        <TouchableOpacity onPress={Incrementar4} disabled={check1}>
                          <Icon
                            name="plus"
                            size={scale(23)}
                            style={[Estilos_InformaDetalhes.botao, {color: check1 === true? '#000000' + "20" : '#000000' + "70"}]}
                          />
                        </TouchableOpacity>
                      </View>
                      
                      <View style={[Estilos_InformaDetalhes.minus, {backgroundColor: check1 === true? '#d3d3d3' : '#F5F5F5'}]}>
                        <TouchableOpacity onPress={Decrementar4} disabled={check1}>
                          <Icon
                            name="minus"
                            size={scale(23)}
                            style={[Estilos_InformaDetalhes.botao, {color: check1 === true? '#000000' + "20" : '#000000' + "70"}]}
                          />
                        </TouchableOpacity>
                      </View>
                  </View>

                <View>
                  <TextInput 
                    style={[Estilos_InformaDetalhes.input, {backgroundColor: check1 === true? '#d3d3d3' : '#fff'}, {color: check1 === true? '#c0c0c0' : '#2E8B57'}]}  
                    keyboardType={"numeric"}
                    onChangeText={(value) => onTextChanged5(value)}
                    value={`${revi}`}
                    maxLength={4}
                    textAlign={"center"}
                    editable={!check1}
                    selectTextOnFocus={!check1}
                  />
                </View>

                <View>
                      <View style={[Estilos_InformaDetalhes.Horas, {backgroundColor: check1 === true? '#d3d3d3' : '#fff'}]}>
                          <Text style={Estilos_InformaDetalhes.HoraStyle}>{t('revi')}</Text>
                      </View>

                      <View style={[Estilos_InformaDetalhes.plus, {backgroundColor: check1 === true? '#d3d3d3' : '#F5F5F5'}]}>
                        <TouchableOpacity onPress={Incrementar5} disabled={check1}>
                          <Icon
                            name="plus"
                            size={scale(23)}
                            style={[Estilos_InformaDetalhes.botao, {color: check1 === true? '#000000' + "20" : '#000000' + "70"}]}
                          />
                        </TouchableOpacity>
                      </View>
                      
                      <View style={[Estilos_InformaDetalhes.minus, {backgroundColor: check1 === true? '#d3d3d3' : '#F5F5F5'}]}>
                        <TouchableOpacity onPress={Decrementar5} disabled={check1}>
                          <Icon
                            name="minus"
                            size={scale(23)}
                            style={[Estilos_InformaDetalhes.botao, {color: check1 === true? '#000000' + "20" : '#000000' + "70"}]}
                          />
                        </TouchableOpacity>
                      </View>
                  </View>

                <View>
                  <TextInput 
                    style={[Estilos_InformaDetalhes.input, {backgroundColor: check1 === true? '#d3d3d3' : '#fff'}, {color: check1 === true? '#c0c0c0' : '#2E8B57'}]}  
                    keyboardType={"numeric"}
                    onChangeText={(value) => onTextChanged6(value)}
                    value={`${studient}`}
                    maxLength={4}
                    textAlign={"center"}
                    editable={!check1}
                    selectTextOnFocus={!check1}
                  />
                </View>

                <View>
                      <View style={[Estilos_InformaDetalhes.Horas, {backgroundColor: check1 === true? '#d3d3d3' : '#fff'}]}>
                          <Text style={Estilos_InformaDetalhes.HoraStyle}>{t('studient')}</Text>
                      </View>

                      <View style={[Estilos_InformaDetalhes.plus, {backgroundColor: check1 === true? '#d3d3d3' : '#F5F5F5'}]}>
                        <TouchableOpacity onPress={Incrementar6} disabled={check1}>
                          <Icon
                            name="plus"
                            size={scale(23)}
                            style={[Estilos_InformaDetalhes.botao, {color: check1 === true? '#000000' + "20" : '#000000' + "70"}]}
                          />
                        </TouchableOpacity>
                      </View>
                      
                      <View style={[Estilos_InformaDetalhes.minus, {backgroundColor: check1 === true? '#d3d3d3' : '#F5F5F5'}]}>
                        <TouchableOpacity onPress={Decrementar6} disabled={check1}>
                          <Icon
                            name="minus"
                            size={scale(23)}
                            style={[Estilos_InformaDetalhes.botao, {color: check1 === true? '#000000' + "20" : '#000000' + "70"}]}
                          />
                        </TouchableOpacity>
                      </View>
                  </View>
              </View>

              <Text style={Estilos_InformaDetalhes.Estudantes_Title}>
                {t('nota')} <Text style={Estilos_InformaDetalhes.OpcionalStyle}>({t('optional')})</Text>
              </Text>

              <View>
                <TextInput 
                  style={Estilos_InformaDetalhes.inputLetters} 
                  placeholder={`${t('comments')}`}
                  keyboardType="twitter"
                  placeholderTextColor={"#2E8B57" + "40"}
                  onChangeText={(value) => setTexto(value)}
                  value={texto}
                />
              </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={Estilos_InformaDetalhes.Check} onPress={() => updateTaskHandler()}>
          <IconCheck />
        </TouchableOpacity>
          <IconNoCheck aviso={aviso}/> 
      </SafeAreaView>
)}
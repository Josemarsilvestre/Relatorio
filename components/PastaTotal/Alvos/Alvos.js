import React, { useEffect } from 'react'
import {Text, View, Alert, ToastAndroid, TextInput, TouchableOpacity, SafeAreaView, Modal, Pressable, ScrollView} from 'react-native'
import { scale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign'
import { updateAlvo } from '../../PastaDetalhes/store/actions/Actions.Alvo';

//My local projects
import Estilos_Alvo from './Estilos.module.Alvo'
import IconCheck from './IconCheck'
import IconNoCheck from './IconNoCheck'
import RadioButton from './RadioButton'
import ChecBox from './CheckBox/CheckBox' 
import Dados from './Alvos.Dados'
import Dados_Mes from './Alvos.Dados.Mes'
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';

export default function AlvoScreen({navigation, route}){

  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();

  const PROP = [
    {
      key: `${t('privilege1')}`, //'Publicador'
      text: `${t('privilege1')}`,
    },
    {
      key: `${t('privilege2')}`, //'Pioneiro Auxiliar'
      text: `${t('privilege2')}`,
    },
    {
      key: `${t('privilege3')}`, //'Pioneiro Regular'
      text: `${t('privilege3')}`,
    },
    {
      key: `${t('privilege4')}`, //'Pioneiro Especial'
      text: `${t('privilege4')}`,
    },
  ];

  const [hour, setHour] = React.useState("");
  const [texto, setTexto] = React.useState("");
  const [task, setTask] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const [segunda, setSegunda] = React.useState(false);
  const [terca, setTerca] = React.useState(false);
  const [quarta, setQuarta] = React.useState(false);
  const [quinta, setQuinta] = React.useState(false);
  const [sexta, setSexta] = React.useState(false);
  const [sabado, setSabado] = React.useState(false);
  const [domingo, setDomingo] = React.useState(false);

  const [seg, setSeg] = React.useState("");
  const [ter, setTer] = React.useState("");
  const [quar, setQuar] = React.useState("");
  const [quin, setQuin] = React.useState("");
  const [sext, setSext] = React.useState("");
  const [sab, setSab] = React.useState("");
  const [dom, setDom] = React.useState("");

  const { alvos } = useSelector(state => state.alvo); 
  
  useEffect(() => {
    setHour(route.params.hour)
    setValue(route.params.value)  
    setSegunda(route.params.segunda)  
    setTerca(route.params.terca) 
    setQuarta(route.params.quarta) 
    setQuinta(route.params.quinta) 
    setSexta(route.params.sexta) 
    setSabado(route.params.sabado) 
    setDomingo(route.params.domingo) 
    setTexto(route.params.texto)  

    setSeg(route.params.seg)  
    setTer(route.params.ter) 
    setQuar(route.params.quar) 
    setQuin(route.params.quin) 
    setSext(route.params.sext) 
    setSab(route.params.sab) 
    setDom(route.params.dom) 

    setTask(alvos)

    alvos.hour = hour
    alvos.value = value
    alvos.segunda = segunda
    alvos.terca = terca
    alvos.quarta = quarta
    alvos.quinta = quinta
    alvos.sexta = sexta
    alvos.sabado = sabado
    alvos.domingo = domingo
    alvos.texto = texto

    alvos.seg = seg
    alvos.ter = ter
    alvos.quar = quar
    alvos.quin = quin
    alvos.sext = sext
    alvos.sab = sab
    alvos.dom = dom
  }, [alvos])
  
  const updateTaskHandler = () => {
    const updatedBloco = {
      ...task,
      hour,
      value,
      segunda,
      terca,
      quarta,
      quinta,
      sexta,
      sabado,
      domingo,
      texto,
      seg,
      ter,
      quar,
      quin,
      sext,
      sab,
      dom,
    };

    dispatch(updateAlvo(
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
    if (task.hour === hour && task.value === value && task.texto === texto) {
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
  
  const designation = (valor) => {
    if(valor == `${t('privilege1')}`){
      setHour(30)
    } else if(valor == `${t('privilege2')}`){
      setHour(50)
    }else if(valor == `${t('privilege3')}`){
      setHour(70)
    }else if(valor == `${t('privilege4')}`){
      setHour(130)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5"}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginHorizontal: 0, backgroundColor: "#E5E5E5"}}>
        <Text style={Estilos_Alvo.Estudantes_Title}>
          {t('time')}
        </Text>

        <View>
          <View>
            <TextInput 
              style={Estilos_Alvo.input}
              keyboardType={"numeric"}
              onChangeText={(value) => onTextChanged(value)}
              value={`${hour}`}
              maxLength={4}
              textAlign={"center"}
            />
          </View>
          <View>
            <View style={Estilos_Alvo.Horas}>
              <Text style={Estilos_Alvo.HoraStyle}>{t('timeMonth')}</Text>
            </View>

            <View style={Estilos_Alvo.plus}> 
              <TouchableOpacity onPress={Incrementar}>
                <Icon
                  name="plus"
                  size={scale(23)}
                  style={{ marginLeft: scale(10), marginTop: scale(7), color:"#000000" + "70"}}
                />
              </TouchableOpacity>
            </View>

            <View style={Estilos_Alvo.minus}> 
              <TouchableOpacity onPress={Decrementar}>
                <Icon
                  name="minus"
                  size={scale(23)}
                  style={{ marginLeft: scale(10), marginTop: scale(7), color:"#000000" + "70"}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={[Estilos_Alvo.Estudantes_Title, {marginBottom: scale(5)}]}>
        {t('design')}
        </Text>

        <Pressable 
          style={[Estilos_Alvo.button1, Estilos_Alvo.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={Estilos_Alvo.textStyle2}>{t('career')}</Text>
        </Pressable>

        <Text style={Estilos_Alvo.Estudantes_Title}>
        {t('program')}
        </Text>

        <View>
          <Pressable
            style={[Estilos_Alvo.button2, Estilos_Alvo.buttonOpen]}
            onPress={() => setModalVisible2(true)}>
            <Text style={Estilos_Alvo.textStyle2}>{t('hourToday')}</Text>
          </Pressable>
        </View>

        <View style={{marginTop: scale(100)}}>
          <Text style={Estilos_Alvo.Estudantes_Title}>
          {t('nota')} <Text style={Estilos_Alvo.OpcionalStyle}>({t('optional')})</Text>
          </Text>

          <View>
            <TextInput 
              style={Estilos_Alvo.inputLetters} 
              placeholder={`${t('comments')}`}
              keyboardType="twitter"
              placeholderTextColor={"#2E8B57" + "40"}
              onChangeText={(value) => setTexto(value)}
              value={texto}
            />
          </View>
        </View>

        <View style={Estilos_Alvo.centeredView}>
          <Modal                                       
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert(`${t('modalmessge')}`);
              setModalVisible(!modalVisible);
            }}>
            <View style={[Estilos_Alvo.centeredView, modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']}>
              <View style={Estilos_Alvo.modalView}>
                <View style={{left: scale(5), top: scale(-23)}}>
                  <RadioButton PROP={PROP} value={value} setValue={setValue}/>
                </View> 
                <Pressable
                  style={[Estilos_Alvo.button, Estilos_Alvo.buttonClose]}
                  onPress={() => {setModalVisible(!modalVisible), designation(value)}}>
                  <Text style={Estilos_Alvo.textStyle}>{t('atualizar')}</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        <ScrollView>
          <View style={Estilos_Alvo.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible2}
              onRequestClose={() => {
                Alert.alert(`${t('modalmessge')}`);
                setModalVisible2(!modalVisible2);
              }}>
              <View style={[Estilos_Alvo.centeredView, modalVisible2 ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']}>
                <View style={Estilos_Alvo.modalView}>
                  <View style={{left: scale(-50), top: scale(-23)}}>
                    <ChecBox 
                      segunda={segunda} 
                      setSegunda={setSegunda} 
                      terca={terca} 
                      setTerca={setTerca} 
                      quarta={quarta} 
                      setQuarta={setQuarta} 
                      quinta={quinta} 
                      setQuinta={setQuinta} 
                      sexta={sexta} 
                      setSexta={setSexta} 
                      sabado={sabado} 
                      setSabado={setSabado} 
                      domingo={domingo} 
                      setDomingo={setDomingo} 
                      seg={seg} 
                      setSeg={setSeg} 
                      ter={ter} 
                      setTer={setTer} 
                      quar={quar} 
                      setQuar={setQuar} 
                      quin={quin} 
                      setQuin={setQuin} 
                      sext={sext} 
                      setSex={setSext} 
                      sab={sab} 
                      setSab={setSab} 
                      dom={dom} 
                      setDom={setDom}
                    /> 
                    
                    <Text style={Estilos_Alvo.text}>Total</Text>

                    <Dados segunda={segunda} terca={terca} quarta={quarta} quinta={quinta} sexta={sexta} sabado={sabado} domingo={domingo} seg={seg} ter={ter} quar={quar} quin={quin} sext={sext} sab={sab} dom={dom}/>
                    
                    <Dados_Mes segunda={segunda} terca={terca} quarta={quarta} quinta={quinta} sexta={sexta} sabado={sabado} domingo={domingo} seg={seg} ter={ter} quar={quar} quin={quin} sext={sext} sab={sab}  dom={dom}/>
                  </View> 
                  <Pressable
                    style={[Estilos_Alvo.button, Estilos_Alvo.buttonClose]}
                    onPress={() => setModalVisible2(!modalVisible2)}>
                    <Text style={Estilos_Alvo.textStyle}>{t('atualizar')}</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>   
        </ScrollView> 
      </ScrollView>

      <TouchableOpacity style={Estilos_Alvo.Check} onPress={() => updateTaskHandler()}>
        <IconCheck />
      </TouchableOpacity>
        <IconNoCheck aviso={aviso}/>
    </SafeAreaView>
  );
}
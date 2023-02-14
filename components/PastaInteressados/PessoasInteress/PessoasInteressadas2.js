import React, { useState, useEffect } from 'react';
import {Text, View, ScrollView, SafeAreaView, TouchableOpacity, Alert, Modal, ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import { updateTask } from '../../PastaDetalhes/store/actions/taskActions2'
import { scale } from 'react-native-size-matters';
import '../../i18n/i18n';
import {useTranslation} from 'react-i18next';

//My files imported
import Estilos_Interessados from './Estilos.PessInte.interessados'
import IconCheck from './IconCheck'
import IconNoCheck2 from './IconNoCheck2'
import DatadoEstudo from './DatadoEstudo'
import DatadoEstudo2 from './DatadoEstudo2'

export default function PessoasInteressadas2({ navigation, route }){

  const {t, i18n} = useTranslation();

  const [name, setname] = React.useState('')
  const [lastname, setlastname] = React.useState('')
  const [data1, setdata1] = React.useState('')
  const [data2, setdata2] = React.useState('')
  const [assunto1, setassunto1] = React.useState('')
  const [assunto2, setassunto2] = React.useState('')
  const [task, setTask] = useState({});
  const [texto, setTexto] = React.useState('');

  const dispatch = useDispatch();
  const { tasks2 } = useSelector(state => state.task2);

  useEffect(() => {
    const taskFound = tasks2.find(t => t.id === route.params.id);
    if (taskFound) {
      setname(taskFound.name)
      setlastname(taskFound.lastname)
      setdata1(taskFound.data1)
      setdata2(taskFound.data2)
      setassunto1(taskFound.assunto1)
      setassunto2(taskFound.assunto2)
      setTexto(taskFound.texto)
      setTask(taskFound)
    }
  }, [tasks2, route.params.id]);

  const updateTaskHandler = () => {
    if (task.name === name && task.lastname === lastname && task.data1 === data1 && task.data2 === data2 && task.assunto1 === assunto1 && task.assunto2 === assunto2 && task.texto === texto) {
      return Alert.alert(`${t('atencion')}`, `${t('aviso4')}`);
    }

    const updatedTask = {
      ...task,
      name,
      lastname,
      data1, 
      data2, 
      assunto1, 
      assunto2,
      texto,
    };

    dispatch(updateTask(
      updatedTask,
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
    if (task.name === name && task.lastname === lastname && task.data1 === data1 && task.data2 === data2 && task.assunto1 === assunto1 && task.assunto2 === assunto2 && task.texto === texto) {
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5"}}> 
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginHorizontal: 0, backgroundColor: "#E5E5E5"}}>
            <View>
              <View>
                <Text style={Estilos_Interessados.Estudantes_Title}>
                  {t('data')}
                </Text>
                
                <View>
                  <View style={Estilos_Interessados.inputName}>
                    <TextInput
                      style={{
                        backgroundColor: '#2E8B57' + '15'
                      }}
                      selectionColor={'#2E8B57' + '85'}
                      activeUnderlineColor={'#2E8B57'}
                      label={`${t('firstName')}`}
                      value={name}
                      onChangeText={setname}
                      maxLength={15}
                    />
                  </View>
      
                  <View style={Estilos_Interessados.inputName2}>
                    <TextInput 
                      style={{
                        backgroundColor: '#2E8B57' + '15'
                      }}
                      selectionColor={'#2E8B57' + '85'}
                      activeUnderlineColor={'#2E8B57'}
                      label={`${t('lastName')}`}
                      value={lastname}
                      onChangeText={setlastname}
                      maxLength={15}
                    />
                  </View>
                </View>
              </View>

              <View>
                <Text style={[Estilos_Interessados.Estudantes_Title, {marginTop: scale(40)}]}>
                  {t('date')}
                </Text>

                <View>
                  <View>
                    <Text style={Estilos_Interessados.Estudantes_Sub}>
                      {t('lastrevi')}
                    </Text>

                    <Text style={Estilos_Interessados.Estudantes_Sub2}>
                      {t('nextrevi')}
                    </Text>

                    <View>
                      <DatadoEstudo props={data1} setProps={setdata1}/>
                    </View>
                    
                    <View>
                      <DatadoEstudo2 props={data2} setProps={setdata2}/>
                    </View>
                  </View>
                </View>
              </View>

              <Text style={Estilos_Interessados.Estudantes_Title}>
                {t('assunto')}
              </Text>
              
              <View>
                <View style={Estilos_Interessados.inputLesson}> 
                  <TextInput
                    style={{
                      backgroundColor: '#2E8B57' + '15'
                    }}
                    selectionColor={'#2E8B57' + '85'}
                    activeUnderlineColor={'#2E8B57'}
                    label={`${t('lastAssunto')}`}
                    value={assunto1}
                    onChangeText={setassunto1}
                    maxLength={35}
                  />
                </View>

                <View style={Estilos_Interessados.inputLesson2}>
                  <TextInput 
                    style={{
                      backgroundColor: '#2E8B57' + '15'
                    }}
                    selectionColor={'#2E8B57' + '85'}
                    activeUnderlineColor={'#2E8B57'}
                    label={`${t('nextAsssunto')}`}
                    value={assunto2}
                    onChangeText={setassunto2}
                    maxLength={35}
                  />
                </View>
              </View>

              <Text style={[Estilos_Interessados.Estudantes_Title, {marginTop: scale(40)}]}>
              {t('nota')} <Text style={Estilos_Interessados.OpcionalStyle}>({t('optional')})</Text>
              </Text>

              <View style={Estilos_Interessados.inputLetters}>
                <TextInput
                  style={{
                    backgroundColor: '#2E8B57' + '15'
                  }}
                  selectionColor={'#2E8B57' + '85'}
                  activeUnderlineColor={'#2E8B57'}
                  label={`${t('comments')}`}
                  value={texto}
                  onChangeText={setTexto}
                  numberOfLines={5}
                />
              </View>
            </View>
                   
            <TouchableOpacity style={Estilos_Interessados.Check} onPress={() => updateTaskHandler()}>
              <IconCheck />
            </TouchableOpacity>

            <IconNoCheck2 aviso={aviso}/>
          </ScrollView>
    </SafeAreaView>
  )
}
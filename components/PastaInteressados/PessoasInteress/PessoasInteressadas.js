import React, {Component} from 'react';
import {Text, View, ScrollView, SafeAreaView, TouchableOpacity, Alert, ToastAndroid, Keyboard} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import { createTask } from '../../PastaDetalhes/store/actions/taskActions2'
import { scale } from 'react-native-size-matters';
import '../../i18n/i18n';
import {useTranslation} from 'react-i18next';

//My files imported
import Estilos_Interessados from './Estilos.PessInte.interessados'
import IconCheck from './IconCheck'
import IconNoCheck from './IconNoCheck'
import DatadoEstudo from './DatadoEstudo'
import DatadoEstudo2 from './DatadoEstudo2'

export default function PessoasInteressadas({ navigation }){

  const {t, i18n} = useTranslation();

  const [name, setname] = React.useState('')
  const [lastname, setlastname] = React.useState('')
  const [data1, setdata1] = React.useState('')
  const [data2, setdata2] = React.useState('')
  const [assunto1, setassunto1] = React.useState('')
  const [assunto2, setassunto2] = React.useState('')
  const [texto, setTexto] = React.useState('');

  const { tasks2 } = useSelector(state => state.task2);
  const { activeListId } = useSelector(state => state.list2);
  const dispatch = useDispatch();

  const addTodo = () => {
        if (name.trim() === '' && lastname.trim() === '') {
            Alert.alert(
                `${t('atencion')}`,
                `${t('aviso3')}`
            )
        } else {
            const alreadyExist = tasks2.find(t => t.name.toLowerCase() === name.trim().toLowerCase() && t.listId === activeListId);

            if (alreadyExist) {
                return Alert.alert(`${t('validation')}`, `${t('validationAlert')}`);
            } else {
                dispatch(createTask(
                    name,
                    activeListId,
                    lastname,
                    data1,
                    data2,
                    assunto1,
                    assunto2,
                    texto,
                    () => {
                        ToastAndroid.show(`${t('interessado')} "${name} ${lastname}" ${t('add')}`, ToastAndroid.LONG);
                        Keyboard.dismiss();
                        navigation.goBack();
                    },
                    () => { 
                        ToastAndroid.show(`${t('deleteMessage')}`, ToastAndroid.LONG); 
                        navigation.goBack();
                    },
                ));
            }
        }
    };

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

            <TouchableOpacity style={Estilos_Interessados.Check} onPress={() => addTodo()}>
              <IconCheck />
            </TouchableOpacity>
            
            <IconNoCheck />
          </ScrollView>
    </SafeAreaView>
  )
}